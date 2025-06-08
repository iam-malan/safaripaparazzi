"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Camera,
  MapPin,
  Star,
  Users,
  Award,
  Sunrise,
  Mountain,
  TelescopeIcon as Binoculars,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Play,
  Quote,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { GeometricBackground } from "@/components/geometric-background"
import { ParallaxImage } from "@/components/parallax-image"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeIn } from "@/components/fade-in"
import { useMobile } from "@/hooks/use-mobile"

export default function SafariPaparazziPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const tours = [
    {
      title: "Desert Dreams",
      duration: "7 Days",
      price: "$3,200",
      image: "/images/gallery/wildlife-encounter-moment-05.jpeg",
      highlights: ["Sossusvlei Dunes", "Deadvlei", "Desert Wildlife", "Sunrise Photography"],
    },
    {
      title: "Wildlife Wonders",
      duration: "10 Days",
      price: "$4,500",
      image: "/images/gallery/professional-wildlife-shot-08.jpeg",
      highlights: ["Etosha National Park", "Big Five", "Waterhole Sessions", "Night Photography"],
    },
    {
      title: "Coastal Contrasts",
      duration: "5 Days",
      price: "$2,800",
      image: "/images/gallery/coastal-photography-tour-07.jpeg",
      highlights: ["Skeleton Coast", "Seal Colonies", "Shipwrecks", "Coastal Landscapes"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      text: "An absolutely transformative experience! The guides knew exactly where to find the most incredible wildlife moments.",
      rating: 5,
      image: "/images/gallery/african-wildlife-photography-03.jpeg",
    },
    {
      name: "James Chen",
      location: "Tokyo, Japan",
      text: "The photography instruction was world-class. I came home with portfolio-worthy shots and memories for a lifetime.",
      rating: 5,
      image: "/images/gallery/african-adventure-photography-10.jpeg",
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      text: "Safari Paparazzi exceeded every expectation. The luxury accommodations and expert guidance made this trip perfect.",
      rating: 5,
      image: "/images/gallery/namibian-safari-experience-06.jpeg",
    },
  ]

  const galleryImages = [
    {
      src: "/images/gallery/namibian-wildlife-landscape-01.jpeg",
      alt: "Namibian wildlife photography - stunning landscape capture",
    },
    {
      src: "/images/gallery/safari-adventure-capture-02.jpeg",
      alt: "Safari landscape capture - African wilderness beauty",
    },
    {
      src: "/images/gallery/desert-landscape-beauty-04.jpeg",
      alt: "African wildlife encounter - desert photography session",
    },
    {
      src: "/images/gallery/safari-landscape-capture-09.jpeg",
      alt: "Desert photography session - Namibian landscape",
    },
    {
      src: "/images/gallery/namibian-desert-wildlife-11.jpeg",
      alt: "Wildlife photography tour - desert animals",
    },
    {
      src: "/images/gallery/safari-adventure-capture-02.jpeg",
      alt: "Namibian landscape beauty - safari adventure",
    },
    {
      src: "/images/gallery/professional-wildlife-shot-08.jpeg",
      alt: "Safari adventure moment - professional capture",
    },
    {
      src: "/images/gallery/coastal-photography-tour-07.jpeg",
      alt: "Professional wildlife photography - coastal landscapes",
    },
  ]

  const stats = [
    { icon: Users, number: 500, label: "Happy Photographers" },
    { icon: Camera, number: 50000, label: "Stunning Shots" },
    { icon: Award, number: 15, label: "Awards Won" },
    { icon: MapPin, number: 25, label: "Locations Covered" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GeometricBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold text-gold">Safari Paparazzi</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-gray-300 hover:text-gold transition-colors">
                Tours
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-gold transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-gray-300 hover:text-gold transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black font-medium">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gold"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#tours"
                className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </a>
              <a
                href="#gallery"
                className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black font-medium w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <ParallaxImage src="/images/gallery/namibian-wildlife-landscape-01.jpeg" alt="Namibian Landscape - Safari Paparazzi Photography Tours" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <Badge className="bg-gold/20 text-gold border-gold mb-6">Premium Photography Tours</Badge>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Capture Africa's
              <span className="block bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent mt-2">
                Wild Beauty
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300 px-4">
              Professional photography tours through Namibia's most breathtaking landscapes and wildlife encounters
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black px-8 py-6 text-lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Explore Tours
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Film
              </Button>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="h-8 w-8 text-gold" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/80 backdrop-blur-md relative z-10 border-t border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="group">
                  <stat.icon className="h-10 sm:h-12 w-10 sm:w-12 text-gold mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.number} duration={2000} />
                    {stat.number > 1000 ? "+" : ""}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="bg-gold/20 text-gold border-gold mb-4">Our Tours</Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Curated Photography
                <span className="block text-gold mt-2">Adventures</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Each tour is carefully crafted to provide the perfect blend of wildlife encounters, stunning landscapes,
                and professional photography guidance.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="group hover:shadow-gold/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-gold/20 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={`${tour.title} - Safari Paparazzi Photography Tour`}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index === 0}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 backdrop-blur-sm text-gold border-gold">{tour.duration}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{tour.title}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-gold mb-4">{tour.price}</div>
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 bg-black/40 backdrop-blur-md relative z-10 border-t border-b border-gold/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="bg-gold/20 text-gold border-gold mb-4">Gallery</Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Captured
                <span className="block text-gold mt-2">Moments</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-300 rounded-lg" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="bg-gold/20 text-gold border-gold mb-4">Testimonials</Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Guests
                <span className="block text-gold mt-2">Say</span>
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Card className="bg-black/40 backdrop-blur-md border border-gold/20 shadow-xl">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Quote className="h-10 sm:h-12 w-10 sm:w-12 text-gold mx-auto mb-6" />
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">"{testimonials[activeTestimonial].text}"</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                      <Image
                        src={testimonials[activeTestimonial].image}
                        alt={`${testimonials[activeTestimonial].name} - Safari Paparazzi Guest`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-bold text-white">{testimonials[activeTestimonial].name}</div>
                      <div className="text-gray-400">{testimonials[activeTestimonial].location}</div>
                      <div className="flex justify-center sm:justify-start mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-gold" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/40 backdrop-blur-md relative z-10 border-t border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <Badge className="bg-gold/20 text-gold border-gold mb-4">About Us</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Passionate About
                  <span className="block text-gold mt-2">African Wildlife</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Founded by professional wildlife photographers with over 15 years of experience in Namibia, Safari
                  Paparazzi combines luxury travel with expert photography instruction to create unforgettable
                  adventures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Sunrise, title: "Golden Hour Experts", desc: "Perfect timing for magical shots" },
                    { icon: Mountain, title: "Local Knowledge", desc: "Hidden gems and secret locations" },
                    { icon: Binoculars, title: "Wildlife Tracking", desc: "Professional guides and trackers" },
                    { icon: Award, title: "Award Winning", desc: "Internationally recognized tours" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <feature.icon className="h-6 w-6 text-gold mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black">
                  Meet Our Team
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 border border-gold/30 rounded-lg transform rotate-3 translate-x-4 translate-y-4" />
                <Image
                  src="/images/team/tjaart.jpeg"
                  alt="Tjaart - Safari Paparazzi Team Member"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl relative z-10 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gold/20 z-20">
                  <div className="text-3xl font-bold text-gold">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="bg-gold/20 text-gold border-gold mb-4">Contact</Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your
                <span className="block text-gold mt-2">Adventure</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to capture the wild beauty of Namibia? Get in touch with our team to plan your perfect photography
                safari.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <Card className="bg-black/40 backdrop-blur-md border border-gold/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-black/60 border-gold/30 text-white focus:border-gold"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-black/60 border-gold/30 text-white focus:border-gold"
                      />
                    </div>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      className="bg-black/60 border-gold/30 text-white focus:border-gold"
                    />
                    <Input
                      placeholder="Phone Number"
                      className="bg-black/60 border-gold/30 text-white focus:border-gold"
                    />
                    <Textarea
                      placeholder="Tell us about your dream photography tour..."
                      className="bg-black/60 border-gold/30 text-white focus:border-gold min-h-32"
                    />
                    <Button className="w-full bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <Card className="bg-black/40 backdrop-blur-md border border-gold/20 shadow-xl group hover:border-gold/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">+264 61 123 4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card className="bg-black/40 backdrop-blur-md border border-gold/20 shadow-xl group hover:border-gold/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">hello@safaripaparazzi.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.6}>
                <Card className="bg-black/40 backdrop-blur-md border border-gold/20 shadow-xl group hover:border-gold/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Windhoek, Namibia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-black/40 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md text-white py-12 border-t border-gold/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-gold" />
                <span className="text-xl sm:text-2xl font-bold text-gold">Safari Paparazzi</span>
              </div>
              <p className="text-gray-400 mb-4">
                Capturing the wild beauty of Namibia through professional photography tours and luxury safari
                experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#tours" className="hover:text-gold transition-colors">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-gold transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gold transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Tours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Desert Dreams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Wildlife Wonders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Coastal Contrasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Custom Tours
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for photography tips and tour updates</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Your email" className="bg-black/60 border-gold/30 text-white focus:border-gold flex-1" />
                <Button className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Safari Paparazzi. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
