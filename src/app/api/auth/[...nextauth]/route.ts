import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import connect from '@/utils/db';
import User from '@/models/user.model';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        await connect();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const user = await User.findOne({ email: email });
          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password
            );
            if (!isPasswordCorrect) {
              throw new Error('Pasword is incorrect');
            }
            return user;
          } else {
            throw new Error('User not found');
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connect();
      try {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = new User({ email: user.email, name: user.name });
          await newUser.save();
        }
        return true;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
