import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ClaireButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "magical";
  size?: "sm" | "md" | "lg";
}

export const ClaireButton = forwardRef<HTMLButtonElement, ClaireButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl font-medium transition-smooth hover-lift disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-soft hover:shadow-fairy",
      secondary: "bg-secondary text-secondary-foreground shadow-soft hover:shadow-fairy",
      ghost: "bg-transparent text-foreground hover:bg-muted",
      magical: "fairy-gradient text-white shadow-fairy hover:shadow-glow",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ClaireButton.displayName = "ClaireButton";
