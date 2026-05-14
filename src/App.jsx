import { motion } from "framer-motion";
import { Code2, BrainCircuit, Globe2, Sparkles } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// Components
import GlowCursor from "./components/GlowCursor";
import Navbar from "./components/Navbar";
import FloatingTerminal from "./components/FloatingTerminal";
import RoadmapSection from "./components/RoadmapSection";
import TerminalSection from "./components/TerminalSection";
import LatestContent from "./components/LatestContent";
import CTASection from "./components/CTASection";
import WhyLearnit from "./components/WhyLearnit";
import TechTopics from "./components/TechTopics";
import RoadmapCard from "./components/RoadmapCard";

// Data
const roadmap = [
  {
    icon: <Code2 />,
    title: "Programming",
    text: "Dasar coding dari nol.",
    color: "text-cyan-300",
    bg: "bg-cyan-400/15",
    border: "border-cyan-400/30",
  },
  {
    icon: <Globe2 />,
    title: "Web Dev",
    text: "HTML, CSS, JavaScript.",
    color: "text-blue-300",
    bg: "bg-blue-400/15",
    border: "border-blue-400/30",
  },
  {
    icon: <BrainCircuit />,
    title: "AI & ML",
    text: "AI tools dan teknologi.",
    color: "text-purple-300",
    bg: "bg-purple-400/15",
    border: "border-purple-400/30",
  },
  {
    icon: <Sparkles />,
    title: "IT Tips",
    text: "Tips produktivitas tech.",
    color: "text-pink-300",
    bg: "bg-pink-400/15",
    border: "border-pink-400/30",
  },
];

const latestContent = [
  {
    number: "01",
    title: "What is Programming?",
    type: "Intro",
  },
  {
    number: "02",
    title: "Frontend vs Backend",
    type: "Web Dev",
  },
  {
    number: "03",
    title: "AI Tools for Beginners",
    type: "AI & Tech",
  },
];

export default function App() {
  return (
    <main className="min-h-screen relative overflow-hidden cursor-none bg-slate-950">
      <GlowCursor />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-16 md:pb-24 min-h-screen flex flex-col items-center justify-center"
      >
        <div className="text-center mb-8 md:mb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex px-3 md:px-4 py-2 rounded-full text-xs md:text-sm text-cyan-300 mb-6 md:mb-8"
          >
            💻 Programming Made Simple
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-[0.9]"
            style={{ fontFamily: "League Spartan" }}
          >
            LEARN IT
            <br />
            <span className="text-gradient">THE MODERN WAY</span>
          </motion.h1>

          <p className="mt-4 md:mt-7 max-w-2xl mx-auto text-gray-400 text-sm md:text-lg lg:text-xl px-4 md:px-0">
            Belajar coding, AI, web development, dan dunia IT dengan penjelasan
            yang simple, visual, dan mudah dipahami.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://instagram.com/learnit.dev"
              target="_blank"
              rel="noreferrer"
              className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-purple-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] text-sm md:text-base"
            >
              <span className="inline-flex items-center gap-2">
                <FaInstagram className="group-hover:rotate-12 transition" />
                Follow Instagram
              </span>
            </a>

            <a
              href="#why"
              className="px-6 md:px-8 py-3 md:py-4 rounded-full glass font-semibold hover:scale-105 transition text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full max-w-2xl px-4 md:px-0">
          <FloatingTerminal />
        </div>
      </section>

      {/* Why LearnIT Section */}
      <WhyLearnit />

      {/* Roadmap Section */}
      <section
        id="roadmap"
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32"
      >
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-semibold text-sm md:text-base">
            ROADMAP
          </p>
          <h2
            className="text-4xl md:text-6xl font-black mt-4"
            style={{ fontFamily: "League Spartan" }}
          >
            Start From Zero.
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Materi akan dibahas step-by-step dari basic sampai modern tech.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-purple-400/0 -z-10" />

          {roadmap.map((item, index) => (
            <RoadmapCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Tech Topics Section */}
      <TechTopics />

      {/* Terminal Section */}
      <TerminalSection />

      {/* Latest Content Section */}
      <LatestContent />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-400/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
          <p>© 2026 learnit.dev</p>
          <p>Programming Made Simple.</p>
        </div>
      </footer>
    </main>
  );
}
