'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().min(8, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must contain 6 characters' }),
});

const Login = () => {
  const router = useRouter();
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (session.status === 'loading') {
    return (
      <div className="container py-56 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard');
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    signIn('credentials', { ...values });
  }

  return (
    <div className="py-24">
      <div className="container">
        <Card className="w-full lg:w-[500px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-black lg:text-3xl mb-3 text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                Sign In
              </span>
            </CardTitle>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" {...field} placeholder="Email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={form.formState.isLoading}
                    type="submit"
                    className="w-full font-semibold"
                  >
                    {form.formState.isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Sing In'
                    )}
                  </Button>
                </CardContent>
              </div>
            </form>
          </Form>
          <CardFooter className="flex flex-col">
            <p className="text-center mb-4 text-zinc-500 dark:text-zinc-400 text-sm">
              OR
            </p>
            <Button
              className="font-semibold w-full mb-5"
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            >
              Sign in with Google
            </Button>

            <div>
              Don&apos;t have an account?{' '}
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
