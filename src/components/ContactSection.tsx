
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import SectionDownArrow from "./SectionDownArrow";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    // Here you would normally send form data with an API call
  }

  return (
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto mb-12 bg-card-dark/80 rounded-lg p-9 shadow-glow-blue border-l-4 border-neon-blue backdrop-blur-lg animate-section-3d"
    >
      <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-5 text-center">Contact</h2>
      {sent ? (
        <div className="text-green-400 text-lg font-semibold text-center">Thank you! Your message has been sent.</div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label className="block mb-2 font-mono text-base text-neon-blue" htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="text-neon-green placeholder:text-neon-blue"
            />
          </div>
          <div>
            <label className="block mb-2 font-mono text-base text-neon-blue" htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="you@email.com"
              required
              className="text-neon-green placeholder:text-neon-blue"
            />
          </div>
          <div>
            <label className="block mb-2 font-mono text-base text-neon-blue" htmlFor="message">Message</label>
            <Textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              required
              rows={5}
              className="text-neon-green placeholder:text-neon-blue"
            />
          </div>
          <Button
            type="submit"
            className="w-full font-bold text-lg rounded-2xl bg-[#39ff14] hover:bg-[#3fff60] shadow-[0_0_24px_8px_#39ff1499] text-black tracking-widest border-none transition-colors duration-200"
            style={{
              boxShadow: "0 0 18px 4px #39ff14cc, 0 0 32px 4px #39ff1440",
              letterSpacing: "0.12em",
            }}
          >
            SEND
          </Button>
        </form>
      )}
      {/* No next arrow since Contact is the last section */}
    </section>
  );
};

export default ContactSection;
