"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import me from "../public/me.jpeg";


export default function Home() {
  return (
    <section className="flex py-8 md:py-10 items-center">
      <div className="inline-block w-9/12 justify-center pl-3">
        <h1 className={title()}>Hello! I'm&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Jackson.&nbsp;</h1>
        <span className="animate-pulse"><h1 className={title()}>👋</h1></span>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          A versatile full stack developer with a passion for creating immersive UI, intuitive UX, and efficient API's 🙌
        </h2>
      </div>
      <div className="inline-block w-1/2 text-center justify-center px-2 sm:px-10 lg:px-20">
        <Image
          as={NextImage}
          priority={true}
          width={240}
          height={240}
          src="/me.jpeg"
          alt="NextUI Album Cover"
          className="m-5 hover:animate-bounce"
        />
      </div>

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
