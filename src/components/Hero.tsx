import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, Award, Star, Users } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (courseTitle?: string) => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const [counts, setCounts] = useState({
    students: 0,
    selections: 0,
    rate: 0,
    rating: 0,
  });

  useEffect(() => {
    // Smooth increment animation for statistics
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        students: Math.min(Math.floor((5000 / steps) * step), 5000),
        selections: Math.min(Math.floor((450 / steps) * step), 450),
        rate: Math.min(Math.floor((94 / steps) * step), 94),
        rating: Number(Math.min((4.8 / steps) * step, 4.8).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-transparent transition-colors duration-300"
    >
      {/* Background blobs & patterns */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-royal-200/20 dark:bg-royal-950/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-orange-brand-200/10 dark:bg-orange-brand-950/10 blur-3xl" />
        <div className="absolute -top-10 left-1/3 w-96 h-96 rounded-full bg-blue-100/10 dark:bg-blue-900/10 blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f4c810a_1px,transparent_1px),linear-gradient(to_bottom,#0f4c810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-royal-100/80 dark:bg-royal-950/40 border border-royal-200/30 dark:border-royal-800/30 px-3 py-1.5 rounded-full shadow-sm hover:scale-102 transition-transform">
              <Sparkles className="text-orange-brand-500 w-4 h-4 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-royal-800 dark:text-royal-200">
                ⭐ Top Coaching Institute in Orai
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Build Your Government <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
                Career
              </span>{' '}
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand-500 to-orange-brand-400 font-extrabold">
                Bhadauriya Classes
              </span>
            </h1>

            {/* Sub Heading features bullet layout */}
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Expert Faculty • Regular Mock Tests • Updated Study Material • Personal Guidance • Result Oriented Coaching
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="btn-hero-enroll"
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-royal-700 to-royal-800 hover:from-royal-800 hover:to-royal-950 shadow-lg shadow-royal-700/20 hover:shadow-xl hover:shadow-royal-700/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center cursor-pointer"
              >
                Enroll Now
              </button>

              <a
                id="btn-hero-call"
                href="tel:+919161932403"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-royal-700 dark:text-royal-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={18} className="text-orange-brand-500" />
                <span>Call Now</span>
              </a>

              <a
                id="btn-hero-whatsapp"
                href="https://wa.me/919161932403?text=Hi%20Bhadauriya%20Classes,%20I%20am%20interested%20in%20enrolling%20for%20competitive%20exam%20coaching."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} className="text-emerald-500 fill-emerald-500/20" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Quick trust badge */}
            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Offline Admissions Open for 2026 Batch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element / Feature Highlight card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Decorative behind elements */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-orange-brand-500 to-royal-700 opacity-20 blur-xl animate-pulse" />

              {/* Main premium visual card */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-orange-brand-100 dark:bg-orange-brand-950/40 text-orange-brand-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">GOVT EXAM HUB</span>
                      <span className="font-display font-bold text-slate-800 dark:text-white">Bhadauriya Classes</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-lg text-xs font-bold">
                    <Star size={14} className="fill-amber-500" />
                    <span>{counts.rating}★ (Google)</span>
                  </div>
                </div>

                {/* Main Feature List on Card */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-royal-50/40 dark:bg-royal-950/15 border border-royal-100/50 dark:border-royal-900/10 flex items-start space-x-3">
                    <div className="p-1.5 rounded-lg bg-royal-100 dark:bg-royal-900/50 text-royal-700 dark:text-royal-300 mt-0.5">
                      <Users size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Personalized Mentorship</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Regular doubt clearing & custom strategy directly under Bhadauriya Sir.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-brand-50/40 dark:bg-orange-brand-950/10 border border-orange-brand-100/50 dark:border-orange-brand-900/10 flex items-start space-x-3">
                    <div className="p-1.5 rounded-lg bg-orange-brand-100 dark:bg-orange-brand-900/50 text-orange-brand-500 dark:text-orange-brand-400 mt-0.5">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Unmatched Selection Track</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Proven result structures in SSC, CTET & State level One Day Exams.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 flex items-start space-x-3">
                    <div className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mt-0.5">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Daily Class & Revision Schedule</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Daily 3 hours class with weekly practice worksheets and speed tests.</p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Floating Tag */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-brand-400/10 rounded-full blur-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Statistics Block */}
        <div className="mt-16 lg:mt-24 glass-card rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {/* Stat 1 */}
            <div className="text-center md:px-4">
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-royal-700 dark:text-royal-300">
                {counts.students.toLocaleString()}+
              </span>
              <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Students Coached
              </span>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:px-4 pt-4 sm:pt-0">
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-orange-brand-500">
                {counts.selections}+
              </span>
              <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Selected Officers & Jobs
              </span>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:px-4 pt-4 sm:pt-0">
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-royal-700 dark:text-royal-300">
                {counts.rate}%
              </span>
              <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Success Rate Match
              </span>
            </div>

            {/* Stat 4 */}
            <div className="text-center md:px-4 pt-4 sm:pt-0">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-amber-500">
                  {counts.rating}
                </span>
                <Star className="fill-amber-500 text-amber-500 w-6 h-6" />
              </div>
              <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Google Rating (Orai Branch)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
