'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Folasekemi, I would like to discuss a project.\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nDetails: ${formData.details}`;
    window.open(`https://wa.me/2348101154261?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: '', details: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Tell me about your project and let&apos;s discuss how I can help bring your vision to life.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none cursor-pointer"
              >
                <option value="">Select a project type</option>
                <option value="book">Book / Novel Ghostwriting</option>
                <option value="blog">Blog Posts & Articles</option>
                <option value="website">Website Copy</option>
                <option value="email">Email Marketing</option>
                <option value="social">Social Media Content</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Project Details
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {submitted ? 'Message Received! 🎉' : "Let's Write Your Next Project"}
              </Button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-accent/10 border border-accent rounded-lg text-center text-accent">
                <p className="font-medium">Thank you! I&apos;ll be in touch within 24 hours.</p>
              </div>
            )}
          </form>

          {/* Additional Info */}
          <div className="border-t border-border pt-12 text-center space-y-4">
            <p className="text-foreground/70">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-foreground/70">
              <a href="mailto:greatfolasekemi@gmail.com" className="hover:text-accent transition-colors">
                greatfolasekemi@gmail.com
              </a>
              <span className="hidden md:block">•</span>
              <a href="https://wa.me/2348101154261" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                WhatsApp: +234 810 115 4261
              </a>
              <span className="hidden md:block">•</span>
              <a href="https://linkedin.com/in/folasekemi-bolanle-8a93523b4" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
