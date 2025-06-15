import { Github, Mail, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const navItems = [
  { label: "About", to: "#about" },
  { label: "Experience", to: "#experience" },
  { label: "Education", to: "#education" },
  { label: "Projects", to: "#projects" },
  { label: "Skills", to: "#skills" },
];

const socials = [
  { icon: Github, url: "https://github.com/atowi7", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/atowi7", label: "LinkedIn" },
  { icon: Mail, url: "mailto:dhoom.sedge@gmail.com", label: "Email" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close dropdown after click
  const handleNavClick = () => {
    if (isMobile) setMenuOpen(false);
  };

  return (
    <nav className="fixed z-50 left-1/2 top-8 -translate-x-1/2 px-6 py-4 bg-[#101820dd] border border-neon-blue rounded-2xl shadow-glow-blue backdrop-blur-xl flex items-center gap-7 animate-fade-in">
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="text-neon-blue p-2 rounded-lg border border-neon-green bg-[#101820] hover:bg-[#232e37] mr-3 md:hidden"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>
      )}
      {/* Navbar Links */}
      <ul
        className={
          isMobile
            ? `absolute left-0 w-full top-[62px] px-6 z-40 transition-all duration-200 ${
                menuOpen
                  ? "flex flex-col gap-3 py-4 bg-[#18222a] border-b border-neon-blue rounded-b-2xl shadow-glow-blue"
                  : "hidden"
              }`
            : "flex gap-6"
        }
        style={
          isMobile
            ? {
                marginLeft: 0,
              }
            : undefined
        }
      >
        {navItems.map(item => (
          <li key={item.label}>
            <a
              href={item.to}
              className="hover:text-neon-green transition-colors duration-200 text-neon-blue text-md font-semibold tracking-wide font-mono"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Spacer for desktop nav to push socials */}
      {!isMobile && <div className="flex-1" />}
      {/* Social Links always visible */}
      <div className={`flex gap-3 ${isMobile ? "ml-auto" : "ml-7"}`}>
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
};

export default Navbar;
