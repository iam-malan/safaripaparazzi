import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Calendar, Users } from "lucide-react" // Removed MapPin
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-namib-desert/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("/images/patterns/pattern-dots.svg")',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Capture Namibia&apos;s Beauty?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our next photography tour and experience the magic of Namibia through your lens. Limited spots available for our upcoming expeditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-namib-sand/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-namib-sand" />
              </div>
              <h3 className="text-white font-medium mb-2">Flexible Dates</h3>
              <p className="text-white/70 text-sm">Multiple departure dates throughout the year to fit your schedule</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-namib-sand/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-namib-sand" />
              </div>
              <h3 className="text-white font-medium mb-2">Small Groups</h3>
              <p className="text-white/70 text-sm">Intimate groups for personalized attention and better photography opportunities</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-namib-sand/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-6 h-6 text-namib-sand" />
              </div>
              <h3 className="text-white font-medium mb-2">Expert Guidance</h3>
              <p className="text-white/70 text-sm">Learn from professional photographers who know Namibia&apos;s best spots</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-namib-sand hover:bg-namib-sand/90 text-namib-desert text-lg px-8 py-6">
              <Link href="/tours">
                Explore All Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            Have questions? Our team is here to help. Call us at +264 81 123 4567
          </p>
        </div>
      </div>
    </section>
  )
}
