import type { Metadata } from "next"
import { Layout } from "@/components/layout"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Site.Set",
  description:
    "Venda seus produtos como afiliado em um único lugar, com Site.Set",
  openGraph: {
    title: "Site.Set",
    description:
      "Venda seus produtos como afiliado em um único lugar, com Site.Set",
    url: "https://site-set-two.vercel.app/og-image.png",
    siteName: "Site.Set",
    images: [
      {
        url: "https://site-set-two.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Site.Set - Venda seus produtos como afiliado em um único lugar",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
