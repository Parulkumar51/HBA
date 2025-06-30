import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Architectural Design',
      '3D Visualization',
      'Interior Design',
      'Master Planning',
      'Sustainable Design',
      'Project Management'
    ],
    projects: [
      'Residential',
      'Commercial',
      'Hospitality',
      'Institutional',
      'Urban Planning',
      'Renovations'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Awards',
      'News & Insights',
      'Contact'
    ],
    resources: [
      'Portfolio',
      '3D Viewer',
      'Configurator',
      'Case Studies',
      'Design Process',
      'FAQ'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'www.fb.com', label: 'Facebook' },
    { icon: Twitter, href: 'www.twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'www.instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'www.linkdin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'www.youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Newsletter Section */}
      <motion.div
        className="border-b border-zinc-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light mb-4">Stay Inspired</h3>
              <p className="text-zinc-400 text-lg">
                Get the latest architectural insights, project updates, and design trends 
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-zinc-400"
              />
              <motion.button
                className="bg-amber-400 hover:bg-amber-500 text-zinc-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="w-8 h-8 text-amber-400" />
              </motion.div>
              <span className="text-2xl font-light tracking-wider">HBA STUDIO</span>
            </div>
            
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Award-winning architectural firm specializing in innovative design, 
              3D visualization, and sustainable solutions. Creating extraordinary 
              spaces that inspire and endure.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-zinc-300">hello@hbastudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-zinc-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-zinc-300">123 Design Street, New York, NY</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-zinc-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-zinc-400 text-sm">
                © {currentYear} HBA Studio. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-zinc-800 hover:bg-amber-400 text-zinc-400 hover:text-zinc-900 p-2 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;