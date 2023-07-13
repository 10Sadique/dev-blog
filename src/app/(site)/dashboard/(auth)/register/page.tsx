'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(5, { message: 'Name is required' }).max(50),
  email: z.string().min(8, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must contain 6 characters' }),
});

const Register = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <div className="py-24">
      <div className="container">
        <Card className="w-full lg:w-[500px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-black lg:text-3xl mb-3 text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                Sign Up
              </span>
            </CardTitle>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full lg:w-[500px] mx-auto">
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" {...field} placeholder="Name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                      'Sing Up'
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
              Sign up with Google
            </Button>

            <div>
              Already have an account?{' '}
              <Link className="underline" href={'/dashboard/login'}>
                Sign In
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
