import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

interface HackerTerminalProps {
  onComplete: () => void;
}

export function HackerTerminal({ onComplete }: HackerTerminalProps) {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center p-8 z-50 text-green-500 font-hacker"
    >
      <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-2xl w-full space-y-4">
        <div className="text-xs md:text-sm opacity-50 mb-8 border-b border-green-900 pb-2 flex justify-between">
          <span>SECURE_SHELL_V.2075</span>
          <span>ENCRYPTION: QUANTUM-7</span>
        </div>

        <div className="text-base md:text-xl lg:text-2xl leading-relaxed min-h-[200px]">
          <TypeAnimation
            sequence={[
              1000,
              "⚠ UNAUTHORIZED ACCESS DETECTED...",
              1000,
              "⚠ UNAUTHORIZED ACCESS DETECTED...\n> TRACING SIGNAL SOURCE...",
              1000,
              "⚠ UNAUTHORIZED ACCESS DETECTED...\n> TRACING SIGNAL SOURCE...\n> IDENTITY VERIFIED: MUN'S DEVICE",
              1500,
              "⚠ UNAUTHORIZED ACCESS DETECTED...\n> TRACING SIGNAL SOURCE...\n> IDENTITY VERIFIED: MUN'S DEVICE\n> INCOMING TRANSMISSION FROM YEAR 2075...",
              2000,
              "⚠ UNAUTHORIZED ACCESS DETECTED...\n> TRACING SIGNAL SOURCE...\n> IDENTITY VERIFIED: MUN'S DEVICE\n> INCOMING TRANSMISSION FROM YEAR 2075...\n> DECRYPTING MESSAGE: ROMANTIC PROTOCOL ALPHA",
              2000,
              () => {
                setShowCursor(false);
                setTimeout(onComplete, 1000);
              }
            ]}
            wrapper="span"
            speed={60}
            style={{ whiteSpace: 'pre-line', display: 'block' }}
            cursor={showCursor}
          />
        </div>
        
        {showCursor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-xs text-red-500 animate-pulse border border-red-900 bg-red-950/20 p-2 inline-block rounded"
          >
            [SYSTEM WARNING: EMOTIONAL OVERLOAD IMMINENT]
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
