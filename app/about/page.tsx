import { title } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  const data = [
    { image: "/c9.jpeg"},
    { image: "/c8.jpg"},
    { image: "/c7.jpeg"},
    { image: "/c6.jpeg"},
    { image: "/c5.jpeg"},
    { image: "/c4.jpeg"},
    { image: "/c3.jpeg"},
    { image: "/c2.jpeg"},
    { image: "/c1.jpeg"},
  ];
  return (
    <>
      <h1 className={title()}>About</h1>
      <h2 className="mt-8">You can always find me coding! It's so fun to build using modern web technologies. <br/> You can find me at my local coffee shop, at home or on the go! <br/> My wife likes to give me coding buddies occassionaly as well (see kids and pets lol)</h2>
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
