import React, { useState } from 'react';
import { BookOpen, Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Course } from '../types';

interface CoursesProps {
  courses: Course[];
  onOpenInquiry: (courseTitle?: string) => void;
}

export default function Courses({ courses, onOpenInquiry }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Dynamically extract categories for filtering tabs
  const categories = ['All', 'SSC Exams', 'Teacher Exams', 'State Exams', 'Foundation'];

  const filteredCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory || (activeCategory === 'Foundation' && c.category === 'Foundation') || (activeCategory === 'State Exams' && c.category === 'Management')); // Grouping dynamically for simple tabs

  return (
    <section
      id="courses"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
            Syllabus & Batches
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Premium{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Coaching Programs
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-base">
            Expertly-curated curriculum sheets built to align directly with recent UPSC, SSC, and CTET commission updates. Select a batch to start.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-250 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-royal-700 to-royal-800 text-white shadow-md'
                  : 'bg-white/20 dark:bg-slate-900/40 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-white/20 dark:border-slate-800/20 hover:bg-white/30 dark:hover:bg-slate-900/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative glass-card rounded-3xl p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-350"
            >
              {/* Popular Batch badge */}
              {course.isPopular && (
                <div className="absolute top-4 right-4 inline-flex items-center space-x-1 bg-gradient-to-r from-orange-brand-500 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  <Sparkles size={10} className="animate-spin" />
                  <span>MOST POPULAR BATCH</span>
                </div>
              )}

              {/* Course Title and category */}
              <div>
                <span className="text-xs font-semibold text-royal-600 dark:text-royal-400 block mb-2 uppercase tracking-wide">
                  {course.category}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-royal-700 dark:group-hover:text-royal-300 transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Duration Placeholder row */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-6 bg-white/20 dark:bg-slate-950/20 border border-white/20 dark:border-slate-850/20 px-3 py-2 rounded-xl w-fit">
                  <Calendar size={14} className="text-orange-brand-500" />
                  <span>Duration: {course.duration}</span>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-slate-150 dark:border-slate-800 pt-5 mb-8">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-3 uppercase tracking-wider">
                    Syllabus Highlights:
                  </span>
                  <ul className="space-y-2.5">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Join Now Action */}
              <button
                id={`btn-join-course-${course.id}`}
                onClick={() => onOpenInquiry(course.title)}
                className="w-full py-3.5 rounded-2xl font-bold text-sm bg-royal-700/10 hover:bg-royal-700 text-royal-700 dark:text-royal-300 hover:text-white border border-royal-700/20 hover:border-transparent dark:bg-slate-800/30 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
