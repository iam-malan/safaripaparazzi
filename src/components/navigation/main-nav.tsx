import Link from "next/link"
import Image from "next/image"
// import { cn } from "@/lib/utils"; // Removed unused import
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Menu } from "lucide-react"

import { memo } from 'react';

function MainNavComponent() {
  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <div className="container flex justify-center">
        <nav className="flex items-center justify-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-sm">
          {/* Small Logo */}
          <Link href="/" className="flex items-center mr-8">
            <Image
              src="/images/logo/Safpap logo.png"
              alt="Safari Paparazzi Logo"
              width={48}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {siteConfig.mainNav
              .filter(item => item.title !== 'Home')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-namib-sand transition-all group-hover:w-full"></span>
                </Link>
              ))}
            
            <Button asChild variant="outline" size="sm" className="ml-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="ml-2">
              <Link href="/tours">Book Now</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export const MainNav = memo(MainNavComponent);
