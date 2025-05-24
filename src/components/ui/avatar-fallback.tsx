import * as React from "react"
import { cn } from "@/lib/utils"

// Removed AvatarFallbackProps interface as it became empty

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> // Use React.HTMLAttributes directly
>(({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          className
        )}
        {...props}
      >
        <svg
          className="h-3/4 w-3/4 text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.67 0 8.997 1.701 11.996 4.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    )
  }
)

AvatarFallback.displayName = "AvatarFallback"

export { AvatarFallback }
