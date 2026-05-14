import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import TypingLine from "./TypingLine";

export default function FloatingTerminal() {
  const lines = [
    "const account = '@learnit_dev';",
    "const slogan = 'Programming Made Simple';",
    "const focus = ['Coding', 'AI', 'Web Development'];",
    "console.log('Start learning 🚀');",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="w-full glass rounded-3xl md:rounded-4xl p-4 md:p-6 border border-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
    >
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
          <Terminal size={16} className="md:w-5 md:h-5" />
          <span>terminal</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400/80"></span>
          <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400/70"></span>
          <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400/70"></span>
        </div>
      </div>

      <div className="space-y-2 md:space-y-3 font-mono text-[11px] md:text-[14px] leading-6 md:leading-7">
        {lines.map((line, index) => (
          <TypingLine
            key={index}
            text={line}
            startDelay={index * 1400}
            speed={28}
          />
        ))}
      </div>
    </motion.div>
  );
}
