import { type Author } from "../../interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string | null;
  excerpt: string;
  author: Author;
  slug: string;
  deploy: string;
  github: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  deploy,
  github,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
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
      <div className="text-lg mb-4">
        <DateFormatter dateString={date || null} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
