import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface Game {
  id: number
  title: string
  image: string
  category: string
  rating: number
  isFavorite: boolean
  url: string
}

interface GameGridProps {
  games: Game[]
}

export function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <Card key={game.id} className="overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="p-0">
            <div className="relative">
              <div className="h-[200px] w-full overflow-hidden bg-card">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={350}
                  height={200}
                  className="h-[200px] w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.src = `/placeholder.svg?height=200&width=350&text=${encodeURIComponent(game.title)}`
                  }}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
              >
                <Heart className={`h-5 w-5 ${game.isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="mb-2">
                {game.category}
              </Badge>
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1 h-4 w-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                {game.rating}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">{game.title}</h3>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" asChild>
              <a href={game.url} target="_blank" rel="noopener noreferrer">
                Play
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

