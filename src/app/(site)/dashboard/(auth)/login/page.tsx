'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="py-24">
      <div className="container space-x-3">
        <Card className="w-full lg:w-[500px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-black lg:text-3xl mb-3 text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                Sign In
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              <Input required type="email" name="email" placeholder="Email" />
              <Input
                required
                type="password"
                name="password"
                placeholder="Password"
              />
              <Button type="submit" className="w-full">
                Sing In
              </Button>
            </form>
          </CardContent>

          <p className="text-center my-4 text-zinc-500 dark:text-zinc-400 text-sm">
            OR
          </p>

          <CardFooter className="flex flex-col">
            <Button
              className="font-semibold w-full mb-5"
              onClick={() => signIn('google')}
            >
              Sign in with Google
            </Button>

            <div>
              Already have an account?{' '}
              <Link className="underline" href={'/dashboard/register'}>
                Sign Up
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
