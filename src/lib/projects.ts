export type ProjectImage = {
  src: string;
  caption: string;
};

export type ProjectVideo = {
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
  videos?: ProjectVideo[];
};

export const projects: Project[] = [
  {
    slug: "mechatronics",
    title: "Arduino Based 'Curling' Robot",
    subtitle: "Mechatronics (ME210)",
    organization: "Stanford University",
    dateRange: "February 2025 – March 2025",
    description:
      "Building a competition robot in ME210 using Arduino, custom circuitry, and software‑based PWM for precise motor control.",
    longDescription:
      "As a part of my mechatronics (ME210) class, we have been taught how to implement Arduino-based code, develop circuits to implement sensors and utilize motors. As a final group project my team (team PHINeas) and I were tasked to develop a custom robot to deliver pucks to a target as a 'curling' robot. In just 2 weeks, we built a custom 3D printed robot with a custom bended ramp, conveyor belt, and driving system using motors and Arduinos. I took heavy part in designing the whole robot and building the conveyor belt, driving system and also took charge of the navigation system. We tried IR sensors using a bandpass filter to detect the IR beacons, line sensors and ultrasonic sensors to detect the walls. Eventually we went with ultrasonic sensors to detect the walls for our initial test (Beat the Brick) and added line sensors as well for our competition run. We implemented full code in Arduino to make the fully navigational robot with our only input being reloading it. This was an extremely fun project where my team and I had to successfully adapt to challenges to complete the goal. As a bonus we were also able to get 2nd place among 20 other teams in the competition!",
    images: [
      { src: "/photos/CompetitionResults.jpeg", caption: "Competition results, team PHINeas, 2nd place" },
      { src: "/photos/CompetitioPic.jpeg", caption: "Competition day" },
      { src: "/photos/FinalPictureRobot.jpeg", caption: "Beat the Brick build" },
      { src: "/photos/InitialConveyorDesign.jpeg", caption: "Initial conveyor design" },
      { src: "/photos/Bandpass%20filter.jpg", caption: "Bandpass filter circuit to filter out light for proper IR sensing" },
      { src: "/photos/SettingUpUltrasonic.jpeg", caption: "Setting up, testing and adding custom 3D printed case to ultrasonic sensors" },
      { src: "/photos/RobotKindaOld.jpg", caption: "Early chassis prototype with motor mounts" },
      { src: "/photos/PWM.jpg", caption: "PWM signal testing on the oscilloscope" }
    ],
    videos: [
      { src: "/videos/FinalRobotBuildVid.mp4", caption: "Final robot build" },
      { src: "/videos/BeatTheBrickVid.mp4", caption: "Beat the Brick first test run" }
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
      "As a part of Stanford Flight Club's Design, Build, Fly team, I work as a manufacturing and team member to design and build our competition plane as well as smaller projects such as a mini custom RC plane. I have learned a lot of CAD, 3D printing, worked with composites, analyzed wing structures and aerodynamics, designed a banner deploy system, and had a lot of fun working with our team.",
    images: [
      { src: "/photos/Fuslage.png", caption: "Fuselage CAD initial design for competition plane" },
      { src: "/photos/VaccummingComposite.jpg", caption: "Vacuum‑bagging landing gear composite in industrial oven" },
      { src: "/photos/WingDesign.png", caption: "XFLR5 wing geometry for mini RC plane" },
      { src: "/photos/Red.png", caption: "XFLR5 lift and drag analysis for mini RC plane" },
      { src: "/photos/Cl.png", caption: "XFLR5 wing lift analysis for mini RC plane" }
    ]
  },
  {
    slug: "custom-truss-design",
    title: "Custom Truss Design",
    subtitle: "Team Member",
    organization: "ENGR15 Stanford",
    dateRange: "November 2025",
    description:
      "Designed and optimized trusses to minimize weight and maximize load-bearing length in ENGR14.",
    longDescription:
      "As a part of Intro to Solid Mechanics and Statics (ENGR14) my team and I designed and optimized two trusses to minimize their weight and maximize the length at which it could carry 2kg. We performed calculations to determine the optimal cross-sectional area and truss design, which we then built and successfully tested. We made a 56cm long truss and scored top 25% in the class for weight and length, having a lot of fun building and testing along the way.",
    images: [
      { src: "/photos/Truss1.jpeg", caption: "Final design" },
      { src: "/photos/Truss2.jpeg", caption: "Final design" },
      { src: "/photos/Truss3.jpeg", caption: "Final design" },
      { src: "/photos/TrussCalcultations.jpeg", caption: "Simulating our design" },
      { src: "/photos/SheetTrussCalc.jpg", caption: "Thickness/1st mode of failure calculations" },
      { src: "/photos/individualPieces.jpg", caption: "Individual truss pieces" }
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
      "Ever since my first PC build in 2019, I have found myself interested in custom PC building, tuning and benchmarking. I love to stay up to date on new hardware, follow new releases and others' builds. I frequently tinker with my system, optimizing cooling and overclocking components to get the best performance.",
    images: [
      { src: "/photos/Novabench.png", caption: "Novabench score after latest tuning pass" },
      { src: "/photos/PC.jpeg", caption: "Custom PC build" }
    ],
    videos: [{ src: "/videos/2026-03-03%2000-11-00%20(online-video-cutter.com).mp4", caption: "PC build showcase" }]
  },
  {
    slug: "running",
    title: "Competitive Track/Cross Country Athlete",
    subtitle: "XC/TF & Stanford Run Club",
    organization: "High school & Stanford",
    dateRange: "Sept 2020 – Present",
    description:
      "Competing and training year‑round, from leading a high school varsity team to running with Stanford's club community.",
    longDescription:
      "Running has been a passion of mine ever since freshman year of high school till now. I have ran competitively since, being team captain of my high school XC/TF teams for 3 years and leading us to the CIF twice and the State meet once. I continuously battled through injury and spent countless hours trying to walk onto the Stanford XC/TF teams freshman year. This didn't work out due to injury but I still hold running very close as it has shaped my values, perseverance, work ethic and who I am today.",
    images: [
      { src: "/photos/06B42438-05AE-4BCD-A254-B6B77F7FBB19.JPG", caption: "League Meet 2024" },
      { src: "/photos/IMG_2863.jpeg", caption: "State Meet 2023" },
      { src: "/photos/IMG_5663.JPG", caption: "CIF Finals 2023" },
      { src: "/photos/IMG_8955.jpg", caption: "Stanford Run Club 800m" }
    ],
    videos: [{ src: "/videos/IMG_4868.mp4", caption: "San Francisco local race win" }]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
