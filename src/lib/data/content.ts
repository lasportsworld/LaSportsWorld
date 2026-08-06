export const siteConfig = {
  name: "LA Sports World",
  tagline: "Youth",
  description: "Youth sports coaching, classes, camps, and parties in Los Angeles for ages 6 months to 17 years.",
  phone: "(213) 301-6226",
  email: "info@lasportsworld.com",
  address: {
    name: "Mogen David",
    street: "9717 Pico Blvd",
    city: "Los Angeles, CA 90035",
    note: "On Daniels Dr",
  },
};

export const sports = [
  { name: "Basketball", icon: "/images/basketball_icon.jpg" },
  { name: "Flag Football", icon: "/images/football_icon.jpg" },
  { name: "Soccer", icon: "/images/soccer_icon.jpg" },
  { name: "Baseball", icon: "/images/summer_camp_icon.jpg" },
  { name: "Volleyball", icon: null },
  { name: "Surfing", icon: null },
  { name: "Street Hockey", icon: null },
  { name: "Personal Fitness", icon: null },
];

export const programs = [
  {
    slug: "private-lessons",
    title: "Private Coaching",
    subtitle: "1-on-1 Coaching",
    image: "/images/LASW_Private_Lessons_Header_Image.jpg",
    description:
      "One-on-one coaching tailored to your child's needs, experience, and goals, from first exposure through focused development.",
    sports: ["Basketball", "Soccer", "Football", "Baseball", "Volleyball", "Surfing"],
    highlights: [
      "Ball Handling & Shot Technique",
      "Defense (Team and Individual)",
      "Passing & Footwork",
      "Advanced Techniques",
      "High School Prep",
    ],
    cta: "Request Coaching",
  },
  {
    slug: "clinics",
    title: "Group Coaching & Pods",
    subtitle: "Small-Group Coaching",
    image: "/images/LASW_Clinics_Header_Image.jpg",
    description:
      "Eight- or ten-week programs for groups of six or more athletes. We cover sport fundamentals, teamwork, and proper technique for first-timers through advanced players.",
    sports: ["Basketball", "Soccer", "Football", "Baseball", "Volleyball"],
    highlights: [
      "Ball Handling & Shooting",
      "Defense & Teamwork",
      "Fakes, Tricks & Footwork",
      "Weight Training Access",
      "8–10 Week Program",
    ],
    cta: "Explore Group Coaching",
  },
  {
    slug: "parties",
    title: "Parties & Events",
    subtitle: "Sports Birthday Packages",
    image: "/images/LASW_Parties_Header_Image.jpg",
    description:
      "Make your child's birthday unforgettable. Our party package delivers 2 hours of action-packed fun with any two sports of your choice. Larger crowds? We scale for any event size.",
    sports: ["Any Two Sports of Your Choice"],
    highlights: [
      "$495 for 2 hours",
      "Up to 30 guests ($10 each additional)",
      "Choose any 2 sports/activities",
      "Custom video available",
      "Invitations & goody bags on request",
    ],
    cta: "Book a Party",
  },
];

export const camps = [
  {
    slug: "summer",
    title: "Summer Camp",
    subtitle: "Grades Pre-1 through 8th",
    image: "/images/Summer-Camp-Header-Image.jpg",
    description:
      "Our flagship multi-week summer camp blends elite sports training with unforgettable activities. Campers are grouped by grade into divisions and enjoy everything from beach days to amusement parks.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Surfing", "Volleyball", "Color War", "Capture the Flag"],
    activities: ["Amusement Parks", "Beach Day", "Movie Night", "Mud Run", "Water Parks", "Bowling", "Party Bus"],
    note: "Royal Camp exclusive offering for small groups of up to 13 campers with one or two dedicated coaches.",
  },
  {
    slug: "winter",
    title: "Winter Camp",
    subtitle: "January Break",
    image: "/images/Winter-Camp-Header-Image.jpg",
    description:
      "Three weeks of skill enhancement and fun during winter break. Campers in three divisions (Pre-1–2, 3rd–5th, 6th–8th) enjoy sports plus special activities and optional travel events.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Kickball", "Street Hockey", "Volleyball"],
    activities: ["Shacharit / Learn", "Amusement Parks", "Water Parks", "Bowling", "Daily Raffle"],
  },
  {
    slug: "day",
    title: "Day Camp",
    subtitle: "School's Out? We're On!",
    image: "/images/Day-Camp-Header-Image.jpg",
    description:
      "Flexible camp sessions for school-off days, from one day to a full week. LA Sports World keeps kids active and engaged whenever school is out.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Surfing", "Volleyball", "Ultimate Frisbee"],
    activities: ["Beach Day", "Movie Night", "Mud Run", "Water Parks", "Bowling", "Daily Raffle"],
  },
  {
    slug: "passover",
    title: "Passover Camp",
    subtitle: "Matza Ballers",
    image: "/images/Passover-Camp-Header-Image-3.jpg",
    description:
      "Our Passover camp, \"Matza Ballers,\" runs during the holiday for grades Pre-1 through 6th. It combines skill development, movement, and Mensch values.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Surfing", "Volleyball", "Color War"],
    activities: ["Shacharit / Learn", "Beach Day", "Water Parks", "Daily Raffle", "Movie Night"],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Eitan Jalali",
    role: "Co-Owner",
  },
  {
    name: "Adina Mashiach",
    role: "Co-Owner",
  },
];

export const campRules = [
  "All campers must respect their coaches and follow directions each day.",
  "No products containing nuts (peanuts, almonds, cashews, etc.) at camp.",
  "Use appropriate language at all times. No swearing.",
  "Treat all campers with respect and kindness. No name-calling or teasing.",
  "No cell phones, iPads, video game consoles, or toys.",
  "Be ready to practice sportsmanship, teamwork, leadership, and athleticism.",
  "Leave gum at home (choking hazard and ruins equipment).",
  "Play within the boundaries at all times.",
  "Bring athletic shoes, sunscreen, a hat, healthy snack, and lunch every day.",
  "Camp will be a great experience for all children who follow the rules!",
];
