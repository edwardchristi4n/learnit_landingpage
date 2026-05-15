import { FaInstagram } from "react-icons/fa";
import { navLinks } from "../utils/data.jsx";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="glass rounded-full px-4 md:px-5 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 md:gap-3 flex-shrink-0"
          >
            <img
              src="/logo.png"
              className="w-7 md:w-9"
              alt="learnit.dev logo"
            />
            <span className="font-bold text-base md:text-lg">learnit.dev</span>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://instagram.com/learnit.dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm hover:text-purple-300 transition flex-shrink-0"
          >
            <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline text-xs md:text-sm">Follow</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
