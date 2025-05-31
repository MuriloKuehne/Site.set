import { BlogList } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"

export default function BlogListPage() {
  // acontece exclusivamente no lado do servidor
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <BlogList posts={sortedPosts} />
}
