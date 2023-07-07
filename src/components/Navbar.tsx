'use client';

import {
  Home,
  Gem,
  Milestone,
  Info,
  Contact,
  LayoutDashboard,
} from 'lucide-react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ModeToggle } from './ToggleMode';
import { MobileMenu } from './MobileMenu';

export type RouteType = {
  id: number;
  label: string;
  href: string;
  active: boolean;
  icon: JSX.Element;
};

export const Navbar = () => {
  const pathname = usePathname();
  const routes: RouteType[] = [
    {
      id: 1,
      label: 'Home',
      href: '/',
      active: pathname === '/',
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      id: 2,
      label: 'Portfolio',
      href: '/portfolio',
      active: pathname === '/portfolio',
      icon: <Gem className="mr-2 h-4 w-4" />,
    },
    {
      id: 3,
      label: 'Blog',
      href: '/blog',
      active: pathname === '/blog',
      icon: <Milestone className="mr-2 h-4 w-4" />,
    },
    {
      id: 4,
      label: 'About',
      href: '/about',
      active: pathname === '/about',
      icon: <Info className="mr-2 h-4 w-4" />,
    },
    {
      id: 5,
      label: 'Contact',
      href: '/contact',
      active: pathname === '/contact',
      icon: <Contact className="mr-2 h-4 w-4" />,
    },
    {
      id: 6,
      label: 'Dashboard',
      href: '/dashboard',
      active: pathname.startsWith('/dashboard'),
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="py-2 border-b">
      <div className="container flex items-center justify-between">
        <Link href={'/'} className="font-bold text-2xl">
          Moonshine
        </Link>

        <div className="flex items-center gap-5">
          <div
            className={clsx(
              'lg:flex text-zinc-400 items-center gap-x-8 hidden font-semibold dark:text-zinc-500'
            )}
          >
            {routes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                className={clsx(
                  route.active && 'text-gray-950 dark:text-zinc-200'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <ModeToggle />
          <MobileMenu routes={routes} />
        </div>
      </div>
    </nav>
  );
};
