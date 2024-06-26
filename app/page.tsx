"use client"
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/image";
import NextImage from "next/image";

export default function Home() {
  return (
    <section className="flex md:py-10 items-center flex-col md:flex-row align-middle">
      <div className="inline-block w-9/12 justify-center md:pl-3">
        <h1 className={title()}>Hello! I'm&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Jackson.&nbsp;</h1>
        <span className="animate-pulse hidden md:inline-block"><h1 className={title()}>👋</h1></span>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          A versatile full stack developer with a passion for creating immersive UI, intuitive UX, and efficient API's 🙌
        </h2>
      </div>
      <div className="inline-block mt-4 md:mt-0 md:w-1/2 text-center justify-center px-2 sm:px-10 lg:px-20">
        <Image
          as={NextImage}
          priority={true}
          width={240}
          height={240}
          src="/me.jpeg"
          alt="NextUI Album Cover"
          className="hover:animate-bounce"
        />
      </div>
    </section>
  );
}
