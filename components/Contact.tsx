import React, { useState } from 'react';
import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, TelegramIcon, EmailIcon, PhoneIcon, LocationIcon } from './ui/SocialIcons';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    setStatus('Sending...');
    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <Section id="contact" className="bg-black/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </div>
      <GlassCard className="!p-8 md:!p-12 !border-cyan-400/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm currently open to new opportunities. Feel free to send a message using the form or connect with me.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4">
                  <EmailIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                      {CONTACT_INFO.email}
                  </a>
              </li>
              <li className="flex items-center gap-4">
                  <PhoneIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                      {CONTACT_INFO.phone}
                  </a>
              </li>
              <li className="flex items-center gap-4">
                  <LocationIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </li>
            </ul>

            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" aria-label="GitHub Profile">
                <GitHubIcon className="w-8 h-8" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" aria-label="LinkedIn Profile">
                <LinkedInIcon className="w-8 h-8" />
              </a>
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" aria-label="Telegram">
                <TelegramIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-black/30 border-2 border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-black/30 border-2 border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full bg-black/30 border-2 border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">{status}</p>
              <button type="submit" className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </GlassCard>
    </Section>
  );
};

export default Contact;