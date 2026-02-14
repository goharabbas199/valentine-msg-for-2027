import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HackerTerminal } from "@/components/HackerTerminal";
import { CinematicVideo } from "@/components/CinematicVideo";
import { ValentineQuestion } from "@/components/ValentineQuestion";
import { SuccessScreen } from "@/components/SuccessScreen";

type Stage = "hacker" | "video" | "question" | "success";

export default function Home() {
  const [stage, setStage] = useState<Stage>("hacker");

  return (
    <div className="w-full min-h-screen bg-black overflow-y-auto">
      <AnimatePresence mode="wait">
        {stage === "hacker" && (
          <HackerTerminal key="hacker" onComplete={() => setStage("video")} />
        )}

        {stage === "video" && (
          <CinematicVideo key="video" onComplete={() => setStage("question")} />
        )}

        {stage === "question" && (
          <ValentineQuestion
            key="question"
            onSuccess={() => setStage("success")}
          />
        )}

        {stage === "success" && <SuccessScreen key="success" />}
      </AnimatePresence>
    </div>
  );
}
