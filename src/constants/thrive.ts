export interface ThriveSlide {
  image: string;
  alt: string;
  badgeTitle: string;
  badgeSubtitle: string;
  badgeIcon: string;
}

export interface ThrivePillFeature {
  id: string;
  title: string;
  subtitle: string;
  iconType: "user" | "barchart" | "heart";
}

export const THRIVE_SLIDES: ThriveSlide[] = [
  {
    image: "/thrive-team-meeting.jpg",
    alt: "PeoplesHR team collaborating in a modern office",
    badgeTitle: "Empowered Teams",
    badgeSubtitle: "Connecting people & possibility",
    badgeIcon: "✦",
  },
  {
    image: "/thrive-hr-consultation.jpg",
    alt: "Supportive 1-on-1 HR mentoring and career development",
    badgeTitle: "People-First Culture",
    badgeSubtitle: "Fostering growth & well-being",
    badgeIcon: "★",
  },
  {
    image: "/thrive-team-celebration.jpg",
    alt: "Diverse teams thriving together with modern HR tools",
    badgeTitle: "Modern Experience",
    badgeSubtitle: "Simplified at every stage",
    badgeIcon: "♥",
  },
];

export const THRIVE_PILL_FEATURES: ThrivePillFeature[] = [
  {
    id: "efficient-operations",
    title: "More efficient",
    subtitle: "HR operations",
    iconType: "user",
  },
  {
    id: "workforce-engagement",
    title: "Stronger",
    subtitle: "workforce engagement",
    iconType: "barchart",
  },
  {
    id: "better-experience",
    title: "A better work",
    subtitle: "experience for everyone",
    iconType: "heart",
  },
];

export const THRIVE_CONTENT = {
  eyebrow: "BUILT FOR PEOPLE, POWERED BY POSSIBILITY",
  titlePart1: "Give your people ",
  titleHighlight: "more room to thrive",
  description:
    "Give your HR team the tools to focus on what matters most — your people. PeoplesHR makes it easier to manage, engage and support your workforce every stage.",
};
