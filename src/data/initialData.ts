import { Course, Testimonial, Result, GalleryItem, FAQ, YouTubeVideo } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'ssc-cgl',
    title: 'SSC CGL Special Batch',
    description: 'Comprehensive Tier-1 & Tier-2 coaching with intensive focus on Quantitative Aptitude, English Comprehension, Reasoning, and General Awareness.',
    duration: '6 Months',
    features: [
      'Daily 3 Hours Classes',
      'Topic-wise Weekly Practice Sheets',
      '150+ Full-Length Mock Tests',
      'Exclusive Shortcut Tricks for Quant',
      'Personal Mentor Support'
    ],
    category: 'SSC Exams',
    isPopular: true
  },
  {
    id: 'ctet',
    title: 'CTET (Paper I & II)',
    description: 'Specialized preparation focusing on Child Development & Pedagogy (CDP), Environmental Studies, Mathematics, and Language Teaching Methodologies.',
    duration: '4 Months',
    features: [
      'Comprehensive CDP coverage',
      'Previous 10 Years Solved Papers',
      'Pedagogy special sessions',
      'Regular OMR Sheet Practice',
      'Free Study Material & Notes'
    ],
    category: 'Teacher Exams'
  },
  {
    id: 'ssc-general',
    title: 'SSC CHSL / MTS / GD',
    description: 'Focused classes designed to crack secondary and matric level central government job examinations with speed and accuracy.',
    duration: '5 Months',
    features: [
      'Concept clear in simple hindi',
      'Daily speed tests',
      'Previous years question analysis',
      'Free online test series login',
      'Doubt clearance window'
    ],
    category: 'SSC Exams'
  },
  {
    id: 'cat',
    title: 'CAT / Quantitative Aptitude',
    description: 'High-level training in Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Ability (QA).',
    duration: '8 Months',
    features: [
      'Advanced problem-solving tactics',
      'One-on-one strategy planning',
      'Sectional and overall Mock tests',
      'Conceptual deep dives',
      'Doubt clearing with senior faculty'
    ],
    category: 'Management'
  },
  {
    id: 'one-day',
    title: 'UP Police & One Day Exams',
    description: 'Tailored course for state-level examinations like UP Police Constable/SI, Lekhpal, VDO, and Railway (RRB) exams with customized syllabus tracking.',
    duration: '3 - 4 Months',
    features: [
      'State-specific general knowledge',
      'Daily rapid-fire quiz sessions',
      'Physical guidance consultation',
      'UP Special GK handouts',
      'Affordable fee structure'
    ],
    category: 'State Exams',
    isPopular: false
  },
  {
    id: 'foundation',
    title: 'Government Exam Foundation',
    description: 'A robust, 1-year master batch that starts from basic school-level concepts and builds up to high-difficulty competitive exams.',
    duration: '12 Months',
    features: [
      'Starts from absolute zero level',
      'Covers Mathematics, English, Reasoning & GS',
      'Life-time doubt support until selection',
      'Customized monthly study tracker',
      'Monthly performance cards for parents'
    ],
    category: 'Foundation',
    isPopular: true
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ajeet Kumar',
    exam: 'Selected in SSC CGL (Tax Assistant)',
    rating: 5,
    review: 'Bhadauriya Classes has been the turning point of my career. The dedication of Bhadauriya Sir in explaining math shortcuts is incredible. Weekly mock tests and the offline doubt session solved all my confusion. Strongly recommend to anyone in Orai preparing for competitive exams!',
    date: '2 months ago',
    isVerified: true
  },
  {
    id: 'test-2',
    name: 'Pooja Tiwari',
    exam: 'CTET qualified (Paper 1 & 2)',
    rating: 5,
    review: 'The Child Development and Pedagogy notes provided here are extremely simplified and directly match the exam questions. Regular practice sessions helped me clear CTET in my very first attempt. The environment is highly motivating and clean.',
    date: '3 weeks ago',
    isVerified: true
  },
  {
    id: 'test-3',
    name: 'Sandeep Verma',
    exam: 'UP Police SI Rank 412',
    rating: 5,
    review: 'Affordable fees and premium education. Bhadauriya Classes offers top-notch study material which I couldn\'t find anywhere else in Orai. The teachers treat every student personally, always happy to help after class.',
    date: '1 month ago',
    isVerified: true
  },
  {
    id: 'test-4',
    name: 'Rajat Gupta',
    exam: 'Preparing for SSC CGL',
    rating: 4,
    review: 'One of the best coaching institutes in Orai. The study atmosphere is very quiet, competitive, and focused. Regular online test simulations are highly beneficial for real exam preparation.',
    date: '2 weeks ago',
    isVerified: true
  }
];

export const INITIAL_RESULTS: Result[] = [
  {
    id: 'res-1',
    name: 'Amit Shrivas',
    examName: 'SSC CGL 2025',
    year: '2025',
    achievement: 'Excise Inspector',
    rankPlaceholder: 'AIR - 245',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isTopPerformer: true
  },
  {
    id: 'res-2',
    name: 'Kajal Mishra',
    examName: 'CTET Dec 2025',
    year: '2025',
    achievement: 'Primary & Junior Qualified',
    rankPlaceholder: '132 / 150 Marks',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    isTopPerformer: true
  },
  {
    id: 'res-3',
    name: 'Shivendra Bhadauriya',
    examName: 'UP Police SI',
    year: '2024',
    achievement: 'Sub-Inspector Selection',
    rankPlaceholder: 'Score: 318/400',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    isTopPerformer: false
  },
  {
    id: 'res-4',
    name: 'Anjali Sharma',
    examName: 'SSC CHSL 2025',
    year: '2025',
    achievement: 'Postal Assistant',
    rankPlaceholder: 'AIR - 782',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isTopPerformer: true
  },
  {
    id: 'res-5',
    name: 'Pranjal Sahu',
    examName: 'Railway RRB NTPC',
    year: '2024',
    achievement: 'Station Master Selection',
    rankPlaceholder: 'Selected',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    isTopPerformer: false
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    title: 'Smart Classroom Setup',
    category: 'classroom'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    title: 'Students Group Discussion & Doubt Solving',
    category: 'students'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    title: 'Faculty Interactive Lecture Session',
    category: 'faculty'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    title: 'Weekly Revision Seminars & Motivation',
    category: 'seminars'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    title: 'Annual Student Success Celebrations',
    category: 'celebrations'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    title: 'Doubt Clearing Sessions in Class',
    category: 'classroom'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    title: 'Toppers felicitation event at Orai',
    category: 'results'
  }
];

export const INITIAL_FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I enroll at Bhadauriya Classes?',
    answer: 'You can enroll by filling out our online Admission Inquiry Form directly on this website, clicking "Join Now" on any course card, or visiting our branch at Surya Nagar, Near Machhar Chauraha, Orai.',
    category: 'Enrollment'
  },
  {
    id: 'faq-2',
    question: 'Which examinations are covered at the institute?',
    answer: 'We specialize in coaching for Central government competitive exams like SSC CGL, CHSL, MTS, CTET (Paper I & II), CAT, as well as State government One Day Exams (UP Police Constable, Lekhpal, Railway RRB, and more).',
    category: 'Exams'
  },
  {
    id: 'faq-3',
    question: 'Are demo classes available for new students?',
    answer: 'Yes! We provide 3 Free Offline Demo Classes so you can experience our premium teaching methodology, smart classroom atmosphere, and doubt-solving style before making an enrollment decision.',
    category: 'Classes'
  },
  {
    id: 'faq-4',
    question: 'Where is the institute located in Orai?',
    answer: 'We are situated in Surya Nagar, Band Wali Gali, Near Machhar Chauraha, Orai, Uttar Pradesh - 285001. A live interactive Google Maps direction link is embedded in our Contact section for your convenience.',
    category: 'Location'
  },
  {
    id: 'faq-5',
    question: 'What study material is provided to students?',
    answer: 'We provide fully updated booklets, topic-wise practice sheets (DPPs), daily vocab supplements, weekly mock test booklets with live OMR feedback, and detailed formula booklets.',
    category: 'Materials'
  },
  {
    id: 'faq-6',
    question: 'How can I contact Bhadauriya Classes for immediate questions?',
    answer: 'You can call us directly on +91 91619 32403, click the sticky WhatsApp button to chat instantly with us, or send us an inquiry through our contact page form.',
    category: 'Enrollment'
  }
];

export const INITIAL_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    title: 'CTET CDP Special: Child Development & Pedagogy Theory & MCQs',
    videoId: '9_M0w4Gq6_8', // representative ID
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
    publishedAt: '3 days ago',
    duration: '45:12'
  },
  {
    id: 'yt-2',
    title: 'SSC CGL Mathematics: Time, Speed & Distance Best Shortcut Tricks',
    videoId: 'fSg_B3vJ-2s', // representative ID
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    publishedAt: '1 week ago',
    duration: '1:05:30'
  },
  {
    id: 'yt-3',
    title: 'UP Police Constable Hindi Special Exam Oriented Sandhi Class',
    videoId: '3Yh392Y17Yg', // representative ID
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    publishedAt: '2 weeks ago',
    duration: '38:45'
  }
];
