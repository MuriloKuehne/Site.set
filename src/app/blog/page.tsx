import { Metadata } from "next"
import { BlogList } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas para impulsionar suas vendas como afiliado com Site.Set",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description:
      "Venda seus produtos como afiliado em um único lugar, com Site.Set",
    url: "https://site-set-two.vercel.app/og-image.png",
    siteName: "Site.Set",
    images: [
      {
        url: "https://site-set-two.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
}

export default function BlogListPage() {
  // acontece exclusivamente no lado do servidor
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <BlogList posts={sortedPosts} />
}
