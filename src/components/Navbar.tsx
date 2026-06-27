import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, Phone, MessageSquare, BookOpen, HelpCircle, Award } from 'lucide-react';
import { Course, FAQ, Result } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  courses: Course[];
  faqs: FAQ[];
  results: Result[];
  onOpenInquiry: (courseTitle?: string) => void;
  activeSection: string;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  courses,
  faqs,
  results,
  onOpenInquiry,
  activeSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    courses: Course[];
    faqs: FAQ[];
    results: Result[];
  }>({ courses: [], faqs: [], results: [] });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter content on search query change
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ courses: [], faqs: [], results: [] });
      return;
    }

    const q = searchQuery.toLowerCase();
    const matchedCourses = courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );

    const matchedFaqs = faqs.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );

    const matchedResults = results.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.examName.toLowerCase().includes(q) ||
        r.achievement.toLowerCase().includes(q)
    );

    setSearchResults({
      courses: matchedCourses,
      faqs: matchedFaqs,
      results: matchedResults,
    });
  }, [searchQuery, courses, faqs, results]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Live Classes', href: '#live-classes' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Results', href: '#results' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const hasResults =
    searchResults.courses.length > 0 ||
    searchResults.faqs.length > 0 ||
    searchResults.results.length > 0;

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-navbar shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-royal-700 to-royal-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-display font-bold text-lg">B</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-brand-500 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-brand-500 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-royal-700 dark:text-royal-100 leading-tight">
                  Bhadauriya
                </span>
                <span className="text-xs font-sans tracking-widest text-orange-brand-500 font-bold uppercase leading-none">
                  Classes • Orai
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-orange-brand-500 focus:outline-none ${
                    activeSection === link.href.slice(1)
                      ? 'text-orange-brand-500 font-semibold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-brand-500 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Icons & Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Search Toggle */}
              <button
                id="btn-search-toggle"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-500 hover:text-royal-700 dark:text-slate-300 dark:hover:text-royal-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Search"
              >
                <Search size={20} />
              </button>

              {/* Theme Toggle */}
              <button
                id="btn-theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-slate-500 hover:text-royal-700 dark:text-slate-300 dark:hover:text-royal-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Toggle Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Inquiry CTA */}
              <button
                id="btn-header-enroll"
                onClick={() => onOpenInquiry()}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-royal-700 to-royal-800 hover:from-royal-800 hover:to-royal-950 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                id="btn-search-mobile-toggle"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-500 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Search size={20} />
              </button>

              <button
                id="btn-theme-mobile-toggle"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-slate-500 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-drawer"
          className={`fixed inset-y-0 right-0 w-72 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border-l border-white/20 dark:border-slate-800/30 transform transition-transform duration-350 ease-out lg:hidden flex flex-col justify-between ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between p-4 border-b border-slate-150 dark:border-slate-800">
              <span className="font-display font-bold text-royal-700 dark:text-royal-100">Navigation</span>
              <button
                id="btn-close-mobile-drawer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            <div className="py-4 px-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-royal-50 dark:bg-royal-950/40 text-royal-700 dark:text-royal-300'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-slate-150 dark:border-slate-800 space-y-3">
            <button
              id="btn-mobile-enroll"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-royal-700 to-royal-800 flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Enroll Now</span>
            </button>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
              <span>📍 Surya Nagar, Orai</span>
              <span>📞 +91 91619 32403</span>
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH OVERLAY MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Search Input bar */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="text-slate-400" size={22} />
                <input
                  id="search-input-field"
                  type="text"
                  placeholder="Search courses, results, topics, or FAQs..."
                  className="w-full bg-transparent border-none text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                id="btn-close-search"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Results Pane */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {!searchQuery.trim() ? (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500 flex flex-col items-center">
                  <Search size={32} className="mb-2 text-slate-300" />
                  <p>Type a search query to search across the institute website</p>
                  <p className="text-xs mt-1">Try "SSC", "CTET", "Orai", "Demo", or "Syllabus"</p>
                </div>
              ) : !hasResults ? (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                  <p>No results found for "{searchQuery}"</p>
                  <p className="text-xs mt-1">Check the spelling or try alternative keywords</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Courses matched */}
                  {searchResults.courses.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-orange-brand-500 tracking-wider uppercase mb-2 flex items-center">
                        <BookOpen size={14} className="mr-1" /> Courses
                      </h4>
                      <div className="space-y-2">
                        {searchResults.courses.map((c) => (
                          <div
                            key={c.id}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                              handleLinkClick('#courses');
                            }}
                            className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 cursor-pointer transition-all"
                          >
                            <h5 className="font-semibold text-slate-800 dark:text-slate-200">{c.title}</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {c.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQ matched */}
                  {searchResults.faqs.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-orange-brand-500 tracking-wider uppercase mb-2 flex items-center">
                        <HelpCircle size={14} className="mr-1" /> FAQs
                      </h4>
                      <div className="space-y-2">
                        {searchResults.faqs.map((f) => (
                          <div
                            key={f.id}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                              handleLinkClick('#faq');
                            }}
                            className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 cursor-pointer transition-all"
                          >
                            <h5 className="font-semibold text-slate-800 dark:text-slate-200">{f.question}</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {f.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Results matched */}
                  {searchResults.results.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-orange-brand-500 tracking-wider uppercase mb-2 flex items-center">
                        <Award size={14} className="mr-1" /> Toppers & Results
                      </h4>
                      <div className="space-y-2">
                        {searchResults.results.map((r) => (
                          <div
                            key={r.id}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                              handleLinkClick('#results');
                            }}
                            className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 cursor-pointer transition-all"
                          >
                            <h5 className="font-semibold text-slate-800 dark:text-slate-200">
                              {r.name} - <span className="text-royal-500">{r.achievement}</span>
                            </h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {r.examName} • {r.rankPlaceholder}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
