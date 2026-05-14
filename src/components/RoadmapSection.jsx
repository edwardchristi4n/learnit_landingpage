import { roadmapData } from "../utils/data.jsx";
import RoadmapCard from "./RoadmapCard";

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative z-10 max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-cyan-400 font-semibold">ROADMAP</p>
        <h2
          className="text-4xl md:text-6xl font-black mt-3"
          style={{ fontFamily: "League Spartan" }}
        >
          Start From Zero.
        </h2>
        <p className="text-gray-400 mt-4">
          Materi akan dibahas step-by-step dari basic sampai modern tech.
        </p>
      </div>

      <div className="relative grid md:grid-cols-4 gap-6">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-purple-400/0 -z-10" />

        {roadmapData.map((item, index) => (
          <RoadmapCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
