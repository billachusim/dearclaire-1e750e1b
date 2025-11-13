import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { Heart, ArrowLeft } from "lucide-react";

const AlterEgoLogin = () => {
  const navigate = useNavigate();
  const [claireId, setClaireId] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - would integrate with backend
    console.log("Alter-Ego login:", { claireId, accessCode });
    navigate("/alter-ego-dashboard");
  };

  return (
    <div className="min-h-screen magical-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-smooth"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-10 w-10 text-white animate-gentle-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Alter-Ego Access</h1>
          <p className="text-white/70">Enter your sacred credentials</p>
        </div>

        <ClaireCard variant="default">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                ClaireID
              </label>
              <input
                type="text"
                value={claireId}
                onChange={(e) => setClaireId(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Your ClaireID"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Access Code
              </label>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Your Access Code"
                required
              />
            </div>

            <ClaireButton type="submit" variant="magical" className="w-full">
              Enter the Circle
            </ClaireButton>
          </form>
        </ClaireCard>

        <div className="text-center">
          <p className="text-white/60 text-sm mb-2">
            Don't have access yet?
          </p>
          <button
            onClick={() => navigate("/clairentation")}
            className="text-sm text-white hover:text-white/80 transition-smooth underline"
          >
            Begin Clairentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlterEgoLogin;
