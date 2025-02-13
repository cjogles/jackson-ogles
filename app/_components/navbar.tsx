"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
// import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
// import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useReducer } from 'react';

import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "./theme-switcher";
import {
  GithubIcon,
  // SearchIcon,
  LinkedinIcon
} from "./icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <p className="mt-4">Light/Dark Mode</p>
          <ThemeSwitcher />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
