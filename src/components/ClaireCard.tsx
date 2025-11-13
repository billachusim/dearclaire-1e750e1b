import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ClaireCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "warm" | "magical";
}

export const ClaireCard = forwardRef<HTMLDivElement, ClaireCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-card",
      warm: "warm-gradient",
      magical: "magical-gradient",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl p-6 shadow-soft transition-smooth hover:shadow-fairy",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ClaireCard.displayName = "ClaireCard";
