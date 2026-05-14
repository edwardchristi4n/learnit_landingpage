import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { latestContentData } from "../utils/data.jsx";

export default function LatestContent() {
  return (
    <section
      id="content"
      className="relative z-10 max-w-6xl mx-auto px-6 py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-cyan-400 font-semibold">LATEST CONTENT</p>
          <h2
            className="text-4xl md:text-6xl font-black mt-3"
            style={{ fontFamily: "League Spartan" }}
          >
            New posts are coming.
          </h2>
        </div>

        <p className="text-gray-400 max-w-md">
          Konten singkat seputar coding, AI, web development, dan dunia IT untuk
          pemula.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {latestContentData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-7 min-h-64 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-cyan-400/10 group-hover:bg-purple-400/20 transition" />

            <p className="text-cyan-400 font-bold mb-8">{item.number}</p>
            <p className="text-sm text-gray-500 mb-3">{item.type}</p>

            <h3 className="text-3xl font-black leading-none">{item.title}</h3>

            <a
              href="https://instagram.com/learnit.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-cyan-300 hover:text-purple-300 transition"
            >
              View on Instagram <FaInstagram />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
