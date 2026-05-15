import { Code2, BrainCircuit, Globe2, Sparkles } from "lucide-react";

export const roadmapData = [
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

export const latestContentData = [
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

export const terminalLines = [
  "const account = '@learnit_dev';",
  "const slogan = 'Programming Made Simple';",
  "const focus = ['Coding', 'AI', 'Web Development'];",
  "console.log('Start learning 🚀');",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Start Here", href: "#start-here" },
  { label: "Content", href: "#content" },
  { label: "Terminal", href: "#terminal" },
];
