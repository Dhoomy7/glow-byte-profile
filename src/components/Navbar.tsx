import { Github, Mail, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const navItems = [
  { label: "About", to: "#about" },
  { label: "Education", to: "#education" },
  { label: "Experience", to: "#experience" },
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
    <nav className="fixed z-50 left-1/2 top-7 -translate-x-1/2 px-6 py-4 bg-[#151f28cc] border border-gradient-greenblue rounded-3xl shadow-glow-blue backdrop-blur-2xl flex items-center gap-8 animate-fade-in navbar-glass">
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="text-accent-blue p-2 rounded-xl border border-accent-green bg-[#101820ec] hover:bg-[#18444f] mr-3 md:hidden"
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
            ? `absolute left-0 w-full top-[62px] px-7 z-40 transition-all duration-200 ${
                menuOpen
                  ? "flex flex-col gap-4 py-4 bg-[#192b38ee] border-b border-gradient-greenblue rounded-b-2xl shadow-glow-blue"
                  : "hidden"
              }`
            : "flex gap-7"
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
              className="hover:text-accent-green transition-colors duration-170 text-accent-blue text-lg font-semibold tracking-wide font-mono drop-shadow-[0_0_6px_#22d3ee25]"
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
            className="rounded-full hover:bg-[#24fd3412] p-2 transition-colors border border-transparent hover:border-accent-green"
          >
            <social.icon className="text-accent-blue hover:text-accent-green" size={20} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
