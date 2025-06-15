import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section
    id="contact"
    className="w-full max-w-3xl mx-auto mb-12 bg-card-dark/80 rounded-lg p-9 shadow-glow-blue border-l-4 border-neon-blue backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-5">Contact</h2>
    <div className="text-lg space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="text-neon-blue" size={20} />
        <a href="mailto:dhoom.sedge@gmail.com" className="hover:text-neon-green transition-colors">
          dhoom.sedge@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="text-neon-blue" size={20} />
        <span>+20 111 008 4466</span>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="text-neon-blue" size={20} />
        <span>Giza, Cairo</span>
      </div>
    </div>
  </section>
);
export default ContactSection;
