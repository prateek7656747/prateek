import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Award, Clock } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactProps {
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  selectedCourseForInquiry: string;
}

export default function Contact({ onAddInquiry, selectedCourseForInquiry }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourseForInquiry || 'SSC CGL Special Batch',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync selected course from header or course card triggers
  React.useEffect(() => {
    if (selectedCourseForInquiry) {
      setFormData((prev) => ({ ...prev, course: selectedCourseForInquiry }));
    }
  }, [selectedCourseForInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and active mobile number.');
      return;
    }

    setLoading(true);

    // Simulate database write
    setTimeout(() => {
      onAddInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message,
      });

      setLoading(false);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'SSC CGL Special Batch',
        message: '',
      });

      // Clear success alert after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const coursesList = [
    'SSC CGL Special Batch',
    'CTET (Paper I & II)',
    'SSC CHSL / MTS / GD',
    'CAT / Quantitative Aptitude',
    'UP Police & One Day Exams',
    'Government Exam Foundation'
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-royal-700 dark:text-royal-300 tracking-widest uppercase">
            Let's Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Visit Our Campus or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand-500 to-orange-brand-400">
              Get in Touch
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
            Ready to secure your future government job? Submit an inquiry, call us, or visit our modern Orai classroom facility for personal consultations.
          </p>
        </div>

        {/* Contact info grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Info Block Column */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="space-y-6 sm:space-y-8">
              <div className="border-b border-slate-150 dark:border-slate-800 pb-4">
                <span className="text-xs font-bold text-orange-brand-500 block mb-1">OFFICIAL HELP DESK</span>
                <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-lg">Contact Credentials</h4>
              </div>

              {/* Detail list */}
              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="p-3 rounded-xl bg-royal-100/50 dark:bg-royal-950/40 text-royal-700 dark:text-royal-300 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Physical Address:</h5>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-0.5">
                      Band Wali Gali, Near Machhar Chauraha,<br />
                      Surya Nagar, Orai, Uttar Pradesh - 285001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-3 rounded-xl bg-orange-brand-50 dark:bg-orange-brand-950/25 text-orange-brand-500 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Calling Number:</h5>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-0.5">
                      +91 91619 32403
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Email Address:</h5>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-0.5">
                      contact@bhadauriyaclasses.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Working Hours:</h5>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-0.5">
                      Monday - Saturday: 8:00 AM - 6:00 PM <br />
                      Sunday: Reserved for Special Mock Tests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky contact CTA trigger box */}
            <div className="mt-8 pt-5 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between gap-2.5">
              <a
                href="tel:+919161932403"
                className="flex-1 py-3 px-4 rounded-xl border border-royal-200 text-royal-700 dark:text-royal-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 font-bold text-xs sm:text-sm text-center shadow-sm"
              >
                Direct Call
              </a>
              <a
                href="https://wa.me/919161932403?text=Hi%20Bhadauriya%20Classes,%20I%20have%20an%20admission%20question."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center space-x-1.5 shadow-md"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 shadow-xl relative">
            <div className="border-b border-slate-150 dark:border-slate-800 pb-4 mb-6">
              <span className="text-xs font-bold text-royal-700 dark:text-royal-300 block mb-1">ONLINE REGISTRATION</span>
              <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-lg">Admission Inquiry Form</h4>
            </div>

            {/* Form Success Banner */}
            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-sm">Inquiry Logged Successfully!</h5>
                  <p className="text-xs mt-0.5 font-light">
                    Thank you. Your inquiry for <strong>{formData.course || 'the course'}</strong> has been registered. Our admin team in Orai will call you shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-name" className="text-xs font-bold text-slate-600 dark:text-slate-350 uppercase tracking-wide">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    placeholder="Enter student name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-royal-500 focus:bg-white focus:outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-phone" className="text-xs font-bold text-slate-600 dark:text-slate-350 uppercase tracking-wide">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    placeholder="e.g. +91 91619 32403"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-royal-500 focus:bg-white focus:outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-email" className="text-xs font-bold text-slate-600 dark:text-slate-350 uppercase tracking-wide">
                    Email Address (Optional)
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    placeholder="e.g. student@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-royal-500 focus:bg-white focus:outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-course" className="text-xs font-bold text-slate-600 dark:text-slate-350 uppercase tracking-wide">
                    Target Examination / Batch
                  </label>
                  <select
                    id="inquiry-course"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-royal-500 focus:bg-white focus:outline-none transition-all cursor-pointer"
                    value={formData.course}
                    onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                  >
                    {coursesList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="inquiry-msg" className="text-xs font-bold text-slate-600 dark:text-slate-350 uppercase tracking-wide">
                  Your Question / Query Details (Optional)
                </label>
                <textarea
                  id="inquiry-msg"
                  rows={4}
                  placeholder="Tell us about your previous preparation or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-royal-500 focus:bg-white focus:outline-none transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                />
              </div>

              {/* Submit CTA */}
              <button
                id="btn-inquiry-submit"
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-royal-700 to-royal-800 hover:from-royal-800 hover:to-royal-950 text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <span>Saving details...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Admission Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAP EMBED CONTAINER */}
        <div className="glass-card rounded-3xl overflow-hidden shadow-xl p-5">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="text-orange-brand-400" size={18} />
            <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
              Orai Branch Route Map (Surya Nagar, India)
            </h4>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            <iframe
              id="google-maps-embed-iframe"
              src="https://maps.google.com/maps?q=Surya%20Nagar,%20Orai,%20Uttar%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Bhadauriya Classes Orai Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
