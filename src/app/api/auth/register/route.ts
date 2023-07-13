import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import User from '@/models/user.model';
import connect from '@/utils/db';

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse('User has been created.', { status: 201 });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
