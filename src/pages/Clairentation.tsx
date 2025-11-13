import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, ExternalLink } from "lucide-react";

const Clairentation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <Heart className="h-16 w-16 text-primary mx-auto animate-gentle-bounce" />
            <h1 className="text-5xl font-bold text-foreground">Clairentation</h1>
            <p className="text-xl text-muted-foreground">Your Orientation to Become an Alter-Ego</p>
          </div>

          <ClaireCard variant="warm">
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <p className="text-lg text-foreground leading-relaxed">
                  Welcome to the sacred circle. What you're about to become is more than a role—it's a responsibility, a gift, and a privilege.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌸 Step 1: Understanding the Purpose</h2>
                  <p className="text-foreground leading-relaxed">
                    As an Alter-Ego, you are not here to fix, solve, or cure. You are here to witness, to validate, and to remind people that they are not alone. Your words hold power—use them with care and love.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-4">💫 Step 2: The Rules of Engagement</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Only positivity allowed.</strong> No harsh criticism, no judgment, no negativity. If you can't say something uplifting, say nothing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Respect anonymity.</strong> Never try to identify users. Never share what you read outside of this space.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Be empathetic, not prescriptive.</strong> Don't tell people what to do. Offer understanding, not advice.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>No abuse tolerance.</strong> One violation = permanent removal. No exceptions.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-claire-rose mb-4">✨ Step 3: The Emotional Intelligence Check</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Being an Alter-Ego requires emotional maturity. Ask yourself:
                  </p>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li>• Can I hold space for someone's pain without trying to fix it?</li>
                    <li>• Do I understand that my role is to support, not to solve?</li>
                    <li>• Can I offer kindness even when I don't fully understand someone's situation?</li>
                    <li>• Am I committed to leaving only positive, uplifting replies?</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-4">
                    If you answered "yes" to all of these, you're ready.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">🎭 Step 4: What Happens Next?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    After completing this orientation, you'll continue the process on WhatsApp, where you'll:
                  </p>
                  <ol className="space-y-2 text-foreground ml-6 list-decimal">
                    <li>Answer a few questions to ensure alignment with Claire's values</li>
                    <li>Receive your unique ClaireID and Access Code</li>
                    <li>Gain access to the Alter-Ego dashboard</li>
                    <li>Begin your journey as a beacon of light for others</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-claire-peach/20 to-claire-lavender/20 p-6 rounded-2xl border border-claire-pink/20">
                  <h3 className="text-xl font-bold text-foreground mb-3">💭 A Final Word</h3>
                  <p className="text-foreground/80 italic leading-relaxed">
                    "You are about to become part of something rare and beautiful. A community that exists not for itself, but for others. A space where kindness is the only currency, and empathy is the only rule. Welcome to the circle. May you bring light wherever you go."
                  </p>
                  <p className="text-right text-muted-foreground mt-3">— The Creator</p>
                </div>
              </div>

              <div className="border-t border-border pt-6 text-center space-y-4">
                <p className="text-foreground font-medium">
                  Ready to continue your journey?
                </p>
                <ClaireButton
                  variant="magical"
                  size="lg"
                  onClick={() => window.open("https://wa.me/2348068597140", "_blank")}
                >
                  Continue on WhatsApp
                  <ExternalLink className="h-5 w-5 ml-2" />
                </ClaireButton>
                <p className="text-sm text-muted-foreground">
                  WhatsApp: +234 806 859 7140
                </p>
              </div>
            </div>
          </ClaireCard>
        </div>
      </div>
    </div>
  );
};

export default Clairentation;
