export const site = {
  name: "Keerat Singh Bhasin",
  title: "Systems Engineering & Design @ UIUC",
  positioning: "Robotics · embedded controls · mechanical systems",
  availability: "Available for Fall 2026 Internships",
  gpa: "3.7",
  school: "UIUC",
  grad: "May 2027",
  email: "kbhasin2@illinois.edu",
  linkedin: "https://linkedin.com/in/keerat-singh-bhasin",
  phone: "(217) 904-0607",
} as const;

export const heroTelemetry = [
  { label: "GPA", value: "3.7", unit: "/ 4.0" },
  { label: "Focus", value: "Robotics" },
  { label: "Stack", value: "C2000 + PID" },
  { label: "Grad", value: "May 2027" },
] as const;

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutTakeaway =
  "Mechanical + embedded + validation — one closed-loop system.";

export const aboutAnnotations = [
  { id: "a1", tag: "Robotics", note: "Perception → planning → PID on embedded hardware." },
  { id: "a2", tag: "Structures", note: "Redundant truss optimization under load + removal." },
  { id: "a3", tag: "Digital twin", note: "Scan → mesh → NX redesign under FIA LMH rules." },
] as const;

export const aboutTimeline = [
  { id: "systems", label: "Systems", detail: "Mech + control + verification integrated." },
  { id: "robotics", label: "Autonomy", detail: "Closed-loop embedded platforms." },
  { id: "research", label: "CAD / scan", detail: "Compliance-driven redesign." },
  { id: "leadership", label: "Programs", detail: "Research · mentorship · fundraising." },
] as const;

export const toolStack = [
  "TI C2000",
  "PID",
  "Siemens NX",
  "Geomagic",
  "SOLIDWORKS",
  "MATLAB",
  "Python",
] as const;

export const certifications = [
  "Six Sigma Green Belt",
  "Lean Green Belt",
] as const;

export const research = {
  org: "Product Design Lab · UIUC",
  role: "URA",
  date: "Sep – Dec 2024",
  title: "GT40 Mk II Digital Twin → FIA LMH Redesign",
  takeaway: "Scan-to-homologation exterior redesign in NX.",
  telemetry: [
    { label: "Pipeline", value: "Scan → Twin → NX" },
    { label: "Reg", value: "FIA LMH" },
    { label: "Tools", value: "NX + Geomagic" },
    { label: "Output", value: "Symposium" },
  ],
  hotspots: [
    { id: "scan", label: "3D Scan & Twin", body: "Watertight mesh · Geomagic Design X." },
    { id: "nx", label: "NX Redesign", body: "Diffuser · sidepods · floor · wing surfaces." },
    { id: "lmh", label: "LMH Compliance", body: "Dimensional + aero homologation targets." },
    { id: "present", label: "Presented", body: "UIUC Research Symposium · ISE Conference." },
  ],
  tools: ["Siemens NX", "Geomagic Design X", "3D Scanning", "FIA LMH"],
} as const;

export const featuredProjects = [
  {
    id: "robot",
    featured: true,
    type: "Embedded · Perception · Controls",
    title: "Autonomous Robot Car",
    takeaway: "LiDAR/camera → planning → PID on TI C2000.",
    summary: "Full autonomy stack with HIL validation.",
    architectureNodes: [
      { id: "s", label: "Sensors", sub: "LiDAR · cam" },
      { id: "p", label: "Perception", sub: "fusion" },
      { id: "pl", label: "Planning", sub: "path" },
      { id: "c", label: "PID", sub: "closed-loop" },
      { id: "a", label: "Actuation", sub: "drive" },
      { id: "t", label: "Telemetry", sub: "UART/SPI" },
    ],
    architectureEdges: [
      { from: "s", to: "p" },
      { from: "p", to: "pl" },
      { from: "pl", to: "c" },
      { from: "c", to: "a" },
      { from: "a", to: "t" },
    ],
    telemetry: [
      { label: "Platform", value: "TI C2000" },
      { label: "I/O", value: "UART/SPI" },
      { label: "Debug", value: "JTAG" },
      { label: "Validate", value: "MATLAB" },
    ],
    annotations: [
      { id: "r1", tag: "Stability", note: "PID under sensor noise." },
      { id: "r2", tag: "Latency", note: "Perception-to-actuation budget." },
      { id: "r3", tag: "HIL", note: "Hardware-in-the-loop verification." },
    ],
    tools: ["C", "TI C2000", "LiDAR", "PID", "MATLAB"],
  },
  {
    id: "truss",
    featured: true,
    type: "Structural · Optimization",
    title: "Strike-Resistant Truss",
    takeaway: ">100 kN · redundant · −52% mass.",
    summary: "Statically redundant under member removal.",
    architectureNodes: [
      { id: "l", label: "Loads", sub: ">100 kN" },
      { id: "f", label: "FEA", sub: "forces" },
      { id: "s", label: "Size", sub: "members" },
      { id: "r", label: "Redundancy", sub: "removal" },
      { id: "o", label: "Optimize", sub: "−52%" },
    ],
    architectureEdges: [
      { from: "l", to: "f" },
      { from: "f", to: "s" },
      { from: "s", to: "r" },
      { from: "r", to: "o" },
    ],
    telemetry: [
      { label: "Load", value: ">100", unit: "kN" },
      { label: "Removal", value: "Stable" },
      { label: "Mass", value: "−52", unit: "%" },
      { label: "SF", value: ">1.5" },
    ],
    annotations: [
      { id: "t1", tag: "Buckling", note: "Yield + slenderness constraints." },
      { id: "t2", tag: "Redundancy", note: "Single-member loss case." },
      { id: "t3", tag: "Trade", note: "Mass vs. safety factor." },
    ],
    tools: ["FEA", "Optimization", "Structural"],
  },
] as const;

export const experiences = [
  {
    id: "neutrinos",
    role: "AI Platform Enablement Intern",
    org: "Neutrinos",
    date: "Mar 2026 – Present",
    impact: "4-tier framework",
    telemetry: [
      { label: "Platforms", value: "3+" },
      { label: "Framework", value: "4-tier" },
      { label: "Model", value: "Freemium" },
    ],
    tags: ["Requirements", "Benchmarking", "Leadership deck"],
  },
  {
    id: "ewb",
    role: "External VP",
    org: "EWB UIUC",
    date: "Nov 2024 – Jan 2026",
    impact: "$50K raised",
    telemetry: [
      { label: "Raised", value: "$50K" },
      { label: "YoY", value: "+20", unit: "%" },
      { label: "Reach", value: "30K+", unit: "people" },
    ],
    tags: ["Sponsorship", "Donor pipeline", "Strategy"],
  },
  {
    id: "iise",
    role: "Mentorship Director",
    org: "IISE",
    date: "Apr 2024 – May 2025",
    impact: "350% growth",
    telemetry: [
      { label: "Growth", value: "350", unit: "%" },
      { label: "Participants", value: "50+" },
      { label: "Channels", value: "3" },
    ],
    tags: ["Program design", "MS Project", "Engagement"],
  },
] as const;

export const skillGroups = [
  {
    id: "mech",
    title: "Mechanical Engineering",
    skills: ["GD&T", "DFM", "FEA", "Structural Analysis", "Rapid Prototyping", "Testing"],
    proof: "Truss optimization · load cases",
  },
  {
    id: "cad",
    title: "CAD / CAE",
    skills: ["Siemens NX", "SOLIDWORKS", "Fusion 360", "Geomagic Design X", "3D Scanning"],
    proof: "GT40 digital twin · LMH redesign",
  },
  {
    id: "embedded",
    title: "Embedded & Controls",
    skills: ["PID", "Embedded C", "UART/SPI", "JTAG", "LiDAR", "Signal Conditioning"],
    proof: "Autonomous robot car · C2000",
  },
  {
    id: "code",
    title: "Programming",
    skills: ["C/C++", "Python", "MATLAB", "Java", "Git"],
    proof: "Perception stack · validation scripts",
  },
  {
    id: "product",
    title: "Product & Systems",
    skills: ["Requirements", "Trade Studies", "Verification", "Technical Writing"],
    proof: "Neutrinos platform analysis",
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["LabVIEW", "Simulink", "Microsoft Project", "JIRA"],
    proof: "HIL · program coordination",
  },
] as const;
