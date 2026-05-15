import { motion } from "framer-motion";

export default function RoadmapCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.14,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      whileTap={{ scale: 0.98 }}
      className={`glass rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-48 md:min-h-52 border ${item.border} relative overflow-hidden transition-transform duration-200`}
    >
      <div className="absolute top-3 md:top-4 right-4 md:right-5 text-xs md:text-sm text-gray-600 font-bold">
        0{index + 1}
      </div>

      <div
        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_25px_rgba(34,211,238,0.12)]`}
      >
        {item.icon}
      </div>

      <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
      <p className="text-gray-400 text-xs md:text-sm">{item.text}</p>
    </motion.div>
  );
}
