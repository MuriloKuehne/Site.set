"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

type ErrorBoundaryProps = {
  error?: Error
  reset?: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center text-gray-100 flex-col">
      <div className="max-w-md w-full text-center">
        <div className="relative inline-block mb-6">
          <AlertTriangle size={64} className="text-gray-100 mx-auto" />
          <div className="absolute h-1 w-16 bg-red-500 rotate-12 top-1/2 left-1/2 -translate-x-1/2 opacity-80 -translate-y-1/2"></div>
        </div>
        <h2 className="text-heading-xl text-gray-100 font-sans mb-2">
          Algo deu errado!
        </h2>
        <p>{error?.message || "Ocorreu um erro inesperado."}</p>
        <Button variant={"primary"} onClick={reset} className="mt-4">
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}
