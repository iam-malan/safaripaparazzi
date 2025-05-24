import { Star, Quote } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  content: string
  date: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
}

export function Testimonials({ testimonials, className }: TestimonialsProps) {
  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-200'
          }`}
        />
      ))
  }

  return (
    <section className={className}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our photography tour participants have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full transition-all hover:shadow-md">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4 text-namib-sand">
                  <Quote className="w-8 h-8 opacity-20" />
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">&quot;{testimonial.content}&quot;</p>
                
                <div className="mt-auto">
                  <div className="flex items-center mb-2">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
