import Link from "next/link"
import { Home, Gamepad2 } from "lucide-react"

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 z-30 flex h-16 w-full items-center justify-around border-t bg-background md:hidden">
      <Link
        href="/"
        className="flex flex-1 flex-col items-center justify-center text-muted-foreground hover:text-foreground"
      >
        <Home className="h-5 w-5" />
        <span className="mt-1 text-xs">Home</span>
      </Link>
      <Link href="/" className="flex flex-1 flex-col items-center justify-center text-primary hover:text-primary">
        <Gamepad2 className="h-5 w-5" />
        <span className="mt-1 text-xs">Games</span>
      </Link>
      <Link
        href="/limit"
        className="flex flex-1 flex-col items-center justify-center text-muted-foreground hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
        <span className="mt-1 text-xs">Limits Space</span>
      </Link>
    </div>
  )
}

