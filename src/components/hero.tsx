import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-background pb-32">
      {/* Background brushes with better positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/images/brushes/brush1.png"
            alt="Brush stroke background"
            width={800}
            height={400}
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/4 opacity-50">
          <Image
            src="/images/brushes/brush0.png"
            alt="Brush stroke background"
            width={700}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 leading-tight">
            Safari Paparazzi
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-sans mb-8 max-w-xl mx-auto">
            Namibian Photography Tours
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10 hover:text-primary font-sans text-base px-10 py-3 rounded-md">
              <Link href="/tours" passHref>
                <span className="flex items-center justify-center">
                  BOOK A TOUR
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
