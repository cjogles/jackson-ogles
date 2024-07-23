import Avatar from "./avatar";
import CoverImage from "./cover-image";
import { type Author } from "../../interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  deploy: string;
  github: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  deploy,
  github
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          {github && <p className="my-4 text-lg leading-tight">
            <Link href={`${github}`} className="hover:underline" target="_blank">
              ⭐ See Github Code
            </Link>
          </p>}
          {deploy && <p className="my-4 text-lg leading-tight">
            <Link href={`${deploy}`} className="hover:underline" target="_blank">
              ⭐ See deployment of project on Vercel
            </Link>
          </p>}
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}