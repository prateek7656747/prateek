import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-royal-100/10 dark:bg-royal-950/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <h2 className="text-xs font-bold text-royal-700 dark:text-royal-300 tracking-widest uppercase">
              Google Rating 4.8★
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Our Students Say
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
              Read real feedback and reviews shared by our successful aspirants from Orai who cleared SSC, CTET, and state-level competitive examinations.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/20 dark:bg-slate-900/35 backdrop-blur-md border border-white/20 dark:border-slate-850/25 text-slate-600 dark:text-slate-300 hover:text-royal-700 dark:hover:text-royal-300 hover:shadow-md transition-all cursor-pointer focus:outline-none"
              title="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/20 dark:bg-slate-900/35 backdrop-blur-md border border-white/20 dark:border-slate-850/25 text-slate-600 dark:text-slate-300 hover:text-royal-700 dark:hover:text-royal-300 hover:shadow-md transition-all cursor-pointer focus:outline-none"
              title="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Main Slider Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl shadow-xl relative">
          {/* Quote sign decoration */}
          <div className="absolute top-6 right-8 text-royal-100/50 dark:text-slate-850 pointer-events-none">
            <Quote size={80} className="stroke-[1]" />
          </div>

          {/* Left Block: Single Slider Display */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stars rating */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={18}
                  className={`fill-amber-500 ${
                    idx < testimonials[activeIndex].rating ? 'text-amber-500' : 'text-slate-200'
                  }`}
                />
              ))}
              <span className="text-xs font-semibold text-slate-400 ml-2">Verified Review</span>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-light italic">
              "{testimonials[activeIndex].review}"
            </blockquote>

            {/* Student Metadata */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-royal-700 to-royal-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md">
                {testimonials[activeIndex].name[0]}
              </div>
              <div>
                <span className="block font-display font-bold text-slate-800 dark:text-white text-base">
                  {testimonials[activeIndex].name}
                </span>
                <span className="block text-xs font-semibold text-orange-brand-500">
                  {testimonials[activeIndex].exam}
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Google reviews Trust indicators */}
          <div className="lg:col-span-5 bg-slate-50/40 dark:bg-slate-950/20 p-6 rounded-2xl border border-white/10 dark:border-slate-800/20 space-y-5">
            <div className="flex items-center space-x-2">
              <MessageSquare className="text-orange-brand-500" size={20} />
              <h4 className="font-display font-extrabold text-slate-800 dark:text-slate-200 text-sm">
                Orai Google Reviews Feed
              </h4>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200/50 dark:border-slate-800 pb-2">
                <span>Google Maps Profile</span>
                <span className="text-emerald-500 font-bold">● Live Sync Ready</span>
              </div>

              {/* Mini Static ratings */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Overall Rating</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white">4.8★ (92 reviews)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Classroom Ambience</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white">4.9★</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Faculty Satisfaction</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white">5.0★</span>
              </div>
            </div>

            {/* Google review direct link */}
            <div className="pt-2 text-center">
              <a
                href="https://youtube.com/@bhadauriya_classes"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:text-royal-700 transition-colors"
              >
                Write a Google Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
