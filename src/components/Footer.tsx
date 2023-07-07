import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-y-7">
        <p className="text-center lg:text-left dark:text-zinc-400 text-gray-600 text-balance">
          © 2023 Moonshine. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <Link href={'/'}>
            <Facebook />
          </Link>
          <Link href={'/'}>
            <Twitter />
          </Link>
          <Link href={'/'}>
            <Instagram />
          </Link>
          <Link href={'/'}>
            <Youtube />
          </Link>
        </div>
      </div>
    </footer>
  );
};
