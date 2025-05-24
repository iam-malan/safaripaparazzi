import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { siteConfig } from "@/config/site"; // Removed unused import
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero"; // Import the Hero component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Background brush for entire page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 -mr-32 opacity-60">
          <Image
            src="/images/brushes/brush2.png"
            alt=""
            width={400}
            height={300}
            className="transform rotate-180"
          />
        </div>
      </div>

      <Hero />

      {/* Gallery Section */}
      <section className="pt-4 pb-16 relative overflow-visible bg-white">
        {/* Decorative brush */}
        <div className="absolute left-0 top-1/4 -ml-20 opacity-60">
          <Image
            src="/images/brushes/brush0.png"
            alt=""
            width={300}
            height={200}
            className="transform -rotate-45"
          />
        </div>
        
        <div className="container px-4 mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
            {/* Row 1 */}
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-23 at 09.51.52.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-23 at 09.51.53.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-23 at 09.51.54.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            
            {/* Row 2 */}
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-22 at 16.35.11.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-22 at 16.35.13.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="group relative w-full h-[300px] overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/gallery/WhatsApp Image 2025-05-22 at 16.35.15.jpeg"
                alt="Safari photograph"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-foreground hover:bg-primary/10 hover:text-primary font-sans">
              <Link href="/tours" passHref>
                <span className="flex items-center justify-center">
                  View All Tours <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-visible">
        {/* Decorative brush */}
        <div className="absolute right-0 top-1/2 -mr-32 opacity-60">
          <Image
            src="/images/brushes/brush1.png"
            alt=""
            width={500}
            height={300}
            className="transform rotate-12"
          />
        </div>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Tours Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-visible bg-white">
        {/* Decorative brush */}
        <div className="absolute left-0 bottom-0 -ml-20 opacity-60">
          <Image
            src="/images/brushes/brush2.png"
            alt=""
            width={400}
            height={300}
            className="transform scale-x-[-1]"
          />
        </div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Capture Namibia&apos;s Beauty?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-foreground/80">
            Book your photography adventure today and create memories that will last a lifetime.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4 bg-amber-600 hover:bg-amber-700">
            <Link href="/contact" passHref>
              <span className="flex items-center justify-center">
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white relative overflow-visible">
        {/* Decorative brush */}
        <div className="absolute right-0 top-1/3 -mr-32 opacity-60">
          <Image
            src="/images/brushes/brush0.png"
            alt=""
            width={350}
            height={250}
            className="transform -rotate-12"
          />
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to our newsletter for the latest tour updates and photography tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/80 backdrop-blur-sm"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
