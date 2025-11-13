import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { Sparkles } from "lucide-react";

const SignIn = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in - would integrate with backend
    console.log("Sign in:", { nickname, password });
    navigate("/diary");
  };

  return (
    <div className="min-h-screen warm-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-10 w-10 text-primary animate-sparkle" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Continue your journey with Claire</p>
        </div>

        <ClaireCard variant="default">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nickname
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Your private name"
                required
              />
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
                placeholder="Your secret code"
                required
              />
            </div>

            <ClaireButton type="submit" variant="magical" className="w-full">
              Enter Your Diary
            </ClaireButton>
          </form>
        </ClaireCard>

        <div className="text-center">
          <button
            onClick={() => navigate("/signup")}
            className="text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            New to Claire? Create your diary
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
