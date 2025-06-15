
import SectionDownArrow from "./SectionDownArrow";

const AboutSection = () => (
  <section
    id="about"
    className="w-full max-w-3xl mx-auto mt-20 mb-12 text-lg md:text-xl text-slate-100 card-glass p-11 backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-accent-gradient font-orbitron mb-5 text-center tracking-wide"
      style={{ textShadow: "0 0 10px #39ff14a2" }}
    >About Me</h2>
    <p className="text-center md:text-left leading-7 font-mono">
      <span className="font-extrabold text-ambient-green">Name:</span> Abdulrahman Kamal Alatowi<br />
      <span className="font-extrabold text-ambient-blue">Location:</span> Giza, Cairo<br />
      <span className="font-extrabold text-accent-gradient">Title:</span> <span className="text-ambient-green">Flutter Developer</span><br /><br />
      <span className="text-white/90">
      I'm passionate about building <span className="text-ambient-green">beautiful</span>, <span className="text-ambient-blue">fast apps</span> with Flutter.<br/>
      Experienced in <span className="text-accent-gradient">cross-platform development</span>, <span className="text-ambient-green">Firebase integration</span>, and <span className="text-ambient-blue">RESTful APIs</span>.<br/>
      I thrive in creative and collaborative environments — always looking for new challenges and ways to innovate!
      </span>
    </p>
    <SectionDownArrow nextSectionId="education" />
  </section>
);
export default AboutSection;
