import { Mic, Square } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VoiceRecorderUIProps {
  onRecordingComplete?: (audioBlob: Blob) => void;
}

export const VoiceRecorderUI = ({ onRecordingComplete }: VoiceRecorderUIProps) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecording = () => {
    if (isRecording) {
      // Stop recording logic would go here
      setIsRecording(false);
    } else {
      // Start recording logic would go here
      setIsRecording(true);
    }
  };

  return (
    <button
      onClick={handleToggleRecording}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full transition-smooth shadow-soft hover:shadow-fairy",
        isRecording
          ? "bg-destructive text-destructive-foreground animate-pulse"
          : "bg-gradient-to-br from-primary to-secondary text-white"
      )}
      aria-label={isRecording ? "Stop recording" : "Start voice recording"}
    >
      {isRecording ? <Square className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
    </button>
  );
};
