import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { DiaryEntryCard } from "@/components/DiaryEntryCard";
import { VoiceRecorderUI } from "@/components/VoiceRecorderUI";
import { LoadingFairyAnimation } from "@/components/LoadingFairyAnimation";
import { ClaireButton } from "@/components/ClaireButton";
import { SpinningClaireLogo } from "@/components/SpinningClaireLogo";
import { Menu, Send, Book, Info, Heart, Globe, Lock } from "lucide-react";
import { toast } from "sonner";

const Diary = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [entries, setEntries] = useState<any[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [isClairethinking, setIsClairethinking] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/signin");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchEntries();
    }
  }, [user]);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from("diary_entries")
      .select(`
        *,
        diary_replies (
          *,
          profiles:author_id (nickname)
        )
      `)
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load entries");
      console.error(error);
    } else {
      const formattedEntries = data.map((entry: any) => ({
        id: entry.id,
        content: entry.content,
        date: entry.created_at,
        isPublic: entry.is_public,
        replies: entry.diary_replies.map((reply: any) => ({
          id: reply.id,
          content: reply.content,
          author: reply.author_type,
          timestamp: reply.created_at,
          authorName: reply.profiles?.nickname,
        })),
      }));
      setEntries(formattedEntries);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    if (!newEntry.trim() || !user) return;

    const { data, error } = await supabase
      .from("diary_entries")
      .insert({
        user_id: user.id,
        content: newEntry,
        is_public: isPublic,
      })
      .select()
      .single();

    if (error) {
      toast.error("Failed to save entry");
      console.error(error);
      return;
    }

    const newEntryData = {
      id: data.id,
      content: data.content,
      date: data.created_at,
      isPublic: data.is_public,
      replies: [],
    };

    setEntries([newEntryData, ...entries]);
    setNewEntry("");
    setIsPublic(false);
    setIsClairethinking(true);

    // Simulate Claire's delayed response
    setTimeout(async () => {
      const mockReply = {
        entry_id: data.id,
        author_type: "claire",
        content: "Thank you for sharing this with me. I can feel the weight of your words, and I want you to know that you're not alone in this. Every emotion you feel is valid, and it takes courage to express them. Remember, healing isn't linear, and it's okay to take things one day at a time. You're stronger than you know. 🌸",
      };

      const { error: replyError } = await supabase
        .from("diary_replies")
        .insert(mockReply);

      if (!replyError) {
        await fetchEntries();
      }
      setIsClairethinking(false);
    }, 5000);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingFairyAnimation />
      </div>
    );
  }

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
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => setIsPublic(!isPublic)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:bg-muted transition-smooth"
            >
              {isPublic ? (
                <>
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">Public</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Private</span>
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground">
              {isPublic ? "Alter-Egos can see and reply" : "Only you and Claire"}
            </p>
          </div>
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
