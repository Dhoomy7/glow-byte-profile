
import { useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Github, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // "Fake" submit: demo purpose only
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast({ title: "Submitted! I'll get back to you soon.", description: "", duration: 3500 });
      formRef.current?.reset();
    }, 1300);
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto mb-16 bg-card-dark/80 rounded-lg p-9 shadow-glow-green border-l-4 border-neon-green backdrop-blur-lg">
      <h2 className="text-2xl md:text-3xl font-bold glow-text mb-2">Contact</h2>
      <div className="mb-4 text-md">
        <span className="font-mono text-neon-blue">Email:</span> <a href="mailto:dhoom.sedge@gmail.com" className="hover:text-neon-green underline">dhoom.sedge@gmail.com</a><br/>
        <span className="font-mono text-neon-blue">Location:</span> Giza, Cairo<br/>
        <span className="font-mono text-neon-blue">Website:</span> <a href="https://atowi7.com/" className="hover:text-neon-green underline" target="_blank" rel="noopener noreferrer">atowi7.com</a>
      </div>
      <form ref={formRef} className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} autoComplete="off">
        <input name="email" type="email" required disabled={loading}
          className="bg-black/60 border border-neon-blue px-4 py-3 rounded-lg text-neon-blue focus:ring-2 focus:ring-neon-green placeholder:text-slate-500"
          placeholder="Your email"
        />
        <textarea name="message" required rows={4} disabled={loading}
          className="bg-black/60 border border-neon-blue px-4 py-3 rounded-lg text-neon-blue focus:ring-2 focus:ring-neon-green placeholder:text-slate-500"
          placeholder="Your message"
        ></textarea>
        <button type="submit" disabled={loading || sent}
          className="mt-1 bg-neon-green text-black font-mono uppercase font-bold py-2 px-6 rounded-xl shadow-glow-green hover:bg-black hover:text-neon-green border border-neon-green transition-all duration-150"
        >
          {loading ? "Sending..." : (sent ? "Sent!" : "Send")}
        </button>
      </form>
      <div className="mt-8 flex gap-6 text-neon-blue text-2xl items-center">
        <a href="https://github.com/atowi7" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
          <Github size={28} />
        </a>
        <a href="https://atowi7.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
          <Linkedin size={28} />
        </a>
        <a href="mailto:dhoom.sedge@gmail.com" className="hover:text-neon-green transition-colors">
          <Mail size={28} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
