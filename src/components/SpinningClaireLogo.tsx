import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SpinningClaireLogo = () => {
  const [tapCount, setTapCount] = useState(0);
  const navigate = useNavigate();

  const handleTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    
    if (newCount === 2) {
      navigate("/alter-ego-login");
      setTapCount(0);
    }
    
    // Reset after 1 second if not double-tapped
    setTimeout(() => {
      setTapCount(0);
    }, 1000);
  };

  return (
    <button
      onClick={handleTap}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-fairy hover:shadow-glow transition-smooth hover:scale-110"
      aria-label="Claire logo"
    >
      <Sparkles className="h-6 w-6 text-white animate-sparkle" />
    </button>
  );
};
