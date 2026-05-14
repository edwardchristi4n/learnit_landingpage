import { FaInstagram } from "react-icons/fa";

export default function CTASection() {
  return (
    <section id="follow" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="glass rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative z-10">
          <p className="text-cyan-400 font-semibold mb-3">START LEARNING</p>
          <h2
            className="text-5xl md:text-7xl font-black"
            style={{ fontFamily: "League Spartan" }}
          >
            Programming Made Simple.
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Follow Instagram untuk konten coding, AI, web development, dan tech
            explained secara singkat.
          </p>

          <a
            href="https://instagram.com/learnit.dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-purple-400 hover:text-white hover:scale-105 transition-all duration-300"
          >
            <FaInstagram />
            Follow @learnit.dev
          </a>
        </div>
      </div>
    </section>
  );
}
