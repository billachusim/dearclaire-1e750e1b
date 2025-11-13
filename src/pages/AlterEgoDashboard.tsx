import { useState } from "react";
import { ClaireCard } from "@/components/ClaireCard";
import { ClaireButton } from "@/components/ClaireButton";
import { Heart, Send, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AnonymousEntry {
  id: string;
  content: string;
  timestamp: string;
  hasReplied: boolean;
}

const mockEntries: AnonymousEntry[] = [
  {
    id: "1",
    content: "I feel so lost today. Everything seems pointless and I don't know where to turn. Nobody understands what I'm going through...",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    hasReplied: false,
  },
  {
    id: "2",
    content: "Today I finally stood up for myself at work. It was scary but I did it. I'm proud but also worried about the consequences.",
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    hasReplied: false,
  },
  {
    id: "3",
    content: "Why does healing take so long? I thought I was getting better but today I felt like I was back at square one. Will this ever end?",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    hasReplied: false,
  },
];

const AlterEgoDashboard = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(mockEntries);
  const [activeReply, setActiveReply] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const handleSubmitReply = (entryId: string) => {
    if (!replyText.trim()) return;

    // Mock submission
    console.log("Submitting reply:", { entryId, replyText });
    
    setEntries(entries.map(e => 
      e.id === entryId ? { ...e, hasReplied: true } : e
    ));
    
    setActiveReply(null);
    setReplyText("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-background/80 border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary animate-gentle-bounce" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Alter-Ego Dashboard</h1>
                <p className="text-sm text-muted-foreground">Spread light & love</p>
              </div>
            </div>
            <ClaireButton
              variant="ghost"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Exit
            </ClaireButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Live Feed</h2>
          <p className="text-muted-foreground">
            These are anonymous diary entries from users worldwide. Offer support with kindness and empathy.
          </p>
        </div>

        <div className="space-y-6">
          {entries.map((entry) => (
            <ClaireCard key={entry.id} variant="warm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(entry.timestamp).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                  {entry.hasReplied && (
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                      Replied ✓
                    </span>
                  )}
                </div>

                <p className="text-foreground leading-relaxed">
                  {entry.content}
                </p>

                {!entry.hasReplied && (
                  <>
                    {activeReply === entry.id ? (
                      <div className="space-y-3 pt-4 border-t border-border">
                        <textarea
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write a supportive, uplifting reply..."
                          className="w-full min-h-[100px] rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                        />
                        <div className="flex gap-2">
                          <ClaireButton
                            variant="primary"
                            onClick={() => handleSubmitReply(entry.id)}
                            disabled={!replyText.trim()}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send Support
                          </ClaireButton>
                          <ClaireButton
                            variant="ghost"
                            onClick={() => {
                              setActiveReply(null);
                              setReplyText("");
                            }}
                          >
                            Cancel
                          </ClaireButton>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-4 border-t border-border">
                        <ClaireButton
                          variant="secondary"
                          onClick={() => setActiveReply(entry.id)}
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Reply with Support
                        </ClaireButton>
                      </div>
                    )}
                  </>
                )}
              </div>
            </ClaireCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ClaireCard variant="magical">
            <div className="text-white space-y-3">
              <Heart className="h-12 w-12 mx-auto" />
              <h3 className="text-xl font-bold">Remember</h3>
              <p className="text-white/90 max-w-md mx-auto">
                Your words have power. Use them to uplift, support, and remind people they're not alone. 
                No negativity. Only love.
              </p>
            </div>
          </ClaireCard>
        </div>
      </main>
    </div>
  );
};

export default AlterEgoDashboard;
