import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050d14] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-6"
            >
              <span className="text-primary text-3xl">✦</span>
              BharatWorks
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              India’s Innovation Network for Builders, Founders & Creators.
              Organizing the startup ecosystem one connection at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Product</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  App Preview
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Download APK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Help Center & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Startup Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Creator Fund
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white font-bold mb-2 text-sm tracking-wide">
                Contact Us
              </h4>
              <a
                href="mailto:hello@bharatworks.app"
                className="text-accent hover:text-white transition-colors text-sm break-all"
              >
                hello@bharatworks.app
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} BharatWorks Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span>Made in India</span>
            <span>✦</span>
            <span>For the World</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
