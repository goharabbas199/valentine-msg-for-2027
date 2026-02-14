import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface CinematicVideoProps {
  onComplete: () => void;
}

export function CinematicVideo({ onComplete }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleEnded = () => {
    onComplete();
  };

  const handleError = () => {
    console.error("Video failed to load");
    setVideoError(true);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 bg-[#2b0a12] z-40 flex items-center justify-center"
    >
      {!videoError && (
        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleEnded}
          onError={handleError}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Romantic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b0a12]/30 via-transparent to-[#5a0f1f]/30 pointer-events-none" />
    </motion.div>
  );
}
