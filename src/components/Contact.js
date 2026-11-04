 
"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Phone,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "jubairhs115@gmail.com";
  const phoneNumber = "01957745659";
  const whatsappNumber = "01715131160";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-spacing relative bg-[#0A0A0A]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>

          <p className="mt-3 text-base text-zinc-400">
            Have a project, internship opportunity, or question in mind?
            Feel free to send a message or connect through social channels.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800]">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Primary communication channel
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono text-zinc-200 hover:text-[#C2F800] hover:border-[#C2F800]/40 transition-colors truncate"
                  title="Click to write an email"
                >
                  {emailAddress}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#C2F800]" />
                      <span className="text-[#C2F800]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800]">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Phone Number
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Available for direct calls
                  </p>
                </div>
              </div>

              <a
                href="tel:+8801957745659"
                className="block mt-4 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-mono text-zinc-200 hover:text-[#C2F800] hover:border-[#C2F800]/40 transition-colors"
              >
                {phoneNumber}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800]">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    WhatsApp
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Let&apos;s connect on WhatsApp
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/8801715131160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between mt-4 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-mono text-zinc-200 hover:text-[#C2F800] hover:border-[#C2F800]/40 transition-colors group"
              >
                <span>{whatsappNumber}</span>
                <ExternalLink
                  size={14}
                  className="text-zinc-500 group-hover:text-[#C2F800] transition-colors"
                />
              </a>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4">
                Professional Networks
              </h3>

              <div className="space-y-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jubairhossain18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5]/10 text-[#0077B5]">
                      <FaLinkedinIn size={16} />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-white group-hover:text-[#C2F800] transition-colors block">
                        LinkedIn
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        jubairhossain18
                      </span>
                    </div>
                  </div>

                  <ExternalLink
                    size={14}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/jubairhs115-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.08] text-white">
                      <FaGithub size={16} />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-white group-hover:text-[#C2F800] transition-colors block">
                        GitHub
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        jubairhs115-cell
                      </span>
                    </div>
                  </div>

                  <ExternalLink
                    size={14}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </a>

              </div>
            </div>

            {/* Response Time Notice */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 flex items-start gap-2.5">
              <MessageSquare
                size={16}
                className="text-[#C2F800] shrink-0 mt-0.5"
              />

              <span>
                I typically respond within 24–48 hours. Looking forward to
                connecting!
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>

              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below to open directly in your preferred
                email client.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/25 text-xs text-zinc-200 flex items-start gap-2.5">
                  <Check
                    size={16}
                    className="text-[#C2F800] shrink-0 mt-0.5"
                  />

                  <div>
                    <strong className="text-white block font-semibold">
                      Email draft prepared!
                    </strong>

                    Your default email application should open with your
                    message prepared. Please review and send it from there.
                    You can also email directly at{" "}
                    <span className="text-[#C2F800] font-mono">
                      {emailAddress}
                    </span>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-[#C2F800]">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#C2F800] focus:bg-white/[0.07] transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-300 mb-1.5"
                    >
                      Your Email <span className="text-[#C2F800]">*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#C2F800] focus:bg-white/[0.07] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-zinc-300 mb-1.5"
                  >
                    Subject <span className="text-[#C2F800]">*</span>
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Web Development Project"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#C2F800] focus:bg-white/[0.07] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-zinc-300 mb-1.5"
                  >
                    Message <span className="text-[#C2F800]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#C2F800] focus:bg-white/[0.07] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C2F800] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#b4e600] active:scale-[0.98] transition-all shadow-lg shadow-[#C2F800]/20"
                >
                  <Send size={15} />
                  <span>Send via Email Client</span>
                </button>

                <p className="text-[11px] text-zinc-400 mt-2">
                  * Opens your device&apos;s email client with a pre-filled
                  message. You must send the email from your email application.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
