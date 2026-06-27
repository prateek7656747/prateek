import React, { useState } from 'react';
import { Award, UserCheck, Heart, Sparkles, BookOpen, Quote } from 'lucide-react';
import { Result } from '../types';

interface ResultsProps {
  results: Result[];
}

export default function Results({ results }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<'top' | 'list' | 'stories'>('top');

  const topPerformers = results.filter((r) => r.isTopPerformer);
  const otherSelected = results.filter((r) => !r.isTopPerformer);

  const stories = [
    {
      student: 'Amit Shrivas',
      role: 'Excise Inspector (SSC CGL 2025)',
      quote: 'Clearing SSC CGL on my second attempt was purely due to the systematic mock test syllabus at Bhadauriya Classes. Solving 150+ full-length tests helped me conquer the actual exam panic.',
    },
    {
      student: 'Kajal Mishra',
      role: 'CTET Topper (132 / 150 Marks)',
      quote: 'Bhadauriya Sir\'s Child Development & Pedagogy classes are simply matchless. He maps tricky theoretical parameters to practical real-world scenarios, making the exam super easy to clear.',
    },
    {
      student: 'Shivendra Bhadauriya',
      role: 'Sub-Inspector Selection (UP Police SI)',
      quote: 'The UP General Knowledge pamphlets and daily vocab practice provided at the Orai Surya Nagar branch gave me the ultimate edge in state level testing. Unparalleled teacher support!',
    }
  ];

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
            A Legacy of Excellence
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Proud Selection{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Results & Officers
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
            We celebrate the dedication and hard work of our students from Orai who successfully cracked government job exams to secure their future careers.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-800/20">
            <button
              onClick={() => setActiveTab('top')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'top'
                  ? 'bg-white/90 dark:bg-slate-800/90 text-royal-700 dark:text-royal-300 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Top Performers
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-white/90 dark:bg-slate-800/90 text-royal-700 dark:text-royal-300 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Selected Officers List
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'stories'
                  ? 'bg-white/90 dark:bg-slate-800/90 text-royal-700 dark:text-royal-300 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        {/* Tab 1 Content: Top Performers Grid */}
        {activeTab === 'top' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPerformers.map((perf) => (
              <div
                key={perf.id}
                className="group glass-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Topper Image with relative badge */}
                <div className="relative aspect-[4/3] bg-slate-200 dark:bg-slate-950 overflow-hidden">
                  <img
                    src={perf.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
                    alt={perf.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute rank label */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-brand-500 to-amber-500 text-white font-display font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                    {perf.rankPlaceholder || 'SELECTED'}
                  </div>
                </div>

                {/* Topper Meta */}
                <div className="p-6 space-y-3 relative">
                  <div className="absolute -top-7 right-6 p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-orange-brand-500 shadow-md">
                    <Award size={22} className="animate-pulse" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-royal-700 dark:text-royal-400 tracking-wider uppercase block">
                      {perf.examName} • {perf.year}
                    </span>
                    <h4 className="text-xl font-display font-extrabold text-slate-800 dark:text-white mt-1">
                      {perf.name}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Selected Post:</span>
                    <span className="font-bold text-slate-800 dark:text-orange-brand-400">
                      {perf.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2 Content: Selected Officers Table List */}
        {activeTab === 'list' && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center space-x-2.5 mb-6">
              <UserCheck className="text-royal-700 dark:text-royal-400" />
              <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-lg">
                Other Selections (Recent Years)
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Exam / Year</th>
                    <th className="py-3 px-4">Selection Department</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 dark:divide-slate-800 text-xs sm:text-sm">
                  {otherSelected.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-slate-400">
                        No additional officers listed yet. Update via Admin Dashboard!
                      </td>
                    </tr>
                  ) : (
                    otherSelected.map((student) => (
                      <tr
                        key={student.id}
                        className="hover:bg-white/50 dark:hover:bg-slate-950/20 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-bold text-slate-800 dark:text-slate-200">
                          {student.name}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                          {student.examName} ({student.year})
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-royal-700 dark:text-royal-300">
                          {student.achievement}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400">
                            QUALIFIED
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3 Content: Success Stories quotes */}
        {activeTab === 'stories' && (
          <div className="space-y-6">
            {stories.map((st, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 shadow-md relative overflow-hidden"
              >
                {/* Big decorative quote sign */}
                <div className="absolute top-4 right-4 text-slate-200 dark:text-slate-800 pointer-events-none">
                  <Quote size={50} className="opacity-40" />
                </div>

                <div className="p-3 bg-gradient-to-tr from-royal-700 to-royal-500 text-white rounded-2xl flex-shrink-0">
                  <Sparkles size={24} />
                </div>

                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-lg">
                      {st.student}
                    </h4>
                    <span className="block text-xs font-semibold text-orange-brand-500">
                      {st.role}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light italic">
                    "{st.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
