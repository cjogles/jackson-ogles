export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jackson Ogles Portfolio Website",
  description: "React, Next.js, NextUI",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/cjogles",
    linkedin: "https://www.linkedin.com/in/cjogles/"
  },
};
