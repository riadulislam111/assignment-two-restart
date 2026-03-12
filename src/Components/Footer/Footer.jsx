import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold">CS — Ticket System</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              CS Ticket System is a comprehensive platform designed to streamline your support operations. Spend less time on the backend's organized workflows and more time solving customer issues. Streamlined to make it easy for support teams.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Customer Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Automation Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Integration APIs
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Social Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Twitter size={16} className="text-gray-400" />
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-gray-400" />
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:support@cs.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  support@cs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;