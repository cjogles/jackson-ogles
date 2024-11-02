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
    <>
      <h1 className={title()}>About</h1>
      <h2 className="mt-8">
        I enjoy building things and learning how they work.
        <br/>
        Engineering software is one of the most potent ways to engage with that passion.
        <br/>
        I feel grateful to have the chance to work on projects that help people.
        <br/>
        And I feel lucky to have the chance to work with amazing people.
        <br/>
        I am humbled by the vast amount of knowledge that exists in this field.
        <br/>
        And I can't wait to see what I learn next!
        <p className="text-sky-800 text-lg">
          <a href="/resume.pdf" download="jackson_ogles_resume">Download my resume 📝</a>
        </p>
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
    </>
  );
};
