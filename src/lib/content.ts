export const site = {
  name: "Keerat Singh Bhasin",
  title: "Systems Engineering & Design @ UIUC",
  positioning: "Mechanical design · embedded firmware · bench validation",
  availability: "Available for Fall 2026 Internships & Co-ops",
  gpa: "3.7",
  school: "UIUC",
  grad: "May 2027",
  email: "kbhasin2@illinois.edu",
  linkedin: "https://linkedin.com/in/keerat-singh-bhasin",
  phone: "(217) 904-0607",
} as const;

export const heroTelemetry = [
  { label: "GPA", value: "3.7", unit: "/ 4.0" },
  { label: "Domain", value: "Mech + controls" },
  { label: "CAD", value: "NX · Abaqus" },
  { label: "Grad", value: "May 2027" },
] as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutTakeaway =
  "CAD, firmware, and bench test on one integrated development path.";

export const aboutAnnotations = [
  {
    id: "a1",
    tag: "Robot car",
    note: "LiDAR/camera sensing → path planning → PID motor control on embedded hardware.",
  },
  {
    id: "a2",
    tag: "FEA handle",
    note: "100 lb load case in Abaqus — 51% mass reduction while holding FOS ≥ 7.",
  },
  {
    id: "a3",
    tag: "GT40 twin",
    note: "3D scan → watertight mesh → NX exterior per FIA LMH dimensional rules.",
  },
] as const;

export const aboutTimeline = [
  {
    id: "systems",
    label: "Integration",
    detail: "Requirements through bench verification on hardware.",
  },
  {
    id: "robotics",
    label: "Embedded controls",
    detail: "Sense-plan-act loop: sensing, path planning, and PID motor control.",
  },
  {
    id: "research",
    label: "Scan-to-CAD",
    detail: "Reverse engineering and regulation-driven exterior redesign.",
  },
  {
    id: "leadership",
    label: "Programs",
    detail: "Research delivery · mentorship · fundraising.",
  },
] as const;

/** Grouped by domain — not a flattened "stack" row. */
export const toolDomains = {
  cad: ["Siemens NX", "SOLIDWORKS", "Geomagic Design X", "Abaqus"],
  analysis: ["MATLAB", "FEA", "LabVIEW"],
  embedded: ["Embedded C", "PID control", "UART/SPI", "JTAG"],
} as const;

export const certifications = [
  "Six Sigma Green Belt",
  "Lean Green Belt",
] as const;

export const research = {
  org: "Product Design Lab · UIUC",
  role: "URA",
  date: "Sep – Dec 2024",
  title: "GT40 Mk II Digital Twin → FIA LMH Redesign",
  takeaway: "3D scan → watertight mesh → NX exterior per FIA LMH rules.",
  telemetry: [
    { label: "Pipeline", value: "Scan → mesh → NX" },
    { label: "Regulation", value: "FIA LMH" },
    { label: "CAD", value: "NX · Geomagic" },
    { label: "Delivered", value: "Symposium" },
  ],
  hotspots: [
    {
      id: "scan",
      label: "3D scan",
      body: "Point cloud to watertight mesh in Geomagic Design X.",
    },
    {
      id: "nx",
      label: "NX redesign",
      body: "Diffuser, sidepods, floor plane, and rear wing surfaces.",
    },
    {
      id: "lmh",
      label: "LMH compliance",
      body: "Wheelbase, overhangs, and aero envelopes per 2024 FIA LMH regs.",
    },
    {
      id: "present",
      label: "Presented",
      body: "UIUC Research Symposium · ISE Student Conference.",
    },
  ],
  tools: ["Siemens NX", "Geomagic Design X", "3D scanning", "FIA LMH"],
} as const;

export const featuredProjects = [
  {
    id: "robot",
    featured: true,
    type: "Sensing · planning · embedded control",
    title: "Autonomous Robot Car",
    takeaway:
      "LiDAR/camera input, path planning, and closed-loop PID motor control on embedded hardware.",
    summary:
      "Sense-plan-act architecture bench-tested with MATLAB and LabVIEW.",
    architectureNodes: [
      { id: "s", label: "Sensors", sub: "LiDAR · camera" },
      { id: "p", label: "Perception", sub: "obstacle data" },
      { id: "pl", label: "Planning", sub: "path setpoints" },
      { id: "c", label: "Control", sub: "PID loops" },
      { id: "a", label: "Actuation", sub: "motor PWM" },
      { id: "io", label: "Buses", sub: "UART · SPI" },
    ],
    architectureEdges: [
      { from: "s", to: "p" },
      { from: "p", to: "pl" },
      { from: "pl", to: "c" },
      { from: "c", to: "a" },
      { from: "a", to: "io" },
    ],
    telemetry: [
      { label: "Control", value: "PID loops" },
      { label: "Sensing", value: "LiDAR · cam" },
      { label: "Debug", value: "JTAG" },
      { label: "Validation", value: "MATLAB" },
    ],
    annotations: [
      {
        id: "r1",
        tag: "Control",
        note: "PID tuning under LiDAR/camera measurement noise.",
      },
      {
        id: "r2",
        tag: "Timing",
        note: "Latency budget from perception sample to motor command.",
      },
      {
        id: "r3",
        tag: "Verification",
        note: "Oscilloscope and MATLAB checks before field runs.",
      },
    ],
    tools: ["Embedded C", "TI C2000", "LiDAR", "MATLAB", "LabVIEW"],
  },
  {
    id: "fea-handle",
    featured: true,
    type: "Structural analysis · design optimization",
    title: "FEA-Optimized 3D-Printed Handle",
    takeaway: "100 lb load · FOS ≥ 7 · 0.292 lb — 51% below mass limit.",
    summary:
      "Iterative geometry optimization in Abaqus to minimize mass while satisfying structural constraints under a 100 lb distributed load.",
    architectureNodes: [
      { id: "l", label: "Load", sub: "100 lb dist." },
      { id: "f", label: "FEA solve", sub: "Abaqus" },
      { id: "s", label: "Stress map", sub: "concentrations" },
      { id: "g", label: "Geometry", sub: "fillets · wall" },
      { id: "v", label: "Validate", sub: "FOS ≥ 7" },
    ],
    architectureEdges: [
      { from: "l", to: "f" },
      { from: "f", to: "s" },
      { from: "s", to: "g" },
      { from: "g", to: "v" },
      { from: "v", to: "f" },
    ],
    telemetry: [
      { label: "Load", value: "100", unit: "lb" },
      { label: "FOS", value: "≥ 7" },
      { label: "Final mass", value: "0.292", unit: "lb" },
      { label: "Reduction", value: "51", unit: "%" },
    ],
    annotations: [
      {
        id: "t1",
        tag: "Load case",
        note: "100 lb distributed load on 3D-printed nylon handle.",
      },
      {
        id: "t2",
        tag: "Optimization",
        note: "Fillets, thickness grading, and geometry edits to reduce stress concentrations and cut mass.",
      },
      {
        id: "t3",
        tag: "Result",
        note: "0.292 lb final — 51% below the 0.6 lb mass limit with FOS ≥ 7 maintained throughout.",
      },
    ],
    tools: ["Abaqus", "FEA", "3D-printed nylon", "Design optimization"],
  },
] as const;

export const experiences = [
  {
    id: "neutrinos",
    role: "AI Platform Enablement Intern",
    org: "Neutrinos",
    date: "Mar 2026 – May 2026",
    impact: "8-dimension platform evaluation",
    telemetry: [
      { label: "Platforms", value: "5" },
      { label: "Framework", value: "8 dims" },
      { label: "Deliverable", value: "Strategy deck" },
    ],
    tags: ["Competitive benchmarking", "Certification architecture", "Leadership review"],
  },
  {
    id: "ewb",
    role: "External VP",
    org: "EWB UIUC",
    date: "Nov 2024 – Jan 2026",
    impact: "$50K raised",
    telemetry: [
      { label: "Raised", value: "$50K" },
      { label: "YoY growth", value: "+20", unit: "%" },
      { label: "Pipeline", value: "Corporate · alumni" },
    ],
    tags: ["Sponsorship", "Donor pipeline", "Grant outreach"],
  },
  {
    id: "iise",
    role: "Mentorship Director",
    org: "IISE",
    date: "Apr 2024 – May 2025",
    impact: "350% registration growth",
    telemetry: [
      { label: "Growth", value: "350", unit: "%" },
      { label: "Participants", value: "50+" },
      { label: "Channels", value: "3" },
    ],
    tags: ["Program design", "MS Project", "Outreach"],
  },
] as const;

export const skillGroups = [
  {
    id: "mech",
    title: "Mechanical Engineering",
    skills: [
      "GD&T",
      "Design for manufacturability",
      "FEA",
      "Structural analysis",
      "Rapid prototyping",
      "Physical testing",
    ],
    proof: "Handle FEA · 100 lb load · 51% mass reduction · FOS ≥ 7",
  },
  {
    id: "cad",
    title: "CAD / CAE",
    skills: [
      "Siemens NX",
      "SOLIDWORKS",
      "Fusion 360",
      "Geomagic Design X",
      "3D scanning",
    ],
    proof: "GT40 scan-to-mesh · LMH exterior redesign",
  },
  {
    id: "embedded",
    title: "Embedded & Controls",
    skills: [
      "Embedded C",
      "TI C2000",
      "PID control",
      "UART/SPI",
      "JTAG debugging",
      "LiDAR sensing",
      "Signal conditioning",
    ],
    proof: "Robot car firmware · motor control loops",
  },
  {
    id: "code",
    title: "Programming",
    skills: ["C/C++", "Python", "MATLAB", "Java", "Git"],
    proof: "Robot perception code · validation scripts",
  },
  {
    id: "product",
    title: "Product & Systems",
    skills: [
      "Requirements definition",
      "Trade studies",
      "Verification planning",
      "Technical writing",
    ],
    proof: "Neutrinos platform benchmarking · req. docs",
  },
  {
    id: "tools",
    title: "Lab & Program Tools",
    skills: ["LabVIEW", "Simulink", "Microsoft Project", "JIRA"],
    proof: "Signal capture · validation scripting",
  },
] as const;
