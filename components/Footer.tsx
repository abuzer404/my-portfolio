
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon, LinkedInIcon, TelegramIcon } from './ui/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-cyan-400/20 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110" aria-label="GitHub Profile">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110" aria-label="LinkedIn Profile">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110" aria-label="Telegram">
            <TelegramIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Abuzer Nasir Shafi. All Rights Reserved.</p>
        <p className="text-xs mt-2">Built with React, Tailwind CSS, and a touch of cosmic energy ✨</p>
      </div>
    </footer>
  );
};

export default Footer;