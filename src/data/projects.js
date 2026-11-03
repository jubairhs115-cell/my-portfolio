export const projectsData = [
  {
    id: "fitlog",
    title: "FitLog – Gym & Fitness Application",
    tagline: "A dark-themed fitness companion for browsing workouts, curating daily training plans, and tracking progress.",
    description:
      "FitLog is a modern, responsive web application engineered to give gym-goers and fitness enthusiasts an intuitive command center for their daily workouts. Users can explore a comprehensive library of exercises, filter and sort routines by target specs, compile custom daily workout plans with a built-in cap, and bookmark routines for later sessions.",
    category: "Full Stack & Frontend",
    status: "Active / Completed Project",
    technologies: ["Next.js (App Router)", "JavaScript", "Tailwind CSS", "REST API", "Framer Motion", "Lucide Icons"],
    githubUrl: "https://github.com/jubairhs115-cell/my-gym-project",
    liveUrl: null, // Placeholder: marked as coming soon
    image: "/images/projects/gymdashboard.png",
    logoImage: "/images/projects/fitlog-logo.png",
    screenshots: [
      { src: "/images/projects/gymdashboard.png", title: "FitLog Hero & Dashboard", caption: "Workout library headline with interactive 'Browse Workout' CTA and dark-mode aesthetic." },
      { src: "/images/projects/gymworkout.png", title: "The Library - Exercise Catalog", caption: "Responsive 4-column exercise cards showcasing muscle group pills, equipment, duration, calories, and ratings." },
      { src: "/images/projects/gymplan.png", title: "My Plan & Daily Metrics", caption: "Dynamic workout planner with live metric counters (Exercises, Minutes, Calories) and sorting controls." },
      { src: "/images/projects/saveplan.png", title: "Saved Exercises", caption: "Bookmark panel for saving upcoming exercise routines for later sessions." },
      { src: "/images/projects/gymNabvar.png", title: "Navigation & Live Badges", caption: "Sticky navigation bar featuring live counter badges for active Plan and Saved workouts." },
    ],
    featured: true,
    features: [
      "Extensive Exercise Library: Browse lifts and exercises categorized across major muscle groups including Chest, Back, Arms, Legs, and Core.",
      "Detailed Workout Specifications: High-detail inspect panel covering equipment requirements, difficulty, target sets, reps, estimated duration, and caloric burn.",
      "Today's Plan Manager: Add routines directly into an active daily plan with a focused cap to prevent overtraining.",
      "Save For Later: Dedicated bookmarking system for saving prospective workouts for future training sessions.",
      "Dynamic Navbar Badges: Real-time counter pills showing active counts of planned and saved exercises across the app.",
      "Multi-criteria Sorting: Sort exercises by duration, calories, or community ratings on the fly.",
      "Fully Responsive UI: Crafted for mobile gym-floor usage as well as desktop planning."
    ],
    challenges: [
      "Synchronizing live badge counters between dynamic workout cards and the sticky navigation header without causing unnecessary full-tree re-renders.",
      "Designing responsive tables for exercise specifications that stay readable and accessible on narrow mobile screens.",
      "Managing fallback states and smooth loading indicators when querying external workout APIs."
    ],
    improvements: [
      "Persisting user plans and saved workouts in localStorage or remote database for cross-device synchronization.",
      "Adding an in-app rest timer and active set check-off during live training sessions."
    ],
    futurePlans: [
      "Personalized workout analytics visualizing weekly volume and caloric expenditure.",
      "Social sharing of custom workout splits and AI-assisted routine suggestions based on user goals."
    ]
  },
  {
    id: "library-management",
    title: "Library Management System",
    tagline: "A university library platform for Khademul Haramain King Fahad Central Library at Islamic University, Bangladesh, featuring catalog search, automated fine calculations, and live loan tracking.",
    description:
      "The Library Management System is a full-stack web application designed for Khademul Haramain King Fahad Central Library at Islamic University, Bangladesh. It provides students and university staff with multi-filter catalog discovery (Computer Science, Mathematics, etc.), real-time copy availability, a student dashboard with a 3-book borrowing cap, active loan custody tracking, and an automated overdue fine calculation engine (5 BDT/day overdue).",
    category: "Full Stack Web Application",
    status: "Active / Completed Project",
    technologies: ["Next.js", "JavaScript", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: null, // Placeholder: to be updated once public repo is published
    liveUrl: null, // Placeholder: to be updated
    image: "/images/projects/library-hero.png",
    featured: true,
    screenshots: [
      { src: "/images/projects/library-hero.png", title: "Central Library Portal & Discovery", caption: "Landing portal for Khademul Haramain King Fahad Central Library featuring global book search and university credentials." },
      { src: "/images/projects/library-catalog.png", title: "Searchable Book Catalog", caption: "Multi-filter catalog with title, author, and ISBN search, displaying real-time copy availability badges (e.g. CLRS, Clean Code, Design Patterns)." },
      { src: "/images/projects/library-dashboard.png", title: "Student Borrowing Dashboard", caption: "Authenticated student overview displaying currently borrowed books (3-book limit), due dates, and unpaid fines." },
      { src: "/images/projects/library-fines.png", title: "Automated Overdue Fines Ledger", caption: "Fine management system assessing 5 BDT/day overdue penalties (capped at 500 BDT) with clear institutional policy documentation." },
      { src: "/images/projects/library-borrowed.png", title: "My Borrowed Books & Active Loans", caption: "Custody tracking interface for managing currently checked-out materials and quick catalog re-discovery." },
    ],
    features: [
      "Institutional Library Catalog: Multi-filter discovery across academic categories (Computer Science, Mathematics) with ISBN search and real-time inventory counts.",
      "Student Borrowing Dashboard: Authenticated student portal tracking active loans against an institutional 3-book limit.",
      "Automated Overdue Fine Engine: Business rules automatically calculating daily late fees (5 BDT/day) with a 500 BDT ceiling per book.",
      "Book Loan & Return Transactions: Manages borrowing and returning workflows with atomic inventory adjustments in MongoDB.",
      "Custody & Loan History: Transparent ledger of active loans, due dates, and past checkout records.",
      "Islamic University Branding: Specifically tailored for Khademul Haramain King Fahad Central Library at Islamic University, Bangladesh."
    ],
    challenges: [
      "Implementing atomic inventory decrementing and incrementing in MongoDB to prevent negative book counts during simultaneous student checkouts.",
      "Structuring relational loan transactions with due dates, grace periods, and capped fee computations in a document database model.",
      "Designing an intuitive, responsive interface accessible on both desktop campus kiosks and mobile student devices."
    ],
    improvements: [
      "Automated SMS/Email notifications alerting students 3 days before a book reaches its due date.",
      "Barcode and student ID card scanner integration for rapid physical desk checkouts."
    ],
    futurePlans: [
      "Role-Based Access Control (RBAC) separating student portals, faculty research privileges, and administrative catalog controls.",
      "Digital research paper and thesis archive integration alongside physical textbook records."
    ]
  },
  {
    id: "authentication",
    title: "Modern Authentication System",
    tagline: "A robust authentication architecture featuring email/password credentials, social OAuth, and protected routes.",
    description:
      "A production-grade identity and session management system built with Next.js App Router and Better Auth. It delivers secure email/password credential validation, social OAuth provider integration, encrypted session cookies, and route guards for protected user dashboards.",
    category: "Security & Authentication",
    status: "Active / In Progress",
    technologies: ["Next.js (App Router)", "Better Auth", "MongoDB", "React", "JavaScript", "Tailwind CSS"],
    githubUrl: null, // Placeholder: to be updated
    liveUrl: null, // Placeholder: to be updated
    image: null, // Graceful fallback visual
    featured: true,
    features: [
      "Credentials Authentication: Secure user registration and login workflows with password hashing and validation.",
      "Social OAuth Integration: One-click sign-in support with popular providers like Google and GitHub.",
      "Session Management: Encrypted session cookies managed via Better Auth client and server APIs.",
      "Protected Dashboard: Server and client-side route guards preventing unauthenticated access to user data.",
      "User Profile View: Authenticated dashboard allowing users to inspect their account details and active login states.",
      "Clean UI States: Polished loading feedback, inline form validation, and error messaging."
    ],
    challenges: [
      "Integrating Better Auth endpoints seamlessly into Next.js App Router API route handlers (`[...all]`).",
      "Ensuring consistent authentication state synchronization between React Server Components and interactive Client Components without hydration glitches."
    ],
    improvements: [
      "Implementing two-factor authentication (2FA / TOTP) for elevated account security.",
      "Adding session revocation capabilities across multiple connected devices."
    ],
    futurePlans: [
      "Role-based authorization rules (e.g., User, Moderator, Admin).",
      "Magic link authentication via email for passwordless sign-in."
    ]
  }
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.id === slug) || null;
}

export function getAllProjectSlugs() {
  return projectsData.map((p) => p.id);
}

