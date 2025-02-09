import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Head>
        <title>{heroPost.title}</title>
        <meta name="description" content={heroPost.description} />
        <meta name="keywords" content={heroPost.keywords} />
        <meta property="og:title" content={heroPost.title} />
        <meta property="og:description" content={heroPost.description} />
        <meta property="og:image" content={heroPost.coverImage} />
        <meta property="og:url" content={heroPost.deploy} />
        <meta 
          property="og:url" 
          content={`https://jacksonogles.com/posts/${heroPost.slug}`} 
        />
      </Head>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          github={heroPost.github}
          deploy={heroPost.deploy}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
