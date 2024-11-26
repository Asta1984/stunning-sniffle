import React from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  Rocket 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/moonex", 
      label: "Twitter" 
    },
    { 
      icon: Github, 
      href: "https://github.com/moonex", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/moonex", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:contact@moonex.com", 
      label: "Email" 
    }
  ];

  const footerLinks = [
    { title: "Product", links: ["Features", "Pricing", "Roadmap"] },
    { title: "Resources", links: ["Docs", "Blog", "Community"] },
    { title: "Company", links: ["About", "Careers", "Contact"] }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Rocket className="w-10 h-10 text-yellow-400" />
            <span className="text-2xl font-bold text-white">MoonEX</span>
          </div>
          <p className="text-gray-400">
            Revolutionizing crypto trading with secure, efficient multi-chain solutions.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
          <div className="flex space-x-2 mb-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
              className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">
            Subscribe to get the latest news and updates from MoonEX.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} MoonEX. All rights reserved. 
          <span className="ml-4 hidden md:inline">
            Secure, Transparent, Innovative Crypto Trading
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;