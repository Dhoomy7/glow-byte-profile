
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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
      <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-5">Contact</h2>
      {sent ? (
        <div className="text-green-400 text-lg font-semibold">Thank you! Your message has been sent.</div>
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
            />
          </div>
          <Button type="submit" className="bg-neon-blue hover:bg-neon-green transition-colors w-full font-bold text-lg">Send Message</Button>
        </form>
      )}
    </section>
  );
};

export default ContactSection;
