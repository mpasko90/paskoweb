import { BlogPostSchema } from "@/components/seo/BlogPostSchema";
import { generateOGImageURL } from "@/lib/og-image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import readingTime from "reading-time";
import { getAllPosts, getPostBySlug, type BlogPost } from "@/lib/blog";

// Exportuj config dla ISR
export const revalidate = 3600; // rewalidacja co godzinę

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generowanie metadanych dla każdego posta
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post nie znaleziony | Michał Paśko",
      description: "Przepraszamy, nie znaleziono szukanego artykułu.",
    };
  }

  const ogImage = generateOGImageURL({
    title: post.title,
    description: post.excerpt,
    type: "article",
  });

  return {
    title: `${post.title} | Michał Paśko`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Michał Paśko"],
      images: [ogImage],
    },
  };
}

// Generowanie statycznych parametrów dla ISR
export async function generateStaticParams() {
  const posts: BlogPost[] = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Strona artykułu
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post: BlogPost | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readingStats = readingTime(post.content);

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto py-8">
      <BlogPostSchema
        title={post.title}
        description={post.excerpt}
        publishedDate={post.publishedAt}
        modifiedDate={post.updatedAt}
        author={{
          name: "Michał Paśko",
          url: "https://paskomichal.pl",
        }}
        image={generateOGImageURL({
          title: post.title,
          description: post.excerpt,
          type: "article",
        })}
      />

      <h1>{post.title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span className="mx-2">•</span>
        <span>{Math.ceil(readingStats.minutes)} min czytania</span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
