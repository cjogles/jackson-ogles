import markdownStyles from "./markdown-styles.module.css";
import Link from "next/link";

type Props = {
  content: string;
  github: string;
  deploy: string;
};

export function PostBody({ content, github, deploy }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
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
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
