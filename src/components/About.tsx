import React from 'react';
import { ShieldCheck, BookOpen, Clock, HeartHandshake, CheckCircle } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Quality Teaching First',
      desc: 'Our classes focus on clearing school-level basics before moving on to competitive difficulty, using intuitive Hindi-English explanations.',
      icon: BookOpen,
    },
    {
      title: 'Disciplined Practice',
      desc: 'Through weekly revision booklets and speed drills, we build the muscle memory required to solve questions in seconds.',
      icon: Clock,
    },
    {
      title: 'Student-Focused Guidance',
      desc: 'We treat every student individually. We analyze report scores to assist those who need additional math or grammar coaching.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-orange-brand-200/5 dark:bg-orange-brand-950/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Beautiful Graphics/Details Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative behind glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-royal-700 to-orange-brand-500 opacity-15 blur-2xl" />

              {/* Main Premium Card */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 shadow-xl">
                <span className="text-xs font-bold text-orange-brand-500 tracking-wider uppercase block mb-1">
                  OUR MISSION STATEMENT
                </span>
                <h4 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-4">
                  Sincere Education, Sincere Selections.
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                  Bhadauriya Classes was founded in Orai to build a reliable, local platform for government competitive exam preparation. We bridge the gap between aspirants and actual selection requirements through rigorous focus and student-first planning.
                </p>

                {/* Checklist with beautiful counters */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-royal-600 dark:text-royal-400 w-5 h-5 flex-shrink-0" />
                    <span>Focus on SSC CGL, CTET, and One Day Exams</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-royal-600 dark:text-royal-400 w-5 h-5 flex-shrink-0" />
                    <span>Comprehensive syllabus-based teaching tracks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-royal-600 dark:text-royal-400 w-5 h-5 flex-shrink-0" />
                    <span>Comfortable offline classes situated in Orai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="text-royal-600 dark:text-royal-400 w-5 h-5 flex-shrink-0" />
                    <span>Authentic practice booklets & OMR testing</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="text-orange-brand-500 w-5 h-5" />
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      ISO & Google Certified Institute
                    </span>
                  </div>
                  <span className="text-xs text-royal-700 dark:text-royal-400 font-bold">Orai Branch • UP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-royal-700 dark:text-royal-300 tracking-widest uppercase">
                About Bhadauriya Classes
              </h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Empowering Aspirants in Orai to Achieve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand-500 to-orange-brand-400">
                  Government Career Goals
                </span>
              </h3>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              At Bhadauriya Classes, we understand that cracking a government examination requires more than just memorizing facts. It demands a structured study blueprint, daily self-evaluation, expert shortcut techniques, and constant motivational coaching.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We are dedicated to helping our students excel in SSC CGL, CTET, and state examinations by maintaining a highly competitive environment and providing comprehensive handouts that adapt to daily changing patterns.
            </p>

            {/* Teaching Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="inline-block p-2.5 rounded-xl bg-royal-100/50 dark:bg-royal-950/35 text-royal-700 dark:text-royal-300">
                      <Icon size={18} />
                    </div>
                    <h5 className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm">
                      {p.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
