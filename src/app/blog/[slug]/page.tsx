import NotFound from "@/app/not-found"
import PostPage from "@/pages/blog-page/[slug]"
import { allPosts } from "contentlayer/generated"
import { title } from "process"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O post requesitado não existe.",
    }
  }
  return {
    title: post.title,
    description: post.description,
    author: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://site-set-two.vercel.app/blog/${post.slug}`,
      siteName: "Site.Set",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "pt-BR",
      type: "article",
    },
  }
}

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    NotFound()
  } else {
    return <PostPage post={post} />
  }
}
