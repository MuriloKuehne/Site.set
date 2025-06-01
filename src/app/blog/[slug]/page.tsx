import NotFound from "@/app/not-found"
import PostPage from "@/pages/blog-page/[slug]"
import { allPosts } from "contentlayer/generated"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
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
