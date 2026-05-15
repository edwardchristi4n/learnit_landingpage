import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function CTASection() {
  return (
    <section
      id="follow"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative z-10">
          <p className="text-cyan-400 font-semibold mb-3 text-sm md:text-base">
            READY TO START?
          </p>
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "League Spartan" }}
          >
            Join Us on Instagram
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm md:text-base">
            Follow @learnit.dev untuk konten coding, AI, web development, dan
            tech tips yang dijelasin dengan cara paling simple dan mudah
            dipahami.
          </p>

          <a
            href="https://instagram.com/learnit.dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-purple-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] text-sm md:text-base"
          >
            <FaInstagram />
            Follow @learnit.dev
          </a>
        </div>
      </motion.div>
    </section>
  );
}
