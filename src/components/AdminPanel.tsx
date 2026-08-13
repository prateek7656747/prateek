import React, { useState } from 'react';
import {
  Settings,
  Inbox,
  Youtube,
  Award,
  BookOpen,
  Image as ImageIcon,
  CheckCircle,
  Trash2,
  Plus,
  Lock,
  X,
  Tv,
  HelpCircle
} from 'lucide-react';
import { Course, FAQ, Result, GalleryItem, Inquiry, YouTubeVideo } from '../types';

interface AdminPanelProps {
  inquiries: Inquiry[];
  onUpdateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  onDeleteInquiry: (id: string) => void;
  courses: Course[];
  onAddCourse: (c: Course) => void;
  onDeleteCourse: (id: string) => void;
  results: Result[];
  onAddResult: (r: Result) => void;
  onDeleteResult: (id: string) => void;
  faqs: FAQ[];
  onAddFAQ: (f: FAQ) => void;
  onDeleteFAQ: (id: string) => void;
  gallery: GalleryItem[];
  onAddGallery: (g: GalleryItem) => void;
  onDeleteGallery: (id: string) => void;
  isLive: boolean;
  setIsLive: (val: boolean) => void;
  liveVideoId: string;
  setLiveVideoId: (id: string) => void;
}

export default function AdminPanel({
  inquiries,
  onUpdateInquiryStatus,
  onDeleteInquiry,
  courses,
  onAddCourse,
  onDeleteCourse,
  results,
  onAddResult,
  onDeleteResult,
  faqs,
  onAddFAQ,
  onDeleteFAQ,
  gallery,
  onAddGallery,
  onDeleteGallery,
  isLive,
  setIsLive,
  liveVideoId,
  setLiveVideoId,
}: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'inbox' | 'live' | 'courses' | 'results' | 'gallery' | 'faqs'>('inbox');

  // Form State Containers
  const [newCourse, setNewCourse] = useState<Omit<Course, 'id'>>({
    title: '',
    description: '',
    duration: '',
    features: [''],
    category: 'SSC Exams',
  });

  const [newResult, setNewResult] = useState<Omit<Result, 'id'>>({
    name: '',
    examName: '',
    year: '2026',
    achievement: '',
    rankPlaceholder: '',
    image: '',
    isTopPerformer: true,
  });

  const [newFAQ, setNewFAQ] = useState<Omit<FAQ, 'id'>>({
    question: '',
    answer: '',
    category: 'Enrollment',
  });

  const [newGallery, setNewGallery] = useState<Omit<GalleryItem, 'id'>>({
    url: '',
    title: '',
    category: 'classroom',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'orai123' || password.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid passcode. Use "orai123" to access administrative settings.');
    }
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.description) return;
    onAddCourse({
      ...newCourse,
      id: `course-${Date.now()}`,
      features: newCourse.features.filter(f => f.trim() !== '')
    });
    setNewCourse({
      title: '',
      description: '',
      duration: '',
      features: [''],
      category: 'SSC Exams',
    });
    alert('Course added successfully!');
  };

  const handleAddResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResult.name || !newResult.achievement) return;
    onAddResult({
      ...newResult,
      id: `result-${Date.now()}`,
    });
    setNewResult({
      name: '',
      examName: '',
      year: '2026',
      achievement: '',
      rankPlaceholder: '',
      image: '',
      isTopPerformer: true,
    });
    alert('Student result logged successfully!');
  };

  const handleAddFAQ = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFAQ.question || !newFAQ.answer) return;
    onAddFAQ({
      ...newFAQ,
      id: `faq-${Date.now()}`,
    });
    setNewFAQ({
      question: '',
      answer: '',
      category: 'Enrollment',
    });
    alert('FAQ saved!');
  };

  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGallery.url || !newGallery.title) return;
    onAddGallery({
      ...newGallery,
      id: `gal-${Date.now()}`,
    });
    setNewGallery({
      url: '',
      title: '',
      category: 'classroom',
    });
    alert('Photo added to gallery!');
  };

  if (!isOpen) {
    return (
      <button
        id="btn-admin-floating-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 p-2 rounded-full bg-transparent text-slate-400/50 dark:text-slate-600/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-700 dark:hover:text-slate-300 transition-all cursor-pointer"
        title="System"
      >
        <Settings className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850 shadow-2xl flex flex-col h-[85vh] overflow-hidden">
        {/* Header Block */}
        <div className="p-5 border-b border-slate-150 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center space-x-2.5">
            <Settings className="text-orange-brand-500" />
            <div>
              <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-base sm:text-lg">
                Bhadauriya Classes Content Manager
              </h3>
              <p className="text-[11px] text-slate-400 font-semibold">
                Configure live classes, check inquiries, and alter listings dynamically
              </p>
            </div>
          </div>

          <button
            id="btn-admin-close"
            onClick={() => {
              setIsOpen(false);
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Auth Gate Screen */}
        {!isAuthenticated ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="p-4 bg-orange-brand-50 dark:bg-orange-brand-950/20 text-orange-brand-500 rounded-2xl mb-4">
              <Lock size={32} />
            </div>
            <h4 className="font-display font-bold text-slate-800 dark:text-white text-lg">
              Unlock Administrator Portal
            </h4>
            <p className="text-xs text-slate-400 max-w-sm mt-1 mb-6">
              To edit the live video links, review received student phone logs, or add new toppers, unlock the panel with password: <code className="text-royal-500 font-bold bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">orai123</code>
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <input
                id="admin-password-input"
                type="password"
                placeholder="Enter password (orai123)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white text-sm text-center focus:ring-2 focus:ring-royal-500 focus:outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <button
                id="btn-admin-login"
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-royal-700 to-royal-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
            {/* Sidebar Tabs */}
            <div className="w-full sm:w-56 bg-slate-50 dark:bg-slate-950/30 border-r border-slate-150 dark:border-slate-800 p-4 space-y-1 overflow-y-auto flex sm:flex-col">
              <button
                onClick={() => setActiveTab('inbox')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'inbox'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Inbox size={16} />
                <span>Inquiries ({inquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('live')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'live'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Youtube size={16} />
                <span>YouTube Live Overrides</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'courses'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen size={16} />
                <span>Manage Courses</span>
              </button>

              <button
                onClick={() => setActiveTab('results')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'results'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Award size={16} />
                <span>Manage Results</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <ImageIcon size={16} />
                <span>Manage Gallery</span>
              </button>

              <button
                onClick={() => setActiveTab('faqs')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'faqs'
                    ? 'bg-royal-700 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <HelpCircle size={16} />
                <span>Manage FAQs</span>
              </button>
            </div>

            {/* Tab Body Contents */}
            <div className="flex-1 p-6 overflow-y-auto">
              {/* Tab 1 Inbox */}
              {activeTab === 'inbox' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      Student Inquiry Logs
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      {inquiries.length} Inquiries Logged
                    </span>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="text-center py-12 text-slate-400">
                      <Inbox size={48} className="mx-auto mb-2 text-slate-300" />
                      <p>Inquiry box is empty. New students queries will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-800 p-4 rounded-2xl relative"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h5 className="font-bold text-slate-800 dark:text-slate-200">
                                {inq.name}
                              </h5>
                              <p className="text-xs text-royal-600 dark:text-royal-400 font-semibold mt-0.5">
                                Exam/Course Interested: {inq.course}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                                📞 Mobile: <a href={`tel:${inq.phone}`} className="underline font-bold hover:text-royal-600">{inq.phone}</a>
                                {inq.email && ` | ✉️ ${inq.email}`}
                              </p>
                              {inq.message && (
                                <p className="text-xs bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-2.5 rounded-xl text-slate-600 dark:text-slate-400 mt-3 font-light leading-relaxed">
                                  <strong>Message:</strong> "{inq.message}"
                                </p>
                              )}
                            </div>

                            <button
                              onClick={() => onDeleteInquiry(inq.id)}
                              className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-950/20"
                              title="Delete Log"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-150 dark:border-slate-850 flex items-center justify-between text-xs">
                            <span className="text-[10px] text-slate-400 font-medium">Logged on: {inq.date}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-[11px] text-slate-500 font-bold">Status:</span>
                              <select
                                className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-bold"
                                value={inq.status}
                                onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value as Inquiry['status'])}
                              >
                                <option value="pending">🟡 Pending Contact</option>
                                <option value="contacted">🔵 Contacted / Called</option>
                                <option value="resolved">🟢 Resolved / Joined</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2 YouTube Overrides */}
              {activeTab === 'live' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      YouTube Live Overrides & Settings
                    </h4>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-250 dark:border-slate-800/80 space-y-5">
                    {/* Live indicator toggle */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="block font-bold text-sm text-slate-800 dark:text-white">
                          Toggle YouTube Live Mode
                        </span>
                        <span className="block text-xs text-slate-400 max-w-md">
                          Turning this ON will immediately force the homepage Player to show a RED "🔴 LIVE NOW" badge and load the Live stream video ID.
                        </span>
                      </div>

                      <button
                        onClick={() => setIsLive(!isLive)}
                        className={`w-14 h-8 rounded-full transition-colors relative flex items-center px-1 cursor-pointer focus:outline-none ${
                          isLive ? 'bg-red-600' : 'bg-slate-300 dark:bg-slate-800'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                            isLive ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Active Live Video ID */}
                    <div className="space-y-2 pt-2 border-t border-slate-150 dark:border-slate-800/80">
                      <label htmlFor="admin-yt-id" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase block">
                        Live / Main YouTube Video ID
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="admin-yt-id"
                          type="text"
                          placeholder="e.g. 9_M0w4Gq6_8"
                          className="flex-1 px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-850 dark:text-white text-sm focus:outline-none"
                          value={liveVideoId}
                          onChange={(e) => setLiveVideoId(e.target.value)}
                        />
                        <button
                          onClick={() => alert('Updated!')}
                          className="px-5 py-2.5 bg-royal-700 hover:bg-royal-800 text-white font-bold text-xs rounded-xl cursor-pointer"
                        >
                          Save Video ID
                        </button>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Find the ID at the end of YouTube watch links (e.g., youtube.com/watch?v=<strong>9_M0w4Gq6_8</strong>).
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3 Courses */}
              {activeTab === 'courses' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      Add / Remove Coaching Programs
                    </h4>
                  </div>

                  {/* Add New Course Form */}
                  <form onSubmit={handleAddCourse} className="space-y-4 bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-850">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 uppercase">Create New Batch</h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Course Title</label>
                        <input
                          type="text"
                          placeholder="e.g. SSC CGL Masterclass"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-white"
                          value={newCourse.title}
                          onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-400 uppercase">Duration</label>
                          <input
                            type="text"
                            placeholder="e.g. 5 Months"
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                            value={newCourse.duration}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, duration: e.target.value }))}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-400 uppercase">Category</label>
                          <select
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm cursor-pointer"
                            value={newCourse.category}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, category: e.target.value }))}
                          >
                            <option value="SSC Exams">SSC Exams</option>
                            <option value="Teacher Exams">Teacher Exams</option>
                            <option value="State Exams">State Exams</option>
                            <option value="Foundation">Foundation</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Description</label>
                      <textarea
                        rows={2}
                        placeholder="Detail about teachers and material..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-white"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Features Highlights (one per line)</label>
                      <textarea
                        rows={2}
                        placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-mono"
                        onChange={(e) => setNewCourse(prev => ({ ...prev, features: e.target.value.split('\n') }))}
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Add Course Program</span>
                    </button>
                  </form>

                  {/* Existing courses delete table */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-slate-400 uppercase">Active Programs</h5>
                    <div className="space-y-2">
                      {courses.map(c => (
                        <div key={c.id} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-950/20 border rounded-xl text-xs sm:text-sm">
                          <div>
                            <span className="font-bold text-slate-800 dark:text-slate-250">{c.title}</span>
                            <span className="text-[11px] text-slate-400 ml-2">({c.category})</span>
                          </div>
                          <button
                            onClick={() => onDeleteCourse(c.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4 Results */}
              {activeTab === 'results' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      Manage Student Exam Selections
                    </h4>
                  </div>

                  {/* Add result Form */}
                  <form onSubmit={handleAddResult} className="space-y-4 bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-850">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 uppercase">Log Selection Achievement</h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Student Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Chandra"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newResult.name}
                          onChange={(e) => setNewResult(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Exam Name & Year</label>
                        <input
                          type="text"
                          placeholder="e.g. SSC CGL 2025"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newResult.examName}
                          onChange={(e) => setNewResult(prev => ({ ...prev, examName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Rank or Score (Placeholder)</label>
                        <input
                          type="text"
                          placeholder="e.g. AIR 232 or 132/150"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newResult.rankPlaceholder}
                          onChange={(e) => setNewResult(prev => ({ ...prev, rankPlaceholder: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Achievement Post</label>
                        <input
                          type="text"
                          placeholder="e.g. Tax Assistant / SI"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newResult.achievement}
                          onChange={(e) => setNewResult(prev => ({ ...prev, achievement: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Topper Selection Type</label>
                        <select
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newResult.isTopPerformer ? 'topper' : 'general'}
                          onChange={(e) => setNewResult(prev => ({ ...prev, isTopPerformer: e.target.value === 'topper' }))}
                        >
                          <option value="topper">⭐ Top Performer Card (with Photo)</option>
                          <option value="general">🟢 General Qualified List Row</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Student Photo URL (Optional)</label>
                      <input
                        type="url"
                        placeholder="e.g. https://images.unsplash.com/... or leave blank for default"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                        value={newResult.image}
                        onChange={(e) => setNewResult(prev => ({ ...prev, image: e.target.value }))}
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Add Topper Log</span>
                    </button>
                  </form>

                  {/* Results list */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-slate-400 uppercase">Currently Listed Selections</h5>
                    <div className="space-y-2">
                      {results.map(r => (
                        <div key={r.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950/20 border rounded-xl text-xs sm:text-sm">
                          <div>
                            <span className="font-bold text-slate-850 dark:text-slate-250">{r.name}</span>
                            <span className="text-[10px] text-orange-brand-500 font-bold ml-2">({r.examName} • {r.achievement})</span>
                          </div>
                          <button
                            onClick={() => onDeleteResult(r.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5 Gallery */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      Add / Delete Campus Photos
                    </h4>
                  </div>

                  <form onSubmit={handleAddGallery} className="space-y-4 bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-850">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 uppercase">Add Photo Entry</h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Photo Title</label>
                        <input
                          type="text"
                          placeholder="e.g. Smart Classroom Orai"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                          value={newGallery.title}
                          onChange={(e) => setNewGallery(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase">Category</label>
                        <select
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm cursor-pointer"
                          value={newGallery.category}
                          onChange={(e) => setNewGallery(prev => ({ ...prev, category: e.target.value as any }))}
                        >
                          <option value="classroom">Classroom</option>
                          <option value="students">Students</option>
                          <option value="faculty">Faculty</option>
                          <option value="seminars">Seminars</option>
                          <option value="celebrations">Celebrations</option>
                          <option value="results">Results</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Image Direct URL</label>
                      <input
                        type="url"
                        placeholder="e.g. https://images.unsplash.com/photo-..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                        value={newGallery.url}
                        onChange={(e) => setNewGallery(prev => ({ ...prev, url: e.target.value }))}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Add Image</span>
                    </button>
                  </form>

                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-slate-400 uppercase">Gallery Catalog</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {gallery.map(g => (
                        <div key={g.id} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-950/20 border rounded-xl text-xs">
                          <span className="truncate flex-1 font-medium">{g.title} ({g.category})</span>
                          <button
                            onClick={() => onDeleteGallery(g.id)}
                            className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6 FAQs */}
              {activeTab === 'faqs' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                      Manage FAQs Answer Base
                    </h4>
                  </div>

                  <form onSubmit={handleAddFAQ} className="space-y-4 bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-850">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 uppercase">Add New FAQ</h5>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Question</label>
                      <input
                        type="text"
                        placeholder="e.g. Is there any Sunday test?"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm"
                        value={newFAQ.question}
                        onChange={(e) => setNewFAQ(prev => ({ ...prev, question: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">Answer Details</label>
                      <textarea
                        rows={3}
                        placeholder="Answer text..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-white"
                        value={newFAQ.answer}
                        onChange={(e) => setNewFAQ(prev => ({ ...prev, answer: e.target.value }))}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Add FAQ</span>
                    </button>
                  </form>

                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-slate-400 uppercase">Current FAQs</h5>
                    <div className="space-y-2">
                      {faqs.map(f => (
                        <div key={f.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950/20 border rounded-xl text-xs sm:text-sm">
                          <span className="truncate flex-1 font-bold">{f.question}</span>
                          <button
                            onClick={() => onDeleteFAQ(f.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
