import type { Metadata } from "next"
import { LandingPage } from "@/templates/landing-page"

export const metadata: Metadata = {
  title: "Site.Set",
  description:
    "Venda seus produtos como afiliado em um único lugar, com Site.Set",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description:
      "Venda seus produtos como afiliado em um único lugar, com Site.Set",
    url: "https://https://site-set-two.vercel.app/og-image.png",
    siteName: "Site.Set",
    images: [
      {
        url: "https://site.set/og-image.png",
        width: 1200,
        height: 630,
        alt: "Site.Set - Venda seus produtos como afiliado em um único lugar",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <LandingPage />
    </>
  )
}
