import { Button } from "@/components/ui/button"
import { FileQuestion, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md text-center w-full">
        <FileQuestion size={64} className="text-gray-100 mx-auto mb-6" />
      </div>
      <div>
        <h2 className="text-gray-100 text-2xl md:text-3xl font-bold mb-4">
          404 - Página não encontrada
        </h2>
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <Button variant={"primary"} asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button variant={"secondary"} asChild>
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  )
}
