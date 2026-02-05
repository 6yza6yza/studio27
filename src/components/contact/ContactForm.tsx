"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-bg-secondary)] p-8 text-center md:p-12">
        <h3 className="font-display text-2xl text-[var(--color-text-primary)]">
          Thank you for reaching out
        </h3>
        <p className="mt-4 font-body text-sm text-[var(--color-text-secondary)]">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
        >
          <option value="">Select a project type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="cafe-restaurant">Café & Restaurant</option>
          <option value="office">Office</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full resize-none border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 font-body text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
