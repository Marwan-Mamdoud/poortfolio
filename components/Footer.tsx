import { socialMedia } from "@/data";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary bg-surface-container-lowest relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 py-8 gap-4">
        {/* Logo */}
        <div className="font-display text-sm sm:text-lg font-bold tracking-widest text-primary uppercase flex items-center gap-3">
          <img
            alt="Marwan Mamdouh Logo"
            className="h-8 w-8 object-contain rounded"
            src="/mr-.jpg"
          />
          <span className="hidden sm:inline">OFFICE OF MARWAN MAMDOUH</span>
          <span className="sm:hidden">MM</span>
        </div>

        {/* Copyright */}
        <div className="font-code font-bold text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant text-center">
          <span className="text-primary">&gt;</span> &copy; 2024 REGISTRY // ALL RIGHTS RESERVED
        </div>

        {/* Social Links */}
        <ul className="flex gap-4 sm:gap-6 font-code font-bold text-xs sm:text-sm uppercase tracking-wider">
          {socialMedia.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface hover:text-primary transition-colors flex items-center gap-1"
              >
                <span className="text-sm">&#60;/&#62;</span> {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
