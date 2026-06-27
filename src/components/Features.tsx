import React from 'react';
import {
  GraduationCap,
  ClipboardCheck,
  BookOpen,
  MessageSquare,
  Compass,
  Users,
  LineChart,
  Home,
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'Experienced Faculty',
      desc: 'Learn complex math and pedagogy shortcuts from teachers who possess over a decade of real competitive exam teaching knowledge.',
      icon: GraduationCap,
      color: 'from-blue-500 to-royal-600',
    },
    {
      title: 'Regular Mock Tests',
      desc: 'Simulated exam booklets and optical mark recognition (OMR) practice sheets executed every Saturday under strict real timing.',
      icon: ClipboardCheck,
      color: 'from-orange-brand-400 to-orange-brand-500',
    },
    {
      title: 'Updated Study Material',
      desc: 'Exclusive syllabus books and Daily Practice Problems (DPPs) tailored to match the latest government notification formats.',
      icon: BookOpen,
      color: 'from-royal-600 to-royal-800',
    },
    {
      title: 'Doubt Sessions',
      desc: 'Special daily hours reserved exclusively for individual, one-on-one doubt clarification directly with Bhadauriya Sir.',
      icon: MessageSquare,
      color: 'from-amber-500 to-orange-brand-500',
    },
    {
      title: 'Personal Guidance',
      desc: 'Receive constant mentoring on study strategy, custom study timetables, and physical criteria tracking.',
      icon: Compass,
      color: 'from-royal-500 to-blue-600',
    },
    {
      title: 'Small Batch Size',
      desc: 'We limit enrollment numbers per batch to ensure every single student receives direct teaching attention.',
      icon: Users,
      color: 'from-orange-brand-500 to-amber-600',
    },
    {
      title: 'Performance Analysis',
      desc: 'Comprehensive monthly report cards analyzing speed, syllabus coverage, weak subjects, and mock scores.',
      icon: LineChart,
      color: 'from-royal-700 to-royal-900',
    },
    {
      title: 'Offline Classroom Coaching',
      desc: 'Comfortable, quiet, and highly focused learning environment in the heart of Orai, Surya Nagar.',
      icon: Home,
      color: 'from-blue-600 to-royal-700',
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
            Our Key Offerings
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Designed to Fuel Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Selection Success
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-base">
            We provide structured tools and dedicated offline classroom tutoring to systematically transform students into successful government officers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuresList.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div
                key={i}
                className="group relative glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Colored Top Bar Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                {/* Card Icon */}
                <div className="mb-5 relative inline-block">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-md transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}>
                    <IconComponent size={22} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-20 blur-lg rounded-2xl scale-75 group-hover:scale-105 transition-all duration-300`} />
                </div>

                {/* Card Title & Description */}
                <h4 className="text-lg font-display font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-royal-700 dark:group-hover:text-royal-300 transition-colors">
                  {f.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {f.desc}
                </p>

                {/* Subtle Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-slate-200/20 dark:bg-slate-800/20 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
