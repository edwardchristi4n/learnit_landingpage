import { motion } from "framer-motion";
import { useGlowCursor } from "../utils/hooks";

export default function GlowCursor() {
  const position = useGlowCursor();

  return (
    <>
      {/* Background Glow - Large subtle blur */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-transparent pointer-events-none z-0 blur-[100px]"
        animate={{
          x: position.x - 300,
          y: position.y - 300,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 40,
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-300 pointer-events-none z-9999 mix-blend-screen shadow-[0_0_15px_rgba(34,211,238,0.6)]"
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
