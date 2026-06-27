import React from 'react';
import { BookOpen, RefreshCw, GraduationCap, IndianRupee, Compass, Target, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Quality Teaching',
      desc: 'Our lectures break down difficult concepts into simple, visual parts. Mathematics, Child Pedagogy, and English are explained in clear, native Hindi-English patterns.',
      icon: BookOpen,
      bg: 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Regular Practice',
      desc: 'We solve hundreds of previous-years questions directly in class. Daily Practice Problem sheets (DPPs) and weekly tests ensure you retain what you learn.',
      icon: RefreshCw,
      bg: 'bg-orange-brand-50 dark:bg-orange-brand-950/20 text-orange-brand-500 dark:text-orange-brand-400',
    },
    {
      title: 'Experienced Teachers',
      desc: 'Our faculty members are highly specialized. They understand exact exam dynamics, syllabus modifications, and scoring trends.',
      icon: GraduationCap,
      bg: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'Affordable Education',
      desc: 'We believe premium competitive exam coaching should be accessible to all. We provide highly competitive and fair fee structures with installment facilities.',
      icon: IndianRupee,
      bg: 'bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Personal Guidance',
      desc: 'Stuck on a calculation? Get personalized help. We schedule dedicated face-to-face mentorship intervals to track individual progress and clear doubts.',
      icon: Compass,
      bg: 'bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400',
    },
    {
      title: 'Exam Strategy',
      desc: 'Learn time management hacks, smart elimination strategies, and accuracy drills to optimize your score inside the examination hall.',
      icon: Target,
      bg: 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400',
    },
    {
      title: 'Motivation Sessions',
      desc: 'Competitive prep is a long journey. We conduct regular motivational workshops, group discussions, and interactive topper panels to keep your energy high.',
      icon: Sparkles,
      bg: 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative backdrop elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-royal-100/10 dark:bg-royal-950/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Visual Brand Headline */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
              Our Core Identity
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              Why Students in Orai Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
                Bhadauriya Classes
              </span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">
              We stand apart through our unique blend of simplified teaching methodology, strict academic discipline, regular physical evaluation sheets, and empathetic student support.
            </p>
            <div className="pt-4 hidden lg:block">
              <div className="p-5 rounded-2xl glass-card">
                <span className="text-xs font-semibold text-royal-700 dark:text-royal-400 block mb-1">
                  💡 PROVEN PEDAGOGY
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  Our classroom structure follows a "Concept-drill-test-refine" feedback loop, producing top results in Orai.
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Animated cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p, index) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-card hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Round icon background */}
                      <div className={`p-3 rounded-xl ${p.bg} flex-shrink-0`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 text-base">
                          {p.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                          {p.desc}
                        </p>
                      </div>
                    </div>
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
