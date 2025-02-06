'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="p-4">
      <header className="header mb-6">
        <h1 className="text-xl font-semibold">Contact</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="input resize-none"
            placeholder="Type your message"
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>

        {status === 'success' && (
          <p className="text-[#34C759] text-center text-sm">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-[#FF3B30] text-center text-sm">Failed to send message. Please try again.</p>
        )}
      </form>
    </main>
  );
} 