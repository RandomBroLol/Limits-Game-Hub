"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center text-foreground">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold">Settings</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how Limits Game Hub looks on your device.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label>Theme</Label>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant={resolvedTheme === "light" ? "default" : "outline"}
                    className="flex items-center gap-2"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-5 w-5" />
                    Light Mode
                  </Button>
                  <Button
                    variant={resolvedTheme === "dark" ? "default" : "outline"}
                    className="flex items-center gap-2"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-5 w-5" />
                    Dark Mode
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {resolvedTheme === "light" ? "Light mode is currently active." : "Dark mode is currently active."}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-1">
                <Label>Username</Label>
                <div className="rounded-md border border-input bg-background px-3 py-2">gamer123</div>
              </div>
              <div className="grid gap-1">
                <Label>Email</Label>
                <div className="rounded-md border border-input bg-background px-3 py-2">gamer@example.com</div>
              </div>
              <Button variant="destructive" className="mt-4">
                Log Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

