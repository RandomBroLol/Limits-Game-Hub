import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Gamepad2 className="h-6 w-6 text-primary" />
      <span className="hidden text-xl font-bold text-primary sm:inline-block">Limits Game Hub</span>
    </Link>
  )
}

