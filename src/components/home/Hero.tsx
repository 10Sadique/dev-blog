import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="py-24 space-y-8 lg:space-y-14 text-center">
      <h1 className="font-black lg:text-9xl text-4xl text-balance">
        Better{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr dark:from-pink-500 dark:via-red-500 dark:to-yellow-500 from-rose-400 via-fuchsia-500 to-indigo-500">
          design
        </span>{' '}
        for digital products.
      </h1>
      <p className="lg:text-lg dark:text-zinc-400 text-zinc-600">
        Turning your Idea into Reality. We bring together the teams from the
        global tech industry.
      </p>

      <Link href={'/portfolio'} className="inline-block">
        <Button className="font-semibold px-8">See Our Works</Button>
      </Link>
    </div>
  );
};

export default Hero;
