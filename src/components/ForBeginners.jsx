import { motion } from "framer-motion";
import { Users, BookOpen, Rocket, Target } from "lucide-react";

export default function ForBeginners() {
  const benefits = [
    {
      icon: <BookOpen size={28} />,
      title: "Materi Structured",
      description:
        "Step-by-step dari nol sampai bisa, tanpa skip konsep penting.",
    },
    {
      icon: <Users size={28} />,
      title: "Friendly & Supportive",
      description:
        "Komunitas yang welcoming untuk developer pemula di semua level.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Practical & Real-world",
      description: "Semua materi fokus pada aplikasi nyata, bukan hanya teori.",
    },
    {
      icon: <Target size={28} />,
      title: "Clear Goals",
      description: "Tahu exactly apa yang bakal dipelajari dan kenapa penting.",
    },
  ];

  return (
    <section
      id="for-beginners"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm md:text-base mb-3 md:mb-4">
            FOR BEGINNERS
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "League Spartan" }}
          >
            Perfect untuk Pemula
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            learnit.dev dirancang khusus untuk pemula yang ingin memahami dunia
            programming dan tech dengan cara yang fun dan mudah dipahami.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            Kami percaya bahwa{" "}
            <span className="text-cyan-300 font-semibold">
              setiap orang bisa belajar coding
            </span>
            , regardless dari background mereka. Semua yang kami ajarkan
            didasarkan pada real-world experience dan practical knowledge.
          </p>

          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm md:text-base">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Dari basic programming sampai AI tools
          </div>
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm md:text-base mt-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Fokus pada web development dan modern tech
          </div>
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm md:text-base mt-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Community-driven learning
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 md:p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition group"
            >
              <div className="text-cyan-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-sm md:text-base mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
