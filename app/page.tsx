"use client"
import { title, subtitle } from "./_components/primitives";
import {Image} from "@nextui-org/image";
import { PiFileHtml, PiFileCss, PiFileVue } from "react-icons/pi";
import { SiJavascript, SiTsnode } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNode, FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

import NextImage from "next/image";

export default function Home() {
  return (
    <section className="mt-16">
      <div className="flex md:py-10 items-center flex-col md:flex-row align-middle">
        <div className="inline-block w-9/12 justify-center md:pl-3">
          <h1 className={title()}>Hello! I&apos;m&nbsp;</h1>
          <h1 className={title({ color: "blue" })}>Jackson.&nbsp;</h1>
          <span className="animate-pulse hidden md:inline-block"><h1 className={title()}>👋</h1></span>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            A versatile full stack web developer with a passion for creating immersive UI, intuitive UX, and efficient API&apos;s 🙌. Let&apos;s build together!
          </h2>
          {/* <h3 className="text-sky-800 text-lg"><a href="/resume.pdf" download="jackson_ogles_resume">Download my resume 📝</a></h3> */}
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
      </div>
      <div className="py-12">
        <div className="flex justify-between">
          <PiFileHtml size={30}/>
          <PiFileCss size={30}/>
          <SiJavascript size={30}/>
          <SiTsnode size={30}/>
          <RiReactjsFill size={30}/>
          <PiFileVue size={30}/>
          <FaNode size={30}/>
          <TbBrandRedux size={30}/>
          <BiLogoPostgresql size={30}/>
          <FaGitAlt size={30}/>
        </div>
      </div>
    </section>
  );
}

// import Container from "./_components/container";
// import { HeroPost } from "./_components/hero-post";
// import { Intro } from "./_components/intro";
// import { MoreStories } from "./_components/more-stories";
// import { getAllPosts } from "../lib/api";

// export default function Index() {
//   const allPosts = getAllPosts();

//   const heroPost = allPosts[0];

//   const morePosts = allPosts.slice(1);

//   return (
//     <main>
//       <Container>
//         <Intro />
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           excerpt={heroPost.excerpt}
//         />
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//       </Container>
//     </main>
//   );
// }
