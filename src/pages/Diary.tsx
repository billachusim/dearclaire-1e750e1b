import { useState } from "react";
import { DiaryEntryCard } from "@/components/DiaryEntryCard";
import { VoiceRecorderUI } from "@/components/VoiceRecorderUI";
import { LoadingFairyAnimation } from "@/components/LoadingFairyAnimation";
import { ClaireButton } from "@/components/ClaireButton";
import { SpinningClaireLogo } from "@/components/SpinningClaireLogo";
import { Menu, Send, Book, Info, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockEntries = [
  {
    id: "1",
    content: "Dear Claire,\n\nToday was overwhelming. I felt like I couldn't keep up with everything that was happening. Everyone expects so much from me, and sometimes I just want to disappear...",
    date: new Date().toISOString(),
    replies: [
      {
        id: "r1",
        content: "I hear you, and I want you to know that what you're feeling is completely valid. It's okay to feel overwhelmed. You don't have to be everything to everyone all the time. Remember, even the strongest people need moments to breathe and just be. You're doing better than you think. 💕",
        author: "claire" as const,
        timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      },
    ],
  },
];

const Diary = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(mockEntries);
  const [newEntry, setNewEntry] = useState("");
  const [isClairethinking, setIsClairethinking] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSubmit = async () => {
    if (!newEntry.trim()) return;

    const entry = {
      id: Date.now().toString(),
      content: newEntry,
      date: new Date().toISOString(),
      replies: [],
    };

    setEntries([entry, ...entries]);
    setNewEntry("");
    setIsClairethinking(true);

    // Simulate Claire's delayed response
    setTimeout(() => {
      const mockReply = {
        id: `r-${Date.now()}`,
        content: "Thank you for sharing this with me. I can feel the weight of your words, and I want you to know that you're not alone in this. Every emotion you feel is valid, and it takes courage to express them. Remember, healing isn't linear, and it's okay to take things one day at a time. You're stronger than you know. 🌸",
        author: "claire" as const,
        timestamp: new Date().toISOString(),
      };

      setEntries(prev =>
        prev.map(e =>
          e.id === entry.id ? { ...e, replies: [...e.replies, mockReply] } : e
        )
      );
      setIsClairethinking(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-background/80 border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-muted rounded-xl transition-smooth"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
            <SpinningClaireLogo />
            <div className="w-10" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-20 bg-background/95 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setShowMenu(false)}
                className="text-2xl text-foreground"
              >
                ✕
              </button>
            </div>
            <nav className="space-y-4">
              <button
                onClick={() => {
                  navigate("/diary");
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-muted transition-smooth text-left"
              >
                <Book className="h-6 w-6 text-primary" />
                <span className="text-lg font-medium">My Diary</span>
              </button>
              <button
                onClick={() => {
                  navigate("/how-it-works");
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-muted transition-smooth text-left"
              >
                <Info className="h-6 w-6 text-secondary" />
                <span className="text-lg font-medium">How Claire Works</span>
              </button>
              <button
                onClick={() => {
                  navigate("/alter-ego-info");
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-muted transition-smooth text-left"
              >
                <Heart className="h-6 w-6 text-claire-rose" />
                <span className="text-lg font-medium">Alter-Ego Mode</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-8">
          {/* Entries */}
          {entries.map((entry) => (
            <DiaryEntryCard key={entry.id} entry={entry} />
          ))}

          {isClairethinking && (
            <div className="ml-8 pl-6 border-l-2 border-claire-lavender/30">
              <LoadingFairyAnimation />
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-lg border-t border-border shadow-soft">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-end gap-3">
            <textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="Dear Claire..."
              className="flex-1 min-h-[60px] max-h-[200px] rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            <VoiceRecorderUI />
            <ClaireButton
              onClick={handleSubmit}
              variant="magical"
              className="h-12 w-12 p-0"
              disabled={!newEntry.trim()}
            >
              <Send className="h-5 w-5" />
            </ClaireButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary;
