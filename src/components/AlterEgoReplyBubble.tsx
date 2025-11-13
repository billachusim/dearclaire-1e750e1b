import { Heart } from "lucide-react";

interface Reply {
  id: string;
  content: string;
  timestamp: string;
  authorName?: string;
}

interface AlterEgoReplyBubbleProps {
  reply: Reply;
}

export const AlterEgoReplyBubble = ({ reply }: AlterEgoReplyBubbleProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent shadow-soft flex-shrink-0">
          <Heart className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-secondary">
              {reply.authorName || "Alter-Ego"}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(reply.timestamp).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 p-4 shadow-soft">
            <p className="text-foreground leading-relaxed text-sm">
              {reply.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
