"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm text-white mb-1">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
          className="w-full h-10 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-base outline-none placeholder:text-white/50"
          placeholder="Full Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-white mb-1">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full h-10 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-base outline-none placeholder:text-white/50"
          placeholder="E-mail"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-white mb-1">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full h-10 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-base outline-none placeholder:text-white/50"
          placeholder="Phone"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-white mb-1">
          Message:
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full h-28 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-base outline-none resize-none placeholder:text-white/50"
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        className="w-full h-10 bg-[#1B7308] hover:bg-[#1c7a09] text-white text-base font-semibold rounded-md px-8 py-2 transition-colors"
      >
        Send
      </button>
    </form>
  );
}
