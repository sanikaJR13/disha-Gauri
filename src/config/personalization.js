export const defaultPersonalization = {
  // Primary Personalization Variables
  friendName: "Gauri",
  yourName: "Disha",
  companyName: "QR Tech Innovations",
  placementRole: "Software Development Engineer",
  batchYear: "2026",
  
  // Hero & Sub-messages
  heroSubtitle: "From dreaming about the future to officially beginning your professional journey...",
  heroCatchphrase: "YOU MADE IT! 🚀❤️",
  
  // Scanner Intro Steps
  scannerConfig: {
    scanTitle: "SCANNING QR CODE...",
    scanSubtitle: "Biometric Data Matrix Syncing",
    verifiedText: "QR CODE VERIFIED ✓",
    searchingText: "SEARCHING FOR ACHIEVEMENT...",
    identityText: "IDENTITY DETECTED 👀",
    achievementText: "ACHIEVEMENT DETECTED ⚡",
    unlockedText: "PLACEMENT SUCCESSFULLY UNLOCKED! 🎉",
  },

  // Success Statistics (Verification HUD)
  stats: [
    { label: "Hard Work", status: "VERIFIED", icon: "CheckCircle2", color: "emerald" },
    { label: "Talent & Skill", status: "VERIFIED", icon: "Sparkles", color: "emerald" },
    { label: "Dedication & Consistency", status: "VERIFIED", icon: "ShieldCheck", color: "emerald" },
    { label: "Late Night Preparation", status: "DETECTED ☕", icon: "Coffee", color: "amber" },
    { label: "Challenges Overcome", status: "VERIFIED", icon: "Flame", color: "emerald" },
    { label: "Interviews Survived", status: "VERIFIED", icon: "Award", color: "emerald" },
    { label: "Placement", status: "SUCCESS 🎉", icon: "PartyPopper", color: "emerald" },
    { label: "Future Potential", status: "UNLIMITED 🚀", icon: "Rocket", color: "cyan" },
  ],

  // Journey Timeline Milestones
  journey: [
    {
      icon: "GraduationCap",
      title: "COLLEGE LIFE",
      period: "The Foundation",
      description: "Where the journey, lifelong friendships, and countless unforgettable memories first began.",
      tag: "Memory Unlocked"
    },
    {
      icon: "BookOpen",
      title: "LEARNING & PREPARATION",
      period: "The Grind",
      description: "Late nights, intense assignments, solving problems, and drinking countless cups of coffee.",
      tag: "Skill Upgraded"
    },
    {
      icon: "BrainCircuit",
      title: "INTERVIEWS & CHALLENGES",
      period: "The Test",
      description: "Moments of nervousness, relentless mock tests, waiting for updates, and never losing faith.",
      tag: "Resilience 100%"
    },
    {
      icon: "Laptop",
      title: "THE OPPORTUNITY",
      period: "The Spark",
      description: "The moment preparation met opportunity, and your talent shined brighter than ever.",
      tag: "Match Found"
    },
    {
      icon: "PartyPopper",
      title: "PLACED!",
      period: "The Breakthrough",
      description: "The moment everything changed — offer secured, hard work validated, and celebrations sparked!",
      tag: "Offer Secured 🎯"
    },
    {
      icon: "Rocket",
      title: "A NEW CHAPTER",
      period: "The Horizon",
      description: "Entering the corporate world to create impact, inspire others, and conquer new frontiers.",
      tag: "Journey Begins ✨"
    }
  ],

  // Personal Congratulations Letter
  letter: {
    greeting: "Dear Superstar,",
    paragraphs: [
      "Congratulations on achieving something you worked so relentlessly hard for!",
      "This placement is not just about getting a job or an offer letter. It represents your patience, your sleepless study sessions, your courage to face challenges, and your unwavering dedication to reach this exact moment.",
      "Seeing you achieve this brings immense happiness and pride. You truly deserve every bit of this success and the applause that comes with it.",
      "Today, we celebrate your placement. But knowing your passion and drive, this is only the first of many incredible milestones you are going to conquer."
    ],
    highlight: "KEEP GOING. THE WORLD IS WAITING FOR YOU. 🚀❤️",
    signoff: "Congratulations once again, superstar! 🎉",
    footerSign: "With lots of love, proud cheers & hugs,"
  },

  // QR Technology Section
  qrTech: {
    title: "QR = QUITE READY FOR THE NEXT CHAPTER 😎",
    description: "Your system has been scanned and cross-referenced with industry standards. You are 100% matched for greatness.",
    logs: [
      "SCANNING APPLICANT MATRIX...",
      "ANALYSING DEDICATION ALGORITHMS...",
      "PROCESSING LATE NIGHT COFFEE BUFFERS...",
      "VERIFYING TECHNICAL & CREATIVE TALENT...",
      "STATUS: SUCCESSFULLY HIRED! 🎉"
    ],
    statusHeadline: "STATUS: READY FOR CORPORATE LIFE 💼",
    statusPunchline: "Corporate life has been notified. Please prepare accordingly. 😂"
  },

  // Fun Achievement Badges
  achievements: [
    {
      id: "survivor",
      icon: "Trophy",
      title: "INTERVIEW SURVIVOR",
      description: "Successfully survived every technical round, HR grilling, and mystery question.",
      level: "Level MAX",
      badgeColor: "from-amber-500/20 to-yellow-500/20",
      border: "border-amber-500/40"
    },
    {
      id: "coffee",
      icon: "Coffee",
      title: "CAFFEINE-POWERED",
      description: "Fueled by coffee, determination, last-minute adrenaline, and deadlines.",
      level: "99.9% C8H10N4O2",
      badgeColor: "from-orange-500/20 to-amber-500/20",
      border: "border-orange-500/40"
    },
    {
      id: "brain",
      icon: "Brain",
      title: "BRAIN POWER ACTIVATED",
      description: "Knowledge, logic, and creative problem-solving flawlessly deployed.",
      level: "Over 9000",
      badgeColor: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/40"
    },
    {
      id: "corporate",
      icon: "Briefcase",
      title: "CORPORATE MODE UNLOCKED",
      description: "New professional character unlocked. Ready for meetings, impact, and coffee breaks.",
      level: "Executive Ready",
      badgeColor: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/40"
    },
    {
      id: "future",
      icon: "Rocket",
      title: "FUTURE LOADING...",
      description: "Please wait. Monumental accomplishments and adventures are currently compiling.",
      level: "In Progress 🚀",
      badgeColor: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/40"
    },
    {
      id: "queen",
      icon: "Crown",
      title: "PLACEMENT QUEEN",
      description: "Walked into the recruitment arena and left as the undisputed champion.",
      level: "Royalty 👑",
      badgeColor: "from-pink-500/20 to-rose-500/20",
      border: "border-pink-500/40"
    }
  ],

  // Memory Gallery Photos
  memories: [
    {
      id: 1,
      title: "Day One Memories 🎒",
      caption: "Where our college journey and legendary laughs began!",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      rotation: "-rotate-2"
    },
    {
      id: 2,
      title: "Late Night Study Hustle 💻",
      caption: "Debugging code, endless assignments, and surviving project submissions together.",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      rotation: "rotate-3"
    },
    {
      id: 3,
      title: "Chai & Canteen Breaks ☕",
      caption: "Solving life's biggest problems over a hot cup of tea and snacks.",
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      rotation: "-rotate-3"
    },
    {
      id: 4,
      title: "Placement Preparation 🎯",
      caption: "All those mock interviews, resume reviews, and pep talks finally paid off!",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      rotation: "rotate-2"
    },
    {
      id: 5,
      title: "The Unstoppable Squad 👯‍♀️",
      caption: "Through every high and low, always cheering for each other's wins.",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      rotation: "-rotate-1"
    },
    {
      id: 6,
      title: "Celebration Vibes 🎉",
      caption: "And today, the whole world celebrates YOU and your brand new offer!",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      rotation: "rotate-3"
    }
  ],

  // Future Horizons
  futureSteps: [
    { icon: "Briefcase", title: "NEW EXPERIENCES", desc: "Exciting projects and professional milestones" },
    { icon: "Brain", title: "NEW THINGS TO LEARN", desc: "Mastering technologies and conquering domain skills" },
    { icon: "Globe", title: "NEW PEOPLE", desc: "Collaborating with brilliant minds and mentors" },
    { icon: "Compass", title: "BIGGER DREAMS", desc: "Setting audacious goals and reaching beyond limits" },
    { icon: "Trophy", title: "BIGGER ACHIEVEMENTS", desc: "Collecting wins, promotions, and recognition" }
  ],

  // Final Cake Surprise
  cakeSurprise: {
    heading: "🎁 ONE MORE SURPRISE...",
    buttonText: "UNLOCK FINAL MESSAGE 🔓",
    waitText: "WAIT... 👀",
    questionText: "WHY ARE YOU STILL LOOKING AT THE WEBSITE? 😂",
    cakeAnnouncement: "YOUR CAKE IS WAITING! 🎂🎉",
    finalCallToAction: "NOW GO CUT THE CAKE! ❤️🎂🚀"
  }
};
