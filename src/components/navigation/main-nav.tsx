import Link from "next/link"
import Image from "next/image"
// import { cn } from "@/lib/utils"; // Removed unused import
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Menu } from "lucide-react"

export function MainNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/Safpap logo.png"
              alt="Safari Paparazzi Logo"
              width={150} // Adjust width as needed for aspect ratio
              height={40}
              className="h-10 w-auto" // Tailwind class for height, width auto
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-namib-sand transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button className="hidden md:flex bg-namib-sand hover:bg-namib-sand/90 text-namib-desert">
            Book Now
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
