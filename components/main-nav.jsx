'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { ModeToggle } from './mode-togle';
import { linkPages, linksExternal } from '@/configs/site-links';

export default function MainNav() {
  const pathname = usePathname();
  return (
    <Navbar isBlurred className="bg-gradient-to-r from-[#9E768F] to-[#9FA4C4]">
      <NavbarContent justify="start">
        {linkPages.map((link) => (
          <NavbarItem key={link.key} isActive={pathname === link.href}>
            <NextLink color="foreground" href={link.href}>
              {link.title}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarBrand className="hidden sm:flex justify-center">
        <h2 className="font-bold text-inherit text-xl">CCR</h2>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {linksExternal.map((link) => (
          <NavbarItem key={link.key}>
            <Link color="foreground" href={link.href} isExternal>
              {link.title}
            </Link>
          </NavbarItem>
        ))}

        <NavbarContent>
          <NavbarItem className="ml-12 hidden lg:flex">
            <ModeToggle />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
