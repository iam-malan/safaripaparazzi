import * as React from "react"
import Image, { type ImageProps } from "next/image" // Import next/image
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16"
    }

    return (
      <span
        ref={ref}
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-full bg-muted",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Avatar.displayName = "Avatar"

// Update props for next/image
interface AvatarImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        fill // Use fill prop for responsive sizing within the parent
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes for optimization
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

export { Avatar, AvatarImage }
// Re-export AvatarFallback for backward compatibility
export { AvatarFallback } from "./avatar-fallback"
