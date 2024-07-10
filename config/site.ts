export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jackson Ogles Portfolio Website",
  description: "This is Jackson's web development website to showcase his resume, projects, experience, and skills. Built using React and Next.js. Includes a continuously updated blog.",
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
    {
      label: "Blog",
      href: "/blog",
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
    },
    {
      label: "Blog",
      href: "/blog",
    }
  ],
  links: {
    github: "https://github.com/cjogles",
    linkedin: "https://www.linkedin.com/in/cjogles/"
  },
};
