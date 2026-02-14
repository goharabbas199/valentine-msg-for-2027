import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, AlertTriangle } from "lucide-react";
import { useCreateResponse } from "@/hooks/use-responses";

interface ValentineQuestionProps {
  onSuccess: () => void;
}

export function ValentineQuestion({ onSuccess }: ValentineQuestionProps) {
  const [noCount, setNoCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createResponse = useCreateResponse();

  const handleYes = async () => {
    setIsSubmitting(true);
    try {
      await createResponse.mutateAsync({ answer: "YES" });
    } catch {}
    setTimeout(() => onSuccess(), 800);
  };

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
  };

  const warningMessages = [
    "",
    "Hmm… that answer seems incorrect. Please reconsider carefully.",
    "System Warning: That future version of me looks pretty good with white hair. Are you absolutely sure?",
    "Critical Alert: This love story strongly prefers YES.",
  ];

  const currentWarning =
    noCount < warningMessages.length
      ? warningMessages[noCount]
      : warningMessages[warningMessages.length - 1];

  const getNoText = () => {
    if (noCount === 0) return "NO 😌";
    if (noCount === 1) return "Are you sure? 🤨";
    if (noCount === 2) return "Think again... 😏";
    return "";
  };

  return (
    <div className="w-full min-h-screen px-6 py-16 bg-gradient-to-br from-[#2b0a12] via-[#400c18] to-[#1a0508] text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="w-20 h-20 text-red-500 fill-red-500/20" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Will You Be <br />
          <span className="text-red-500 italic">My Valentine?</span>
        </h1>

        <p className="text-white/80 text-lg">
          And promise to love even the old, wrinkly version of me from 2075?
        </p>

        {noCount > 0 && (
          <div className="bg-red-950/40 border border-red-800/50 rounded-lg px-6 py-3 max-w-md text-red-300 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {currentWarning}
          </div>
        )}

        <div className="flex flex-col gap-4 w-full max-w-sm mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl text-white font-bold text-lg shadow-lg"
          >
            YES ❤️
          </motion.button>

          {noCount < 3 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="w-full px-8 py-4 border border-white/30 rounded-xl text-white/70 text-lg"
            >
              {getNoText()}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
