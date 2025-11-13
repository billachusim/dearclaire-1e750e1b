import { ClaireButton } from "@/components/ClaireButton";
import { ClaireCard } from "@/components/ClaireCard";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";

const AlterEgoInfo = () => {
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
            <Heart className="h-16 w-16 text-claire-rose mx-auto animate-gentle-bounce" />
            <h1 className="text-5xl font-bold text-foreground">Alter-Ego Mode</h1>
            <p className="text-xl text-muted-foreground">The Sacred Circle of Support</p>
          </div>

          <ClaireCard variant="magical">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">🌙 What Is Alter Ego?</h2>
                <p className="text-white/90 leading-relaxed">
                  Your alter ego is the version of you that exists beyond fear, doubt, and pain. It is the you that has overcome, that has healed, and that now has the wisdom to guide others who are walking the path you once walked.
                </p>
                <br />
                <p className="text-white/90 leading-relaxed">
                  Alter-Ego Mode allows those who have found strength to become beacons of light for others who are still searching.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">💫 What Is Alter-Ego Mode?</h2>
                <p className="text-white/90 leading-relaxed">
                  Alter-Ego Mode is a special access feature where verified community members can:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-white/90 ml-4">
                  <li>Read anonymous diary entries from users worldwide</li>
                  <li>Leave positive, uplifting, and supportive replies</li>
                  <li>Be a source of hope for those who need it most</li>
                  <li>Remain completely anonymous while spreading kindness</li>
                </ul>
                <br />
                <p className="text-white/90 leading-relaxed">
                  This is not therapy. This is not counseling. This is human connection at its purest—one person reaching out to another with empathy and love.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">✨ How Does It Work?</h2>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p><strong className="text-white">1. Request Access</strong><br />
                  Alter-Ego mode is selective and requires completion of "Clairentation"—an orientation process that ensures you understand the responsibility and magic of this role.</p>

                  <p><strong className="text-white">2. Complete Clairentation</strong><br />
                  You'll learn the values, rules, and emotional intelligence required to be an Alter-Ego. This is not just a feature—it's a sacred responsibility.</p>

                  <p><strong className="text-white">3. Receive Your ClaireID & Access Code</strong><br />
                  Once approved, you'll receive your unique credentials to access the Alter-Ego dashboard.</p>

                  <p><strong className="text-white">4. Read & Reply</strong><br />
                  You'll see anonymous diary entries from real users. If something speaks to you, leave a kind, thoughtful, supportive reply. No negativity. Ever.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">🎭 Who Can Be an Alter-Ego?</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Verified females aged 16+</li>
                  <li>• Those with a compassionate heart and emotional maturity</li>
                  <li>• People who understand the weight of words</li>
                  <li>• Anyone committed to spreading only positivity</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">⚠️ Important Rules</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Zero tolerance for negativity, judgment, or harm</li>
                  <li>• Complete anonymity must be maintained</li>
                  <li>• No unsolicited advice—only supportive, empathetic replies</li>
                  <li>• Violation results in permanent removal</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">💭 Creator's Note</h3>
                <p className="text-white/80 italic leading-relaxed">
                  "Alter-Ego Mode is not about fixing people. It's about reminding them that they're not alone. It's about being the voice that says, 'I see you. I hear you. You matter.' Sometimes, that's all someone needs to keep going."
                </p>
                <p className="text-right text-white/60 mt-3">— The Creator</p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ClaireButton
                    variant="primary"
                    onClick={() => navigate("/clairentation")}
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Begin Clairentation
                  </ClaireButton>
                  <ClaireButton
                    variant="secondary"
                    onClick={() => window.open("https://wa.me/2348068597140", "_blank")}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Support Claire (Donate)
                  </ClaireButton>
                </div>
                <p className="text-center text-white/60 text-sm mt-4">
                  Contact us on WhatsApp: +234 806 859 7140
                </p>
              </div>
            </div>
          </ClaireCard>
        </div>
      </div>
    </div>
  );
};

export default AlterEgoInfo;
