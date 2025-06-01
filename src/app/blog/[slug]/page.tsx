import NotFound from "@/app/not-found"
import PostPage from "@/pages/blog-page/[slug]"
import { allPosts } from "contentlayer/generated"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
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
