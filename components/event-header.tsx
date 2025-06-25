"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Terminal, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function EventHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-gruvbox-bg border-b border-gruvbox-yellow",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/sos-logo.png"
            alt="Sul Open Systems Logo"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            className="transition-all duration-200 opacity-80"
          />
          <div className={cn("font-mono transition-all duration-200", isScrolled ? "text-lg" : "text-xl")}>
            <span className="text-gruvbox-fg">root@</span>
            <span className="text-gruvbox-yellow">sos-conference</span>
            <span className="text-gruvbox-fg">:~$</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-mono">
          <Link href="#" className="text-gruvbox-fg hover:text-gruvbox-yellow">
            ./about
          </Link>
          <Link href="#" className="text-gruvbox-fg hover:text-gruvbox-yellow">
            ./agenda
          </Link>
          <Link href="#" className="text-gruvbox-fg hover:text-gruvbox-yellow">
            ./speakers
          </Link>
          <Link href="#" className="text-gruvbox-fg hover:text-gruvbox-yellow">
            ./sponsors
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono">./register.sh</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1"
            >
              <Terminal className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gruvbox-bg border-gruvbox-yellow">
            <div className="flex flex-col gap-6 mt-6 font-mono">
              <Link href="#" className="text-lg text-gruvbox-fg hover:text-gruvbox-yellow">
                ./about
              </Link>
              <Link href="#" className="text-lg text-gruvbox-fg hover:text-gruvbox-yellow">
                ./agenda
              </Link>
              <Link href="#" className="text-lg text-gruvbox-fg hover:text-gruvbox-yellow">
                ./speakers
              </Link>
              <Link href="#" className="text-lg text-gruvbox-fg hover:text-gruvbox-yellow">
                ./sponsors
              </Link>
              <Button className="bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono w-full">
                ./register.sh
              </Button>
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono w-full"
              >
                {theme === "light" ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                {theme === "light" ? "$ ./dark_mode.sh" : "$ ./light_mode.sh"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
