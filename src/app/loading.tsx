import { Loader2 } from "lucide-react"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="animate-spin duration-900 text-blue-500 size-20" />
    </div>
  )
}
