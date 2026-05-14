import { motion } from "framer-motion";
import { BookOpen, Users, Zap, Eye } from "lucide-react";

export default function WhyLearnit() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Materi Terstruktur",
      description: "Dari dasar sampai advanced dengan urutan yang logis.",
      color: "text-cyan-300",
      bg: "bg-cyan-400/10",
    },
    {
      icon: <Zap size={32} />,
      title: "Konten Singkat & Padat",
      description: "Pembelajaran cepat tanpa membosankan, mudah dipahami.",
      color: "text-blue-300",
      bg: "bg-blue-400/10",
    },
    {
      icon: <Eye size={32} />,
      title: "Visual & Interaktif",
      description: "Penjelasan dengan visualisasi 3D dan animasi menarik.",
      color: "text-purple-300",
      bg: "bg-purple-400/10",
    },
    {
      icon: <Users size={32} />,
      title: "Komunitas Aktif",
      description: "Belajar bersama developer lain di Instagram @learnit.dev",
      color: "text-pink-300",
      bg: "bg-pink-400/10",
    },
  ];

  return (
    <section
      id="why"
      className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32"
    >
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-semibold text-sm md:text-base"
        >
          WHY LEARNIT.DEV
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mt-4"
          style={{ fontFamily: "League Spartan" }}
        >
          Belajar dengan Cara Terbaik
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              className={`${feature.bg} rounded-2xl md:rounded-3xl p-4 md:p-6 h-full backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]`}
            >
              <div
                className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8 md:w-8 md:h-8`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
