import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import TypingLine from "./TypingLine";
import { terminalLines } from "../utils/data.jsx";

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32"
    >
      <div className="mb-12 md:mb-16">
        <p className="text-cyan-400 font-semibold text-sm md:text-base">
          INTERACTIVE TERMINAL
        </p>
        <h2
          className="text-4xl md:text-6xl font-black mt-3 md:mt-4"
          style={{ fontFamily: "League Spartan" }}
        >
          See Our Code.
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base">
          Terminal interaktif menampilkan info lengkap tentang learnit.dev dan
          fokus pembelajaran kami.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl md:rounded-4xl p-6 md:p-12 border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.15)] max-w-4xl"
      >
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 text-gray-400">
            <Terminal size={18} className="md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">
              learnit-terminal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400/80"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400/70"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400/70"></span>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4 font-mono text-[11px] md:text-[15px] leading-6 md:leading-8">
          {terminalLines.map((line, index) => (
            <TypingLine
              key={index}
              text={line}
              startDelay={index * 1200 + 500}
              speed={25}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 5, duration: 0.6 }}
          className="mt-6 md:mt-8 pt-6 border-t border-cyan-400/10"
        >
          <p className="text-gray-400 text-xs md:text-sm">
            <span className="text-cyan-300">~</span> Powered by learnit.dev |
            Programming Made Simple
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
