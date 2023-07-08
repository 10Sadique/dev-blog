'use client';

import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();

  console.log(session);

  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
