"use client"
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/image";
import NextImage from "next/image";

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
    </section>
  );
}
