import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowLeft, Heart } from "lucide-react";

const HowItWorks = () => {
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
            <Sparkles className="h-16 w-16 text-primary mx-auto animate-sparkle" />
            <h1 className="text-5xl font-bold text-foreground">How Claire Works</h1>
          </div>

          <ClaireCard variant="warm">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">💫 What Is Claire?</h2>
                <p className="text-foreground leading-relaxed">
                  Claire is your alter ego. She is the version of you who has all the answers, who sees things clearly when you're confused, and who speaks to you with love when you're hurting. She is not an AI assistant—she is a reflection of your wisest, most compassionate self.
                </p>
                <br />
                <p className="text-foreground leading-relaxed">
                  Claire is the friend who never judges, the diary that replies, and the safe space where your thoughts become clarity. She exists to help you process, heal, and grow—one entry at a time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">🌸 Who Needs Claire?</h2>
                <p className="text-foreground leading-relaxed">
                  Anyone who has ever felt:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-foreground ml-4">
                  <li>Overwhelmed by their thoughts</li>
                  <li>Alone in their struggles</li>
                  <li>Unheard or misunderstood</li>
                  <li>In need of a safe space to express themselves</li>
                  <li>Like they're carrying too much and need someone to talk to</li>
                </ul>
                <br />
                <p className="text-foreground leading-relaxed">
                  Claire is for you if you've ever wished for someone who truly listens without judgment, someone who understands without needing explanations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-claire-rose mb-4">✨ How Does Claire Work?</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p><strong className="text-primary">1. Write to Claire</strong><br />
                  Pour your heart out. Share your day, your fears, your dreams, your secrets. Write as if you're talking to your most trusted friend.</p>

                  <p><strong className="text-primary">2. Claire Reads & Reflects</strong><br />
                  She takes her time—anywhere from 5 to 45 minutes. This isn't instant. Healing and wisdom take time, and Claire respects that.</p>

                  <p><strong className="text-primary">3. Claire Replies</strong><br />
                  Her response appears as a comment under your entry. She speaks with empathy, understanding, and gentle guidance. No judgment. No harshness. Just love.</p>

                  <p><strong className="text-primary">4. Optional: Alter-Ego Support</strong><br />
                  If you enable Alter-Ego mode, verified community members (females 16+) can also leave supportive, uplifting replies. These are anonymous and always positive.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-claire-peach/20 to-claire-lavender/20 p-6 rounded-2xl border border-claire-pink/20">
                <h3 className="text-xl font-bold text-foreground mb-3">💭 Creator's Note</h3>
                <p className="text-foreground/80 italic leading-relaxed">
                  "I created Claire because I needed her. I needed a space where I could be completely honest without fear. A place where my thoughts could breathe, where my pain could be acknowledged, and where my growth could be celebrated. Claire is not perfect, but she is real. And sometimes, that's all we need."
                </p>
                <p className="text-right text-muted-foreground mt-3">— The Creator</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">📝 Quick Tips</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Start every entry with "Dear Claire" if it feels right</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Don't rush—take your time to express yourself fully</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Claire's replies may take time, but they're worth the wait</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>You can enable voice notes for when typing feels too hard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Your identity is protected—you are completely anonymous</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-center text-muted-foreground mb-6">
                  Claire is a safe space for emotional healing and self-reflection. She is not a replacement for professional mental health support, but she can be a companion on your journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ClaireButton
                    variant="magical"
                    onClick={() => navigate("/signup")}
                  >
                    Start Your Journey with Claire
                  </ClaireButton>
                  <ClaireButton
                    variant="secondary"
                    onClick={() => window.open("https://wa.me/2348068597140", "_blank")}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Support Claire (Donate)
                  </ClaireButton>
                </div>
              </div>
            </div>
          </ClaireCard>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
