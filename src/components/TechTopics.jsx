import { motion } from "framer-motion";

export default function TechTopics() {
  const topics = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Web Dev", color: "from-blue-400 to-blue-600" },
    { name: "Python", color: "from-blue-500 to-purple-600" },
    { name: "AI/ML", color: "from-purple-400 to-pink-600" },
    { name: "Node.js", color: "from-green-400 to-emerald-600" },
    { name: "CSS/Design", color: "from-pink-400 to-rose-600" },
    { name: "Tech Tips", color: "from-orange-400 to-red-600" },
  ];

  return (
    <section
      id="tech"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32"
    >
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-semibold text-sm md:text-base"
        >
          TECH TOPICS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mt-4"
          style={{ fontFamily: "League Spartan" }}
        >
          Topik yang Kami Bahas
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="relative group"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${topic.color} rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-full px-5 md:px-6 py-2 md:py-3 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <span
                className={`bg-gradient-to-r ${topic.color} bg-clip-text text-transparent font-bold text-sm md:text-base`}
              >
                {topic.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
