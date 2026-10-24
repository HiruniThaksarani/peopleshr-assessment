export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatarInitials: string;
  quote: string;
  metric: string;
  rating: number;
}

export const TESTIMONIALS_CONTENT = {
  eyebrow: "Customer Stories & Impact",
  titlePart1: "Trusted by Leaders.",
  titleHighlight: "Loved by Teams.",
  subtitle:
    "See how high-growth enterprises and industry leaders streamline people operations, automate complex payroll, and eliminate administrative friction with PeoplesHR.",
  stats: [
    { label: "Customer Satisfaction", value: "99.4%" },
    { label: "Hours Saved Annually", value: "350k+" },
    { label: "Payroll Accuracy", value: "100%" },
    { label: "Enterprise Users", value: "250k+" },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Lin",
    role: "Chief People Officer",
    company: "FinScale Technologies",
    industry: "Fintech & Banking",
    avatarInitials: "SL",
    quote:
      "Switching to PeoplesHR cut our multi-entity payroll processing from five days down to under four hours. The statutory compliance and tax calculations happen automatically without errors.",
    metric: "92% faster payroll runs",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "VP of Human Resources",
    company: "Apex Logistics Global",
    industry: "Supply Chain & Logistics",
    avatarInitials: "MV",
    quote:
      "Managing shifts and attendance across 18 regional fulfillment centers used to be chaos. PeoplesHR gave us real-time biometric visibility and stopped attendance leakages completely.",
    metric: "Saved 420+ admin hours",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Head of People Operations",
    company: "CloudCore Media",
    industry: "Digital Media & Tech",
    avatarInitials: "ER",
    quote:
      "Our employees actually love using the self-service mobile app. Leave requests, tax documents, and digital payslips are accessed instantly without needing HR intervention.",
    metric: "98% employee adoption",
    rating: 5,
  },
  {
    id: 4,
    name: "David K. O'Connor",
    role: "Chief Financial Officer",
    company: "Vanguard Capital Partners",
    industry: "Financial Services",
    avatarInitials: "DO",
    quote:
      "The HR ROI Calculator wasn't just marketing hype—it was exact. Within six months of rollout, PeoplesHR delivered a measurable 3.4x return on our investment across our regional workforce.",
    metric: "3.4x validated ROI",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Director of Talent Acquisition",
    company: "BioHealth Innovations",
    industry: "Healthcare & Life Sciences",
    avatarInitials: "PS",
    quote:
      "The applicant tracking and continuous performance review modules helped us scale from 250 to 900 employees without needing to expand our administrative HR team.",
    metric: "Scaled 3.5x headcount",
    rating: 5,
  },
  {
    id: 6,
    name: "Alexander Wright",
    role: "Chief Technology Officer",
    company: "Nexus Cloud Systems",
    industry: "Enterprise Software",
    avatarInitials: "AW",
    quote:
      "The open API architecture and enterprise SSO made security compliance seamless. PeoplesHR plugged into our IT ecosystem and Slack channels in days, not months.",
    metric: "Zero compliance issues",
    rating: 5,
  },
  {
    id: 7,
    name: "Chloe Bennett",
    role: "HR Operations Lead",
    company: "Metro Retail Network",
    industry: "Omnichannel Retail",
    avatarInitials: "CB",
    quote:
      "Handling dynamic shift rosters and overtime pay for 1,400 store associates was a nightmare before PeoplesHR. Payroll calculation discrepancies dropped to absolute zero.",
    metric: "0% payroll discrepancies",
    rating: 5,
  },
  {
    id: 8,
    name: "Jonathan Blake",
    role: "Managing Director",
    company: "Horizon Manufacturing",
    industry: "Industrial Manufacturing",
    avatarInitials: "JB",
    quote:
      "Enterprise reliability paired with the intuitive ease of modern consumer software. PeoplesHR is by far the most robust, dependable HCM platform our company has ever deployed.",
    metric: "99.98% platform reliability",
    rating: 5,
  },
];
