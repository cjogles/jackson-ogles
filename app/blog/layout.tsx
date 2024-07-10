import Footer from "../_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../../lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
// import { ThemeSwitcher } from "../_components/theme-switcher";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}. Authored by Jackson Ogles`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(inter.className, "")}
    >
      {/* <ThemeSwitcher /> */}
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
