import React from 'react';
import { MapPin, Phone, Mail, Youtube, MessageCircle, ArrowUp, Award, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface FooterProps {
  courses: Course[];
}

export default function Footer({ courses }: FooterProps) {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="bg-slate-900 text-slate-400 pt-16 pb-8 transition-colors duration-300 relative border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Social Description */}
          <div className="md:col-span-5 space-y-5">
            <a href="#home" className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-royal-700 to-royal-500 shadow-md">
                <span className="text-white font-display font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-white leading-tight">
                  Bhadauriya Classes
                </span>
                <span className="text-[10px] font-sans tracking-wider text-orange-brand-400 font-bold uppercase leading-none">
                  Orai • Uttar Pradesh
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Uttar Pradesh's premium education hub offering qualitative offline coaching classes for competitive examinations like SSC, CTET, CAT, and state One Day Exams. Sincere coaching for genuine careers.
            </p>

            {/* Social profiles and triggers */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                id="footer-social-yt"
                href="https://youtube.com/@bhadauriya_classes"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white transition-colors"
                title="Subscribe Youtube"
              >
                <Youtube size={18} />
              </a>
              <a
                id="footer-social-wa"
                href="https://wa.me/919161932403"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white transition-colors"
                title="Chat WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                id="footer-social-call"
                href="tel:+919161932403"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-royal-600 hover:text-white transition-colors"
                title="Call Helpdesk"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>Home Landing</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>About Institute</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>Course Syllabus</span>
                </a>
              </li>
              <li>
                <a
                  href="#live-classes"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>Digital Live Hub</span>
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>Success Officers</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-orange-brand-400 flex items-center space-x-1 transition-colors"
                >
                  <ArrowRight size={12} className="text-orange-brand-500" />
                  <span>Campus Gallery</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & google map Link */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Get In Touch
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-orange-brand-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Surya%20Nagar,%20Orai,%20Uttar%20Pradesh"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:underline leading-relaxed"
                >
                  Band Wali Gali, Near Machhar Chauraha, Surya Nagar, Orai, Uttar Pradesh - 285001
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-orange-brand-500 flex-shrink-0" />
                <a href="tel:+919161932403" className="hover:text-white hover:underline font-mono">
                  +91 91619 32403
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-orange-brand-500 flex-shrink-0" />
                <a href="mailto:contact@bhadauriyaclasses.com" className="hover:text-white hover:underline">
                  contact@bhadauriyaclasses.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-light text-center sm:text-left">
            © {currentYear} <strong>Bhadauriya Classes</strong>. All Rights Reserved. Styled for Excellence.
          </p>

          {/* Back to top button */}
          <button
            id="btn-footer-back-to-top"
            onClick={scrolltoTop}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-royal-700 transition-colors flex items-center space-x-1.5 focus:outline-none cursor-pointer"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
