'use client';

import { useState } from 'react';
import { buttonClasses, inputClasses, headingClasses, textClasses, cardClasses } from '@/utils/telegram';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 pb-16 space-y-6">
      <div>
        <h1 className={headingClasses.h1}>Contact Us</h1>
        <p className={textClasses.secondary}>
          Have a question? Send us a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'email', 'subject'].map((field) => (
          <div key={field}>
            <label 
              htmlFor={field} 
              className={`block ${textClasses.small} mb-1.5 capitalize`}
            >
              {field}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}
        
        <div>
          <label htmlFor="message" className={`block ${textClasses.small} mb-1.5`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={`${inputClasses} resize-none min-h-[100px]`}
            placeholder="Type your message here"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonClasses}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {formStatus === 'success' && (
          <div className="text-center text-[#34C759] text-sm mt-4">
            Message sent successfully!
          </div>
        )}
        {formStatus === 'error' && (
          <div className="text-center text-[#FF3B30] text-sm mt-4">
            Failed to send message. Please try again.
          </div>
        )}
      </form>

      <div className="space-y-3">
        {contactInfo.map((item) => (
          <div
            key={item.title}
            className={`${cardClasses} flex items-center space-x-3`}
          >
            <div className="text-[#007AFF]">
              {item.icon}
            </div>
            <div>
              <h3 className={`${textClasses.base} font-medium`}>{item.title}</h3>
              <p className={textClasses.secondary}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const contactInfo = [
  {
    title: "Email",
    content: "contact@myapp.com",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Location",
    content: "123 Innovation Street, Tech City, TC 12345",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]; 