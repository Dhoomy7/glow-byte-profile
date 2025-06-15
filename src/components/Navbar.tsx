
import { Github, Mail, Linkedin } from "lucide-react";

const navItems = [
  { label: "About", to: "#about" },
  { label: "Experience", to: "#experience" },
  { label: "Projects", to: "#projects" },
  { label: "Skills", to: "#skills" },
  { label: "Contact", to: "#contact" },
];

const socials = [
  { icon: Github, url: "https://github.com/atowi7", label: "GitHub" },
  { icon: Linkedin, url: "https://atowi7.com/", label: "Website" },
  { icon: Mail, url: "mailto:dhoom.sedge@gmail.com", label: "Email" },
];

const Navbar = () => (
  <nav className="fixed z-50 left-1/2 top-8 -translate-x-1/2 px-6 py-4 bg-[#101820dd] border border-neon-blue rounded-2xl shadow-glow-blue backdrop-blur-xl flex items-center gap-7 animate-fade-in">
    <ul className="flex gap-6 text-neon-blue text-md font-semibold tracking-wide font-mono">
      {navItems.map(item => (
        <li key={item.label}>
          <a
            href={item.to}
            className="hover:text-neon-green transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex gap-3 ml-7">
      {socials.map(social => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="rounded-full hover:bg-[#232e37] p-2 transition-colors border border-transparent hover:border-neon-green"
        >
          <social.icon className="text-neon-blue hover:text-neon-green" size={20} />
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;
