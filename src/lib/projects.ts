export type ProjectImage = {
  src: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  dateRange: string;
  description: string;
  longDescription?: string;
  images?: ProjectImage[];
  videos?: string[];
};

export const projects: Project[] = [
  {
    slug: "mechatronics",
    title: "Mechatronics",
    subtitle: "Arduino‑based robot",
    organization: "Stanford University",
    dateRange: "January 2025 – Present",
    description:
      "Building a competition robot in ME210 using Arduino, custom circuitry, and software‑based PWM for precise motor control.",
    longDescription:
      "In ME210 I am part of a small team building a fully autonomous Arduino‑based robot from the ground up. I prototype mechanisms, design and solder custom PCBs, and write low‑level C code to coordinate sensors, motors, and game logic. The focus is on fast iteration, squeezing performance out of simple hardware, and making the robot robust enough to survive real‑world competition runs.",
    images: [
      { src: "/photos/RobotKindaOld.jpg", caption: "Early chassis prototype with motor mounts" },
      { src: "/photos/PWM.jpg", caption: "PWM signal testing on the oscilloscope" },
      { src: "/photos/Bandpass%20filter.jpg", caption: "Bandpass filter circuit for sensor input" }
    ]
  },
  {
    slug: "flight-club",
    title: "Flight Club",
    subtitle: "DBF Manufacturing Member",
    organization: "Stanford Flight Club",
    dateRange: "Sept 2025 – Present",
    description:
      "Designing and manufacturing composite airframes and 3D‑printed parts for a high‑performance RC racing plane.",
    longDescription:
      "As part of Stanford Flight Club's Design/Build/Fly team, I help take our RC racing plane from CAD to the flight line. I design and machine molds, lay up and vacuum‑bag composite skins, and fabricate 3D‑printed components for wing structures and fuselage details. A lot of the work is about turning fragile concepts into repeatable, lightweight structures that can handle aggressive flight envelopes.",
    images: [
      { src: "/photos/Fuslage.png", caption: "Fuselage mold ready for layup" },
      { src: "/photos/WingDesign.png", caption: "Wing geometry iteration in CAD" },
      { src: "/photos/VaccummingComposite.jpg", caption: "Vacuum‑bagging a composite skin" }
    ]
  },
  {
    slug: "custom-pc-tuning",
    title: "Custom PC Tuning/Building",
    subtitle: "Hardware & benchmarking",
    organization: "Personal",
    dateRange: "2019 – Present",
    description:
      "Designing and tuning custom desktop builds with an emphasis on thermals, noise, and benchmark performance.",
    longDescription:
      "I build and tune custom PCs end‑to‑end: selecting parts, assembling the system, and then iterating on thermals, acoustics, and stability. I experiment with different cooling layouts, fan curves, and mild overclocking while tracking performance using tools like Novabench and stress tests. The goal is a stable daily‑driver that still feels fast, quiet, and thermally efficient.",
    images: [
      { src: "/photos/Novabench.png", caption: "Novabench score after latest tuning pass" },
      { src: "/photos/Cl.png", caption: "CPU cooler clearance check" },
      { src: "/photos/Red.png", caption: "Final build with cable management" }
    ]
  },
  {
    slug: "running",
    title: "Competitive Track Athlete",
    subtitle: "XC/TF & Stanford Run Club",
    organization: "High school & Stanford",
    dateRange: "Sept 2020 – Present",
    description:
      "Competing and training year‑round, from leading a high school varsity team to running with Stanford's club community.",
    longDescription:
      "Running has been a constant thread through high school and college. As a captain I helped set training plans, organize team culture, and lead workouts that took us to the state meet twice. At Stanford I continue to train with club teams, using structured mileage, strength work, and race‑specific sessions to keep improving while balancing academics and engineering projects.",
    images: []
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
