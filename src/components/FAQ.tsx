import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { FAQ } from '../types';

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQComponent({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
            Have Questions?
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Questions
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
            Everything you need to know about admissions, exam schedules, course materials, and offline classrooms at Bhadauriya Classes.
          </p>
        </div>

        {/* FAQs Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((f) => {
            const isOpen = openId === f.id;
            return (
              <div
                key={f.id}
                className={`rounded-3xl overflow-hidden transition-all duration-300 glass-card ${
                  isOpen
                    ? 'shadow-md ring-2 ring-royal-500/10'
                    : 'hover:bg-white/30 dark:hover:bg-slate-900/60'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(f.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-orange-brand-100 dark:bg-orange-brand-950/40 text-orange-brand-500'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      <HelpCircle size={16} />
                    </div>
                    <span className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-snug">
                      {f.question}
                    </span>
                  </div>

                  <div>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-royal-700 dark:text-royal-400" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Body */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-80 border-t border-slate-150 dark:border-slate-800' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                    {f.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Help Card helper */}
        <div className="mt-12 p-6 glass-card rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-3 bg-royal-100 dark:bg-royal-950/40 text-royal-700 dark:text-royal-300 rounded-2xl hidden sm:block">
              <BookOpen size={20} />
            </div>
            <div>
              <h5 className="font-display font-extrabold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                Still have unanswered doubts?
              </h5>
              <p className="text-xs text-slate-400">Our offline helpdesk in Orai is open from 8:00 AM to 6:00 PM.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-royal-700 to-royal-800 hover:from-royal-800 hover:to-royal-950 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Visit Contact Center
          </a>
        </div>
      </div>
    </section>
  );
}
