import { Sparkles } from "lucide-react";

export const LoadingFairyAnimation = () => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Sparkles className="h-4 w-4 animate-sparkle text-primary" />
      <span className="text-sm">Claire is thinking</span>
      <span className="flex gap-1">
        <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
      </span>
    </div>
  );
};
