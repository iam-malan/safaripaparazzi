import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

interface NavItem {
  readonly title: string;
  readonly href: string;
  readonly submenu?: readonly {
    readonly title: string;
    readonly href: string;
    readonly description?: string;
  }[];
}
export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background text-foreground font-sans border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {/* Consider using the logo Image component here if consistent with header */}
              <span className="text-2xl font-serif font-bold text-primary">
                Safari Paparazzi
              </span>
            </Link>
            <p className="text-foreground/80 text-sm">
              Capturing the essence of the breathtaking landscapes and wildlife of Namibia through the lens of passionate photographers.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.mainNav.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gallery"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground/80 text-sm">
                  123 Safari Street, Windhoek<br />
                  Namibia, 9000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+264811234567" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  +264 81 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:info@safaripaparazzi.na" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  info@safaripaparazzi.na
                </a>
              </li>
              <li className="flex items-start pt-2">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-foreground/80 text-sm">Monday - Friday: 9:00 - 17:00</p>
                  <p className="text-foreground/80 text-sm">Saturday: 9:00 - 13:00</p>
                  <p className="text-foreground/80 text-sm">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Newsletter</h3>
            <p className="text-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for the latest tours, photography tips, and special offers.
            </p>
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full" // Uses default button styling (bg-primary text-primary-foreground)
              >
                Subscribe
              </Button>
            </form>
            <p className="text-muted-foreground text-xs mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
