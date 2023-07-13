import { AlignJustify } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { RouteType } from './Navbar';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface IMobileMenu {
  routes: RouteType[];
}

export const MobileMenu: React.FC<IMobileMenu> = ({ routes }) => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignJustify />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="text-xl font-bold">
            Moonshine
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {routes.map((route) => (
              <DropdownMenuItem key={route.id}>
                <Link
                  href={route.href}
                  className="flex items-center gap-1.5 py-1.5 w-full h-full font-semibold text-lg"
                >
                  {route.icon}
                  <span>{route.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <Button onClick={() => signOut()} className="w-full">
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
