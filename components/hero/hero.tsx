import { motion } from "framer-motion";
import Squares from "@/components/squares-background";

export default function Hero() {
  return (
    <div className="w-full h-full bg-black relative flex items-center justify-center overflow-hidden">
      <div className="relative z-10  text-left p-8">
        <motion.h1
          className="text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          Apostolos Karamanis
        </motion.h1>

        <motion.h2
          className="text-3xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Digital Anthology
        </motion.h2>
      </div>

      <Squares
        speed={0.5}
        squareSize={30}
        direction="diagonal"
        borderColor="#333"
        hoverFillColor="#222" //leave blank to disable hover
      />
    </div>
  );
}
