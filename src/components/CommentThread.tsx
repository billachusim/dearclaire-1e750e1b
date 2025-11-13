import { ClaireReplyBubble } from "./ClaireReplyBubble";
import { AlterEgoReplyBubble } from "./AlterEgoReplyBubble";

interface Reply {
  id: string;
  content: string;
  author: "claire" | "alter-ego";
  timestamp: string;
  authorName?: string;
}

interface CommentThreadProps {
  replies: Reply[];
  entryId: string;
}

export const CommentThread = ({ replies }: CommentThreadProps) => {
  return (
    <div className="ml-8 space-y-3 border-l-2 border-claire-lavender/30 pl-6">
      {replies.map((reply) => (
        reply.author === "claire" ? (
          <ClaireReplyBubble key={reply.id} reply={reply} />
        ) : (
          <AlterEgoReplyBubble key={reply.id} reply={reply} />
        )
      ))}
    </div>
  );
};
