export const site = {
  name: "Keerat Singh Bhasin",
  title: "Systems Engineering & Design @ UIUC",
  positioning:
    "Building at the intersection of robotics, mechanical systems, and intelligent products.",
  availability: "Available for Fall 2026 Internships",
  gpa: "3.7",
  school: "University of Illinois Urbana-Champaign",
  grad: "May 2027",
  email: "kbhasin2@illinois.edu",
  linkedin: "https://linkedin.com/in/keerat-singh-bhasin",
  phone: "(217) 904-0607",
} as const;

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutTimeline = [
  {
    id: "systems",
    label: "Systems lens",
    detail:
      "Mechanical hardware, embedded control, and validation as one integrated system—not isolated disciplines.",
  },
  {
    id: "robotics",
    label: "Robotics & autonomy",
    detail:
      "Perception, planning, and closed-loop control on real embedded platforms with measurable test outcomes.",
  },
  {
    id: "research",
    label: "Digital prototyping",
    detail:
      "Reverse engineering and constraint-driven redesign using industrial CAD/scanning workflows.",
  },
  {
    id: "leadership",
    label: "Technical leadership",
    detail:
      "Cross-functional program design—from research presentations to mentorship and fundraising at scale.",
  },
] as const;

export const toolStack = [
  "Embedded C / TI C2000",
  "PID & Controls",
  "Siemens NX",
  "Geomagic Design X",
  "Fusion 360 / SOLIDWORKS",
  "MATLAB / LabVIEW",
  "Python / Java",
] as const;

export const certifications = [
  "Six Sigma Green Belt",
  "Lean Green Belt",
] as const;

export const research = {
  org: "Product Design Lab · UIUC",
  role: "Undergraduate Research Assistant",
  date: "Sep – Dec 2024",
  title: "1966 Ford GT40 Mk II Digital Twin → FIA LMH Redesign",
  summary:
    "Reverse engineered the GT40 using 3D scanning and Geomagic Design X, then led a ground-up exterior redesign in Siemens NX for 2024 FIA LMH dimensional and aerodynamic regulations.",
  hotspots: [
    {
      id: "scan",
      label: "3D Scanning & Twin",
      body: "Scan → mesh repair → watertight digital twin in Geomagic Design X.",
    },
    {
      id: "nx",
      label: "Siemens NX Redesign",
      body: "Ground-up exterior surfaces: diffuser, sidepods, floor, wing, NACA features.",
    },
    {
      id: "lmh",
      label: "LMH Compliance",
      body: "Constraint-based packaging and dimensional homologation targets.",
    },
    {
      id: "present",
      label: "Presented",
      body: "UIUC Undergraduate Research Symposium & ISE Student Conference.",
    },
  ],
  tools: [
    "Siemens NX",
    "Geomagic Design X",
    "3D Scanning",
    "Mesh Repair",
    "Aerodynamics",
    "FIA LMH",
  ],
} as const;

export const featuredProjects = [
  {
    id: "robot",
    featured: true,
    type: "Embedded · Perception · Controls",
    title: "Autonomous Robot Car System",
    summary:
      "Embedded robotic platform on TI C2000: LiDAR/camera perception, path planning, PID closed-loop control, UART/SPI integration, and JTAG debugging.",
    challenges: [
      "Closed-loop stability under real sensor noise",
      "Perception-to-actuation latency budgeting",
      "Hardware-in-the-loop verification",
    ],
    architecture: "Sensors → Perception → Planning → PID Control → Actuation → Telemetry",
    metrics: ["PID control loops", "UART/SPI + JTAG debug", "MATLAB/LabVIEW validation"],
    tools: ["C", "TI C2000", "LiDAR", "Camera", "PID", "MATLAB", "LabVIEW"],
  },
  {
    id: "truss",
    featured: true,
    type: "Structural Analysis · Optimization",
    title: "Strike-Resistant Truss Optimization",
    summary:
      "Statically redundant truss stable above 100 kN and under single-member removal; 50%+ material reduction with maintained safety margins.",
    challenges: [
      "Buckling, yield, and slenderness constraints",
      "Redundancy under member loss",
      "Material efficiency vs. safety factor trade-offs",
    ],
    architecture: "Load cases → Force analysis → Member sizing → Redundancy check → Optimized layout",
    metrics: [">100 kN load case", "Single-member removal stable", "50%+ material reduction"],
    tools: ["Structural Analysis", "Optimization", "Safety Margins"],
  },
] as const;

export const experiences = [
  {
    id: "neutrinos",
    role: "AI Platform Enablement Intern",
    org: "Neutrinos · Remote",
    date: "Mar 2026 – Present",
    mission: "Translate competitive platform analysis into product requirements for an AI learning ecosystem.",
    impact: "4-tier learning framework + freemium model presented to leadership",
    outcomes: [
      "Benchmarked 3+ platforms across content, monetization, and adoption",
      "Mapped user flows and event-driven learning triggers",
      "Delivered structured recommendations to product and platform leadership",
    ],
  },
  {
    id: "ewb",
    role: "External Vice President",
    org: "Engineers Without Borders UIUC",
    date: "Nov 2024 – Jan 2026",
    mission: "Fundraising and sponsorship for international infrastructure impacting 30,000+ people.",
    impact: "$50,000 raised in 2025 (20% YoY growth)",
    outcomes: [
      "Built corporate, alumni, and donor pipelines",
      "Led cross-functional fundraising and sponsorship strategy",
    ],
  },
  {
    id: "iise",
    role: "Mentorship Director",
    org: "Institute of Industrial & Systems Engineers (IISE)",
    date: "Apr 2024 – May 2025",
    mission: "Scale a mentorship program connecting students, alumni, faculty, and industry.",
    impact: "350% increase in participation · 50+ participants",
    outcomes: [
      "Structured program formats with Microsoft Project coordination",
      "Multi-channel engagement across print, digital, and in-person",
    ],
  },
] as const;

export const skillGroups = [
  {
    id: "mech",
    title: "Mechanical Engineering",
    skills: ["GD&T", "DFM", "FEA", "Structural Analysis", "Rapid Prototyping", "Testing"],
  },
  {
    id: "cad",
    title: "CAD / CAE",
    skills: ["Siemens NX", "SOLIDWORKS", "Fusion 360", "Geomagic Design X", "3D Scanning"],
  },
  {
    id: "embedded",
    title: "Embedded & Controls",
    skills: ["PID", "Embedded C", "UART/SPI", "JTAG", "LiDAR", "Signal Conditioning"],
  },
  {
    id: "code",
    title: "Programming",
    skills: ["C/C++", "Python", "MATLAB", "Java", "Git"],
  },
  {
    id: "product",
    title: "Product & Systems",
    skills: ["Requirements", "Trade Studies", "Verification", "Technical Writing"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["LabVIEW", "Simulink", "Microsoft Project", "JIRA"],
  },
] as const;
