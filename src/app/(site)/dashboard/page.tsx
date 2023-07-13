'use client';

import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  console.log(session);

  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (session.status === 'loading') {
    return (
      <div className="container py-56 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (isLoading) {
    return (
      <div className="container py-56 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (session.status === 'authenticated') {
    return (
      <div className="container py-14">
        <h1 className="font-black text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 mb-8">
          Dashboard
        </h1>
        <p className="font-semibold">*This is a private route.</p>
      </div>
    );
  }
};

export default Dashboard;
