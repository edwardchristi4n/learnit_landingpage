import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <motion.img
        src="/logo.png"
        alt="logo"
        className="w-40 mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black leading-none"
        style={{ fontFamily: "League Spartan" }}
      >
        LEARN IT
        <br />
        <span className="text-cyan-400">THE MODERN WAY</span>
      </motion.h1>

      <p className="mt-6 text-gray-400 text-lg md:text-xl">
        Programming Made Simple.
      </p>

      <a
        href="https://instagram.com/learnit.dev"
        target="_blank"
        className="mt-10 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
      >
        Follow Instagram
      </a>
    </section>
  );
}
