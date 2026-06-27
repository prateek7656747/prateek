/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, GraduationCap, ChevronUp } from 'lucide-react';

// Data Imports
import {
  INITIAL_COURSES,
  INITIAL_TESTIMONIALS,
  INITIAL_RESULTS,
  INITIAL_GALLERY,
  INITIAL_FAQS,
  INITIAL_YOUTUBE_VIDEOS,
} from './data/initialData';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import YouTubeLive from './components/YouTubeLive';
import WhyChooseUs from './components/WhyChooseUs';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQComponent from './components/FAQ';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

// Types
import { Course, FAQ, Result, GalleryItem, Inquiry, YouTubeVideo } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('bhadauriya_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  // Master States with LocalStorage Persistence
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('bhadauriya_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [testimonials] = useState<typeof INITIAL_TESTIMONIALS>(() => {
    return INITIAL_TESTIMONIALS;
  });

  const [results, setResults] = useState<Result[]>(() => {
    const saved = localStorage.getItem('bhadauriya_results');
    return saved ? JSON.parse(saved) : INITIAL_RESULTS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('bhadauriya_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [faqs, setFaqs] = useState<FAQ[]>(() => {
    const saved = localStorage.getItem('bhadauriya_faqs');
    return saved ? JSON.parse(saved) : INITIAL_FAQS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('bhadauriya_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  // Youtube Live Custom states
  const [isLive, setIsLive] = useState<boolean>(() => {
    const saved = localStorage.getItem('bhadauriya_is_live');
    return saved ? JSON.parse(saved) : false;
  });

  const [liveVideoId, setLiveVideoId] = useState<string>(() => {
    const saved = localStorage.getItem('bhadauriya_live_vid_id');
    return saved ? saved : '9_M0w4Gq6_8';
  });

  // Search & Navigation States
  const [selectedCourseForInquiry, setSelectedCourseForInquiry] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem('bhadauriya_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_results', JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_is_live', JSON.stringify(isLive));
  }, [isLive]);

  useEffect(() => {
    localStorage.setItem('bhadauriya_live_vid_id', liveVideoId);
  }, [liveVideoId]);

  // Dark Mode Sync
  useEffect(() => {
    localStorage.setItem('bhadauriya_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Entry Loader Duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scrollspy & Back-to-Top triggers
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      setShowScrollTop(window.scrollY > 400);

      // Determine active section
      const sections = [
        'home',
        'about',
        'courses',
        'live-classes',
        'why-choose-us',
        'results',
        'gallery',
        'faq',
        'contact',
      ];

      const scrollPos = window.scrollY + 120;

      for (let i = 0; i < sections.length; i++) {
        const currSec = sections[i];
        const el = document.getElementById(currSec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(currSec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Callback to log inquiries in State
  const handleAddInquiry = (newInq: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const formattedDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const createdInquiry: Inquiry = {
      ...newInq,
      id: `inq-${Date.now()}`,
      date: formattedDate,
      status: 'pending',
    };

    setInquiries((prev) => [createdInquiry, ...prev]);
  };

  const handleUpdateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const handleDeleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
  };

  // Administration modifications hooks
  const handleAddCourse = (c: Course) => setCourses((prev) => [c, ...prev]);
  const handleDeleteCourse = (id: string) => setCourses((prev) => prev.filter((c) => c.id !== id));

  const handleAddResult = (r: Result) => setResults((prev) => [r, ...prev]);
  const handleDeleteResult = (id: string) => setResults((prev) => prev.filter((r) => r.id !== id));

  const handleAddFAQ = (f: FAQ) => setFaqs((prev) => [f, ...prev]);
  const handleDeleteFAQ = (id: string) => setFaqs((prev) => prev.filter((f) => f.id !== id));

  const handleAddGallery = (g: GalleryItem) => setGallery((prev) => [g, ...prev]);
  const handleDeleteGallery = (id: string) => setGallery((prev) => prev.filter((g) => g.id !== id));

  const handleOpenInquiryWithCourse = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourseForInquiry(courseTitle);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 ${darkMode ? 'mesh-bg' : 'mesh-bg-light'}`}>
      
      {/* 1. PREMIUM BRAND ENTRY LOADER */}
      {loading && (
        <div
          id="app-loader"
          className="fixed inset-0 z-[200] bg-slate-900 flex flex-col items-center justify-center space-y-6"
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-royal-700 to-royal-500 shadow-2xl animate-pulse">
            <GraduationCap className="text-white w-10 h-10" />
            <div className="absolute inset-0 rounded-2xl border-2 border-orange-brand-500 animate-ping opacity-25" />
          </div>
          <div className="text-center space-y-1">
            <h2 className="text-xl font-display font-bold text-white tracking-wide">
              Bhadauriya Classes
            </h2>
            <p className="text-xs text-orange-brand-400 font-semibold tracking-widest uppercase">
              Orai • Sincere Selections
            </p>
          </div>
          {/* Glowing loader bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-royal-500 to-orange-brand-500 animate-shimmer" style={{ width: '60%' }} />
          </div>
        </div>
      )}

      {/* 2. HEADER NAVIGATION */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        courses={courses}
        faqs={faqs}
        results={results}
        onOpenInquiry={handleOpenInquiryWithCourse}
        activeSection={activeSection}
      />

      {/* 3. CORE LANDING SECTIONS */}
      <main className="relative">
        <Hero onOpenInquiry={handleOpenInquiryWithCourse} />
        <Features />
        <About />
        <Courses courses={courses} onOpenInquiry={handleOpenInquiryWithCourse} />
        
        <YouTubeLive
          initialVideos={INITIAL_YOUTUBE_VIDEOS}
          isLiveOverride={isLive}
          liveVideoId={liveVideoId}
        />
        
        <WhyChooseUs />
        <Results results={results} />
        <Testimonials testimonials={testimonials} />
        <Gallery galleryItems={gallery} />
        <FAQComponent faqs={faqs} />
        
        <Contact
          onAddInquiry={handleAddInquiry}
          selectedCourseForInquiry={selectedCourseForInquiry}
        />
      </main>

      {/* 4. FOOTER CREDENTIALS */}
      <Footer courses={courses} />

      {/* 5. SECURE CONTENT ADMINISTRATION PANEL */}
      <AdminPanel
        inquiries={inquiries}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
        onDeleteInquiry={handleDeleteInquiry}
        courses={courses}
        onAddCourse={handleAddCourse}
        onDeleteCourse={handleDeleteCourse}
        results={results}
        onAddResult={handleAddResult}
        onDeleteResult={handleDeleteResult}
        faqs={faqs}
        onAddFAQ={handleAddFAQ}
        onDeleteFAQ={handleDeleteFAQ}
        gallery={gallery}
        onAddGallery={handleAddGallery}
        onDeleteGallery={handleDeleteGallery}
        isLive={isLive}
        setIsLive={setIsLive}
        liveVideoId={liveVideoId}
        setLiveVideoId={setLiveVideoId}
      />

      {/* 6. STICKY UTILITIES BAR (Call, WhatsApp, Top Scroll) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Floating Call */}
        <a
          id="sticky-phone-widget"
          href="tel:+919161932403"
          className="p-3.5 rounded-full bg-royal-700 hover:bg-royal-800 text-white shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer border border-royal-600/30"
          title="Call Bhadauriya Classes Helpdesk"
        >
          <Phone size={20} />
        </a>

        {/* Floating WhatsApp */}
        <a
          id="sticky-whatsapp-widget"
          href="https://wa.me/919161932403?text=Hi%20Bhadauriya%20Classes,%20I%20have%20an%20admission%20inquiry."
          target="_blank"
          rel="noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer border border-emerald-500/30 animate-pulse-slow"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={20} className="fill-white/10" />
        </a>

        {/* Floating Scroll to Top */}
        {showScrollTop && (
          <button
            id="sticky-back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 shadow-xl border border-slate-200/50 dark:border-slate-800 flex items-center justify-center cursor-pointer"
            title="Scroll to Top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
