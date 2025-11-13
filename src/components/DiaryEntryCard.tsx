import { ClaireCard } from "./ClaireCard";
import { CommentThread } from "./CommentThread";

interface DiaryEntry {
  id: string;
  content: string;
  date: string;
  replies: Reply[];
}

interface Reply {
  id: string;
  content: string;
  author: "claire" | "alter-ego";
  timestamp: string;
  authorName?: string;
}

interface DiaryEntryCardProps {
  entry: DiaryEntry;
  onReplySubmit?: (entryId: string, content: string) => void;
}

export const DiaryEntryCard = ({ entry, onReplySubmit }: DiaryEntryCardProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <ClaireCard variant="warm">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">
              {new Date(entry.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {entry.content}
          </p>
        </div>
      </ClaireCard>
      
      {entry.replies.length > 0 && (
        <CommentThread replies={entry.replies} entryId={entry.id} />
      )}
    </div>
  );
};
