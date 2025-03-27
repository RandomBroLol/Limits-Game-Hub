import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LimitsSpace() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center border-b px-8 py-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M2 6h6m4 0h10"></path>
            <path d="M2 12h18"></path>
            <path d="M10 18h12"></path>
          </svg>
          <span className="text-xl font-bold text-primary">Limits Space</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-8">
        <Link href="/" className="mb-4 inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Games
        </Link>

        <h1 className="mb-8 text-4xl font-bold">Welcome to Limits Space</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:translate-y-[-5px]">
            <div className="aspect-video w-full">
              <img
                src="/placeholder.svg?height=180&width=300"
                alt="Community Events"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Community Events</h2>
              <p className="mb-6 text-muted-foreground">
                Join gaming tournaments, challenges, and special events with the Limits community.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Explore Events
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:translate-y-[-5px]">
            <div className="aspect-video w-full">
              <img
                src="/placeholder.svg?height=180&width=300"
                alt="Game Forums"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Game Forums</h2>
              <p className="mb-6 text-muted-foreground">
                Discuss strategies, share tips, and connect with other players in our game-specific forums.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Join Discussions
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:translate-y-[-5px]">
            <div className="aspect-video w-full">
              <img
                src="/placeholder.svg?height=180&width=300"
                alt="Friend Finder"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Friend Finder</h2>
              <p className="mb-6 text-muted-foreground">
                Find gaming buddies who share your interests and play the same games you love.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Find Friends
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:translate-y-[-5px]">
            <div className="aspect-video w-full">
              <img
                src="/placeholder.svg?height=180&width=300"
                alt="Game Achievements"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Achievements</h2>
              <p className="mb-6 text-muted-foreground">
                Track your gaming milestones and show off your accomplishments across all games.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                View Achievements
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

