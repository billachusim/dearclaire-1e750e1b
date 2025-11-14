import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await signUp(email, password, nickname);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Welcome to Claire! ✨");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen warm-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-10 w-10 text-primary animate-sparkle" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to Claire</h1>
          <p className="text-muted-foreground">Create your safe space to share and reflect</p>
        </div>

        <ClaireCard variant="default">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Choose a Nickname
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Your private name"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                This will be your private identity. You can change it anytime.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Secret Code
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Create your secret code"
                required
              />
            </div>

            <ClaireButton type="submit" variant="magical" className="w-full" disabled={loading}>
              {loading ? "Creating Your Journey..." : "Begin Your Journey"}
            </ClaireButton>
          </form>
        </ClaireCard>

        <div className="text-center">
          <button
            onClick={() => navigate("/signin")}
            className="text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
