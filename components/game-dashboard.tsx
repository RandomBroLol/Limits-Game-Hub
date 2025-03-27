"use client"

import { Button } from "@/components/ui/button"

import { useState, useMemo } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { GameGrid } from "./game-grid"
import { MobileNav } from "./mobile-nav"
import { games as allGames } from "./game-data"

export function GameDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter games based on search query
  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return allGames

    const query = searchQuery.toLowerCase().trim()
    return allGames.filter(
      (game) => game.title.toLowerCase().includes(query) || game.category.toLowerCase().includes(query),
    )
  }, [searchQuery])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onSearch={setSearchQuery} searchQuery={searchQuery} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold md:text-3xl">
                {searchQuery ? "Search Results" : "Popular Online Games"}
              </h1>
              {filteredGames.length > 0 && searchQuery && (
                <p className="text-sm text-muted-foreground">
                  Found {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
                </p>
              )}
            </div>

            {filteredGames.length === 0 && searchQuery ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <h2 className="mb-2 text-xl font-semibold">No games found</h2>
                <p className="mb-6 text-muted-foreground">We couldn't find any games matching "{searchQuery}"</p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            ) : (
              <GameGrid games={filteredGames} />
            )}
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}

