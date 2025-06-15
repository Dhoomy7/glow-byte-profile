
import SectionDownArrow from "./SectionDownArrow";

const AboutSection = () => (
  <section
    id="about"
    className="w-full max-w-3xl mx-auto mt-20 mb-12 text-lg md:text-xl text-slate-100 bg-card-dark/80 p-10 rounded-lg border-l-4 border-neon-blue shadow-glow-blue backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-5 text-center">About Me</h2>
    <p className="text-center md:text-left">
      <span className="font-bold text-accent-green">Name:</span> Abdulrahman Kamal Alatowi<br />
      <span className="font-bold text-accent-green">Location:</span> Giza, Cairo<br />
      <span className="font-bold text-accent-green">Title:</span> Flutter Developer<br /><br />
      I'm passionate about building beautiful, fast apps with Flutter. Experienced in cross-platform development, Firebase integration, and RESTful APIs.
      I thrive in creative and collaborative environments, always looking for new challenges and ways to innovate!
    </p>
    <SectionDownArrow nextSectionId="education" />
  </section>
);
export default AboutSection;
