import { ClaireButton } from "@/components/ClaireButton";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart, Feather } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen warm-gradient">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary animate-sparkle" />
          <span className="text-2xl font-bold text-foreground">Dear Claire</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/how-it-works")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            How It Works
          </button>
          <ClaireButton variant="ghost" onClick={() => navigate("/signin")}>
            Sign In
          </ClaireButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm shadow-soft mb-4">
            <Feather className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">The Diary That Replies</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
            Dear Claire,
            <br />
            <span className="fairy-gradient bg-clip-text text-transparent">
              My Secret Keeper
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Pour your heart out. Share your secrets, dreams, and fears. 
            Claire listens, understands, and replies with warmth and wisdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <ClaireButton
              variant="magical"
              size="lg"
              onClick={() => navigate("/signup")}
            >
              Start Your Diary
            </ClaireButton>
            <ClaireButton
              variant="ghost"
              size="lg"
              onClick={() => navigate("/alter-ego-info")}
            >
              Learn About Alter-Egos
            </ClaireButton>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-fairy transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full fairy-gradient flex items-center justify-center mx-auto mb-4 shadow-fairy">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Claire Replies</h3>
            <p className="text-foreground/70 leading-relaxed">
              Write to Claire and receive thoughtful, caring responses. She takes her time to understand you deeply.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-fairy transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4 shadow-fairy">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Community Support</h3>
            <p className="text-foreground/70 leading-relaxed">
              Enable Alter-Ego mode to receive uplifting advice from a caring, verified community.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-fairy transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 shadow-fairy">
              <Feather className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Completely Anonymous</h3>
            <p className="text-foreground/70 leading-relaxed">
              Your identity is protected. Write freely without judgment. Your secrets are safe with Claire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
