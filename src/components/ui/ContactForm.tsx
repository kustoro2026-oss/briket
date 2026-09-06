"use client";

import { useState } from "react";

const EXPORT_EMAIL = "charcoalnesiaglobalexport@gmail.com";
const WHATSAPP_NUMBER = "628212991650";

const emptyForm = {
  product: "",
  shapeSize: "",
  specification: "",
  quantity: "",
  packaging: "",
  destination: "",
  incoterm: "",
  company: "",
  email: "",
  whatsapp: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const buildMessage = () => {
    return [
      "REQUEST FOR QUOTATION - Charcoalnesia",
      "",
      `Product: ${formData.product}`,
      `Shape & Size: ${formData.shapeSize}`,
      `Target Specification: ${formData.specification}`,
      `Quantity: ${formData.quantity}`,
      `Packaging: ${formData.packaging}`,
      `Destination: ${formData.destination}`,
      `Incoterm: ${formData.incoterm}`,
      `Company: ${formData.company}`,
      `Contact: ${formData.email} / ${formData.whatsapp}`,
      `Message: ${formData.message}`,
    ].join("\n");
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Request for Quotation - ${formData.company || formData.email}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${EXPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const update = (field: keyof typeof emptyForm, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const selectClass =
    "w-full h-10 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-sm outline-none";
  const inputClass =
    "w-full h-10 px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-sm outline-none placeholder:text-white/50";

  return (
    <form className="space-y-4">
      {/* Product */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="product" className="mb-1 block text-sm text-white">
            Product: *
          </label>
          <select
            id="product"
            value={formData.product}
            onChange={(e) => update("product", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select product
            </option>
            <option value="Shisha">Shisha</option>
            <option value="BBQ">BBQ</option>
            <option value="Shisha and BBQ">Shisha and BBQ</option>
          </select>
        </div>
        <div>
          <label htmlFor="shapeSize" className="mb-1 block text-sm text-white">
            Shape &amp; Size: *
          </label>
          <input
            type="text"
            id="shapeSize"
            value={formData.shapeSize}
            onChange={(e) => update("shapeSize", e.target.value)}
            required
            className={inputClass}
            placeholder="Cube / Hexagonal / Finger / Flower + approved size"
          />
        </div>
      </div>

      {/* Specification + Quantity */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="specification" className="mb-1 block text-sm text-white">
            Target Specification: *
          </label>
          <select
            id="specification"
            value={formData.specification}
            onChange={(e) => update("specification", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select grade
            </option>
            <option value="Platinum">Platinum</option>
            <option value="Super Premium">Super Premium</option>
            <option value="Premium">Premium</option>
            <option value="Need recommendation">Need recommendation</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="mb-1 block text-sm text-white">
            Quantity: *
          </label>
          <input
            type="text"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            required
            className={inputClass}
            placeholder="Container / MT / trial order"
          />
        </div>
      </div>

      {/* Packaging + Destination */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="packaging" className="mb-1 block text-sm text-white">
            Packaging: *
          </label>
          <select
            id="packaging"
            value={formData.packaging}
            onChange={(e) => update("packaging", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select packaging
            </option>
            <option value="Standard">Standard</option>
            <option value="Private Label">Private Label</option>
          </select>
        </div>
        <div>
          <label htmlFor="destination" className="mb-1 block text-sm text-white">
            Destination: *
          </label>
          <input
            type="text"
            id="destination"
            value={formData.destination}
            onChange={(e) => update("destination", e.target.value)}
            required
            className={inputClass}
            placeholder="Country + port"
          />
        </div>
      </div>

      {/* Incoterm + Company */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="incoterm" className="mb-1 block text-sm text-white">
            Incoterm: *
          </label>
          <select
            id="incoterm"
            value={formData.incoterm}
            onChange={(e) => update("incoterm", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select incoterm
            </option>
            <option value="FOB">FOB</option>
            <option value="CFR">CFR</option>
            <option value="CIF">CIF</option>
            <option value="Need recommendation">Need recommendation</option>
          </select>
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm text-white">
            Company: *
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => update("company", e.target.value)}
            required
            className={inputClass}
            placeholder="Company name + website"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white">
            Business E-mail: *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            required
            className={inputClass}
            placeholder="Business email"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1 block text-sm text-white">
            WhatsApp: *
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            required
            className={inputClass}
            placeholder="WhatsApp number with country code"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white">
          Message:
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full px-3 py-2 bg-[#2B2B2B] border-0 rounded-md text-white text-sm outline-none resize-none placeholder:text-white/50"
          placeholder="Specific requirement / target timeline"
        />
      </div>

      {/* Submit buttons */}
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          onClick={handleSubmitEmail}
          className="h-11 rounded-[40px] bg-[#EFA12D] px-8 py-2 text-sm font-bold text-black transition-colors hover:bg-[#d48d1f]"
        >
          SUBMIT REQUEST FOR QUOTATION
        </button>
        <button
          type="button"
          onClick={handleSubmitWhatsApp}
          className="h-11 rounded-[40px] bg-[#1B7308] px-8 py-2 text-sm font-bold text-white transition-colors hover:bg-[#1c7a09]"
        >
          Send via WhatsApp
        </button>
      </div>

      {submitted && (
        <p className="rounded-md bg-black/20 p-3 text-center text-xs leading-[18px] text-white">
          Thank you. Your message has been prepared - please press send in your e-mail client or
          WhatsApp to complete the submission.
        </p>
      )}
    </form>
  );
}
