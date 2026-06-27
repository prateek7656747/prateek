import React, { useState, useEffect } from 'react';
import { Youtube, ExternalLink, Play, Sparkles, Bell, Wifi, RefreshCw } from 'lucide-react';
import { YouTubeVideo } from '../types';

interface YouTubeLiveProps {
  initialVideos: YouTubeVideo[];
  isLiveOverride?: boolean; // Controlled by admin state
  liveVideoId?: string;     // Controlled by admin state
}

export default function YouTubeLive({
  initialVideos,
  isLiveOverride = false,
  liveVideoId = '9_M0w4Gq6_8',
}: YouTubeLiveProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>(initialVideos);
  const [activeVideoId, setActiveVideoId] = useState<string>(liveVideoId);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [isLive, setIsLive] = useState<boolean>(isLiveOverride);
  const [checkingLive, setCheckingLive] = useState<boolean>(false);

  // Sync state if admin override changes
  useEffect(() => {
    setIsLive(isLiveOverride);
    if (isLiveOverride) {
      setActiveVideoId(liveVideoId);
    } else {
      // default to first uploaded video if override is turned off
      if (initialVideos.length > 0) {
        setActiveVideoId(initialVideos[0].videoId);
      }
    }
  }, [isLiveOverride, liveVideoId, initialVideos]);

  // Set active video details
  useEffect(() => {
    if (isLive) {
      setActiveTitle('🔴 LIVE: Special Government Exam Prep Class with Bhadauriya Sir');
    } else {
      const match = videos.find((v) => v.videoId === activeVideoId);
      setActiveTitle(match ? match.title : 'Bhadauriya Classes Lecture Recording');
    }
  }, [activeVideoId, isLive, videos]);

  // Simulated live checker routine
  const checkYouTubeLiveStatus = () => {
    setCheckingLive(true);
    // Simulate API query to YouTube Live stream endpoint
    setTimeout(() => {
      setCheckingLive(false);
      // If admin didn't force override, we can have a slight chance or keep it synchronized
      if (!isLiveOverride) {
        // Keeps it robust
        setIsLive(false);
      }
    }, 1200);
  };

  useEffect(() => {
    checkYouTubeLiveStatus();
  }, []);

  return (
    <section
      id="live-classes"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 px-3 py-1.5 rounded-full text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
            <span className={`w-2 h-2 rounded-full bg-rose-600 ${isLive ? 'animate-ping' : ''}`} />
            <span>Digital Classroom HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn Live with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Bhadauriya Classes
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
            Can't attend offline in Orai? Join Bhadauriya Classes on YouTube for free lectures, test-series explanations, and motivational live sessions.
          </p>
        </div>

        {/* Video Player + Play List grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Video Embed Frame Column */}
          <div className="lg:col-span-8 flex flex-col justify-between glass-card rounded-3xl p-5 shadow-xl relative overflow-hidden">
            <div>
              {/* Header inside player */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  {isLive ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white animate-pulse">
                      🔴 LIVE NOW
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      LATEST RECORDING
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    @bhadauriya_classes
                  </span>
                </div>

                <button
                  onClick={checkYouTubeLiveStatus}
                  className="text-xs font-semibold text-royal-600 hover:text-royal-800 dark:text-royal-400 dark:hover:text-royal-300 flex items-center space-x-1 focus:outline-none"
                  disabled={checkingLive}
                >
                  <RefreshCw size={12} className={checkingLive ? 'animate-spin' : ''} />
                  <span>{checkingLive ? 'Checking YouTube...' : 'Check Live Status'}</span>
                </button>
              </div>

              {/* YouTube Iframe Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner relative group">
                <iframe
                  id="yt-live-iframe"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0`}
                  title="Bhadauriya Classes YouTube Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0 absolute inset-0"
                />
              </div>

              {/* Active Lecture Title description */}
              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-800 dark:text-slate-100 mt-5 leading-snug">
                {activeTitle}
              </h4>
            </div>

            {/* Watch and Subscribe Actions */}
            <div className="mt-6 pt-5 border-t border-slate-150 dark:border-slate-800 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                <a
                  id="btn-yt-watch"
                  href={`https://youtube.com/watch?v=${activeVideoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2 shadow-md transition-all"
                >
                  <Youtube size={16} />
                  <span>Watch on YouTube</span>
                </a>

                <a
                  id="btn-yt-subscribe"
                  href="https://youtube.com/@bhadauriya_classes?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-black text-white dark:bg-slate-800 dark:hover:bg-slate-750 flex items-center space-x-2 shadow-sm transition-all"
                >
                  <Bell size={16} className="text-orange-brand-500 animate-bounce" />
                  <span>Subscribe Channel</span>
                </a>
              </div>

              <span className="text-xs text-slate-400 font-medium">
                📍 Orai Coaching Hub • Free Online Content
              </span>
            </div>
          </div>

          {/* Sidebar: Dynamic playlist list */}
          <div className="lg:col-span-4 flex flex-col glass-card rounded-3xl p-5 shadow-xl">
            <div className="border-b border-slate-150 dark:border-slate-800 pb-3 mb-4 flex items-center justify-between">
              <span className="font-display font-extrabold text-slate-800 dark:text-slate-200 text-base">
                Latest Lecture Videos
              </span>
              <Youtube size={18} className="text-red-500" />
            </div>

            {/* Videos Stack */}
            <div className="flex-1 space-y-3 overflow-y-auto max-h-[360px] lg:max-h-none pr-1">
              {videos.map((vid) => {
                const isSelected = vid.videoId === activeVideoId && !isLive;
                return (
                  <div
                    key={vid.id}
                    onClick={() => {
                      setIsLive(false);
                      setActiveVideoId(vid.videoId);
                    }}
                    className={`p-3 rounded-2xl flex items-start space-x-3 cursor-pointer border transition-all duration-200 ${
                      isSelected
                        ? 'bg-royal-50/55 dark:bg-royal-950/20 border-royal-200 dark:border-royal-800/80'
                        : 'bg-slate-50 dark:bg-slate-950/20 border-slate-100 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {/* Thumbnail placeholder */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={14} className="text-white fill-white/80" />
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/75 text-white text-[9px] px-1 rounded">
                        {vid.duration}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug">
                        {vid.title}
                      </h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Published {vid.publishedAt}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Info text link */}
            <div className="mt-5 pt-4 border-t border-slate-150 dark:border-slate-800 text-center">
              <a
                href="https://youtube.com/@bhadauriya_classes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-royal-700 dark:text-royal-300 hover:text-orange-brand-500 hover:underline"
              >
                <span>Browse All 200+ Videos</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
