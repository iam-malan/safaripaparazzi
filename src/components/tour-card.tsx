import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar, Camera, Users, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TourCardProps {
  id: string
  title: string
  description: string
  duration: string
  location: string
  price: number
  image: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  featured?: boolean
  startDates: string[]
  maxGroupSize: number
  ratingsAverage?: number
  ratingsQuantity?: number
}

export function TourCard({
  id,
  title,
  description,
  duration,
  location,
  price,
  image,
  difficulty = 'Moderate',
  featured = false,
  startDates = [],
  maxGroupSize,
  ratingsAverage = 4.8,
  ratingsQuantity = 12,
  className,
  ...props
}: TourCardProps & React.HTMLAttributes<HTMLDivElement>) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  // Get difficulty color
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Challenging':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-lg border border-black/5 bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className)} {...props}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
            Featured
          </Badge>
        </div>
      )}
      
      {/* Tour Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="font-bold text-primary">{formattedPrice}</span>
          <span className="text-xs text-muted-foreground"> /person</span>
        </div>
      </div>
      
      {/* Tour Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className={cn("text-xs font-medium", getDifficultyColor())}>
            {difficulty}
          </Badge>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{duration} days</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{startDates.length} dates</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span>Max {maxGroupSize} people</span>
          </div>
          <div className="flex items-center">
            <Camera className="w-4 h-4 mr-2 text-primary" />
            <span>Photo Tour</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center">
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-gray-200" />
              ))}
            </div>
            <span className="ml-2 text-xs text-muted-foreground">
              {ratingsAverage} ({ratingsQuantity})
            </span>
          </div>
          
          <Button asChild variant="link" className="text-primary p-0 h-auto font-medium group">
            <Link href={`/tours/${id}`}>
              View details
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
