import { title } from "../_components/primitives";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  const data = [
    { image: "/assets/collage/c9.jpeg"},
    { image: "/assets/collage/c8.jpg"},
    { image: "/assets/collage/c7.jpeg"},
    { image: "/assets/collage/c6.jpeg"},
    { image: "/assets/collage/c5.jpeg"},
    { image: "/assets/collage/c4.jpeg"},
    { image: "/assets/collage/c3.jpeg"},
    { image: "/assets/collage/c2.jpeg"},
    { image: "/assets/collage/c1.jpeg"},
  ];
  return (
    <div className="mt-16">
      <h1 className={title()}>About</h1>
      <h2 className="mt-8 text-center text-lg line-height-8 px-24">
        I love building and understanding how things work. Software engineering fuels that passion, and web development lets me create meaningful, accessible solutions. I&apos;m grateful to work on projects that help people alongside amazing colleagues. The depth of this field humbles me, and I&apos;m excited for the future.
        <br/>
        {/* <p className="text-sky-800 text-lg">
          <a href="/resume.pdf" download="jackson_ogles_resume">Download my resume 📝</a>
        </p> */}
      </h2>
      <div className="max-w-full">
        <div className="p-6 mx-auto">
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => {
              return (
                <>
                  <article
                    className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl flex justify-center items-center"
                  >
                    <div
                      // href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl flex justify-center items-center">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
