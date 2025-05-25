import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-start text-center bg-white overflow-visible">
      {/* Spacer for navigation */}
      <div className="h-4 w-full"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Left brush stroke */}
        <div className="absolute left-0 top-1/4 -ml-24 opacity-60">
          <Image
            src="/images/brushes/brush1.png"
            alt=""
            width={300}
            height={200}
            className="transform rotate-45"
            priority
          />
        </div>
        
        {/* Right brush stroke */}
        <div className="absolute right-0 bottom-1/4 -mr-24 opacity-60">
          <Image
            src="/images/brushes/brush2.png"
            alt=""
            width={400}
            height={250}
            className="transform -rotate-15"
            priority
          />
        </div>

        {/* Top right small brush */}
        <div className="absolute top-20 right-1/4 opacity-40">
          <Image
            src="/images/brushes/brush0.png"
            alt=""
            width={200}
            height={150}
            className="transform -rotate-30"
            priority
          />
        </div>

        {/* Hero Image - positioned at the top */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backgrounds/hero.png"
            alt="Safari Paparazzi background"
            fill
            className="object-cover opacity-80 scale-50"
            style={{ transformOrigin: 'center' }}
            priority
          />
        </div>
      </div>
      
      {/* Logo */}
      <div className="relative z-50 w-full max-w-md px-4 mx-auto">
        <Image
          src="/images/logo/safpap textlogo.png"
          alt="Safari Paparazzi"
          width={600}
          height={150}
          className="mx-auto w-full h-auto max-w-full"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-md md:text-lg text-foreground/80 font-sans mb-8 max-w-xl mx-auto">
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
