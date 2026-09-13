"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FiMail, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const subject = `New Portfolio Message from ${formData.name}`;
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:krrajeev939@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;

    try {
      // Send message to FormSubmit AJAX endpoint
      const res = await fetch("https://formsubmit.co/ajax/krrajeev939@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: subject,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#6F5A4B", "#B7AEA4", "#E8E6E3"],
        });
      } else {
        // If form needs activation or service returned notice, open mailto fallback
        if (typeof data.message === "string" && data.message.includes("Activation")) {
          setStatusMessage(
            "Note: FormSubmit requires a one-time activation. Opening your mail app so the message is sent directly!"
          );
        } else {
          setStatusMessage("Opening email application to complete sending...");
        }
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch {
      // Network/AdBlock issue fallback to mailto
      setStatusMessage("Opening email application to send message...");
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setStatusMessage(null);
        setFormData({ name: "", email: "", message: "" });
      }, 7000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B38A64]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B38A64] font-semibold">
            Contact
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F3F2]">
            Let's Connect
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side: Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <a
              href="mailto:krrajeev939@gmail.com"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center justify-between group border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block">
                    Email
                  </span>
                  <span className="font-mono text-sm text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium">
                    krrajeev939@gmail.com
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/rajeevkrsingh17"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center justify-between group border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors">
                  <FiGithub className="text-lg" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block">
                    GitHub
                  </span>
                  <span className="font-mono text-sm text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium">
                    github.com/rajeevkrsingh17
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/-rajeev-kumar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center justify-between group border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors">
                  <FiLinkedin className="text-lg" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block">
                    LinkedIn
                  </span>
                  <span className="font-mono text-sm text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium">
                    linkedin.com/in/-rajeev-kumar-
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location 1: LPU, Punjab */}
            <a
              href="https://www.google.com/maps/dir//Lovely+Professional+University,+Jalandhar+-+Delhi,+Grand+Trunk+Rd,+Phagwara,+Punjab+144411/@31.2668687,75.7022563,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391a5f5e9c489cf3:0x4049a5409d53c300!2m2!1d75.7051435!2d31.255992?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center justify-between group border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block">
                    University Location
                  </span>
                  <span className="font-mono text-sm text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium">
                    LPU, Phagwara, Punjab
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location 2: Buxar, Bihar */}
            <a
              href="https://www.google.com/maps/search/Buxar%2C+India/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center justify-between group border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#B38A64]/10 text-[#B38A64] group-hover:bg-[#B38A64] group-hover:text-[#09090B] transition-colors">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]/60 block">
                    Hometown
                  </span>
                  <span className="font-mono text-sm text-[#F3F3F2] group-hover:text-[#B38A64] transition-colors font-medium">
                    Buxar, Bihar, India
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-sm text-[#B38A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right Side: Minimal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10">
              <h3 className="font-heading text-2xl text-[#F3F3F2] font-bold mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#A1A1AA] font-light mb-6">
                Delivered directly to <span className="text-[#B38A64] font-mono font-medium">krrajeev939@gmail.com</span>.
              </p>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#B38A64]/20 border border-[#B38A64] flex items-center justify-center text-[#F3F3F2] text-xl">
                    <FiCheck />
                  </div>
                  <h4 className="font-heading text-xl text-[#F3F3F2]">
                    Message Sent
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed font-light max-w-sm">
                    {statusMessage || "Thank you for reaching out! Your message has been sent to krrajeev939@gmail.com."}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStatusMessage(null);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 text-xs font-mono text-[#B38A64] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] block mb-1 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1A1A1D] border border-white/10 text-xs text-[#F3F3F2] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#B38A64] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] block mb-1 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1A1A1D] border border-white/10 text-xs text-[#F3F3F2] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#B38A64] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] block mb-1 font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      className="w-full px-3.5 py-3 rounded-xl bg-[#1A1A1D] border border-white/10 text-xs text-[#F3F3F2] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#B38A64] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl border border-[#B38A64] text-[#F3F3F2] font-semibold font-mono text-xs tracking-widest uppercase hover:bg-[#B38A64] hover:text-[#09090B] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll back to Top */}
        <ScrollIndicator targetId="hero" label="Back To Top" isTop={true} />
      </div>
    </section>
  );
}
