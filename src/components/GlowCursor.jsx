import { motion } from "framer-motion";
import { useGlowCursor } from "../utils/hooks";

export default function GlowCursor() {
  const position = useGlowCursor();

  return (
    <>
      {/* Background Glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-cyan-400/20 pointer-events-none z-0 blur-3xl"
        animate={{
          x: position.x - 192,
          y: position.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-300 pointer-events-none z-9999 mix-blend-screen"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-cyan-300/40 pointer-events-none z-9998"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
        }}
      />
    </>
  );
}
