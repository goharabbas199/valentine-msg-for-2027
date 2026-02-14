import { motion } from "framer-motion";
import { ShieldCheck, Heart } from "lucide-react";

export function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative z-30"
    >
      {/* Warm Success Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#3b0b15] via-[#5a0f1f] to-[#2b0a12] -z-10" />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "110vh", 
              x: Math.random() * window.innerWidth,
              opacity: 0 
            }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute"
          >
            <Heart className="text-primary/20 fill-primary/10 w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        className="max-w-2xl w-full text-center space-y-8 bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,0,51,0.15)]"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-primary/20 p-6 rounded-full ring-4 ring-primary/20"
          >
            <ShieldCheck className="w-16 h-16 text-primary drop-shadow-lg" />
          </motion.div>
        </div>

        <h2 className="font-romantic text-4xl md:text-6xl text-white glow-text">
          Future Secured ❤️
        </h2>
        
        <div className="font-hacker text-green-400 text-sm md:text-base bg-black/40 p-4 rounded-lg border border-green-900/30 inline-block">
          <div>{`> PROTOCOL STATUS: SUCCESS`}</div>
          <div>{`> TIMELINE: MERGED`}</div>
          <div>{`> HAPPINESS_LEVEL: MAXIMUM`}</div>
        </div>

        <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed pt-4">
          The present version of me is extremely happy right now. 
          <br />
          <span className="text-sm opacity-60 mt-2 block">(And the future wrinkly version says thanks too.)</span>
        </p>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-12 text-primary/80 font-romantic italic text-lg"
        >
          See you soon...
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
