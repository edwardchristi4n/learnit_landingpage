import { motion } from "framer-motion";
import { Code2, Lightbulb, GitBranch, Zap } from "lucide-react";

export default function StartHere() {
  const topics = [
    {
      number: "01",
      icon: <Code2 size={32} />,
      title: "What is Programming?",
      description:
        "Pahami dasar-dasar programming dan kenapa penting untuk dipelajari di era digital.",
      color: "text-cyan-300",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30",
    },
    {
      number: "02",
      icon: <Lightbulb size={32} />,
      title: "Vibe Coding vs Engineering",
      description:
        "Beda antara membuat code yang bekerja vs membuat code yang profesional dan scalable.",
      color: "text-blue-300",
      bg: "bg-blue-400/10",
      border: "border-blue-400/30",
    },
    {
      number: "03",
      icon: <GitBranch size={32} />,
      title: "Frontend vs Backend",
      description:
        "Pelajari perbedaan frontend (tampilan) dan backend (logika) dalam web development.",
      color: "text-purple-300",
      bg: "bg-purple-400/10",
      border: "border-purple-400/30",
    },
    {
      number: "04",
      icon: <Zap size={32} />,
      title: "AI Tools for Beginners",
      description:
        "Discover tools AI modern yang bisa membantu workflow dan produktivitas sebagai developer.",
      color: "text-pink-300",
      bg: "bg-pink-400/10",
      border: "border-pink-400/30",
    },
  ];

  return (
    <section
      id="start-here"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32"
    >
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-semibold text-sm md:text-base"
        >
          START HERE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mt-4"
          style={{ fontFamily: "League Spartan" }}
        >
          For Complete Beginners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base"
        >
          Kumpulan topik dasar yang perlu dipahami sebelum memulai perjalanan
          coding Anda.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`glass rounded-2xl md:rounded-3xl p-6 md:p-8 border ${topic.border} relative overflow-hidden group cursor-pointer`}
          >
            <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-cyan-400/5 group-hover:bg-purple-400/10 transition duration-500" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`${topic.bg} ${topic.color} w-14 h-14 rounded-2xl flex items-center justify-center`}
                >
                  {topic.icon}
                </div>
                <span className="text-gray-600 font-bold text-lg">
                  {topic.number}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {topic.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
