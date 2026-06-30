export const siteConfig = {
  name: "LA Sports World",
  tagline: "Youth",
  description: "Elite youth sports coaching in Los Angeles. Private lessons, camps, clinics, and parties for ages 4–18.",
  phone: "(310) 555-0100",
  email: "info@lasportsworld.com",
  address: {
    name: "Mogen David",
    street: "9717 Pico Blvd",
    city: "Los Angeles, CA 90019",
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
    title: "Private Lessons",
    subtitle: "1-on-1 Coaching",
    image: "/images/LASW_Private_Lessons_Header_Image.jpg",
    description:
      "One-on-one coaching tailored to your child's specific needs. We address poor habits, advanced techniques, and skills across all ages and sports — including prep for high school competition.",
    sports: ["Basketball", "Soccer", "Football", "Baseball", "Volleyball", "Surfing"],
    highlights: [
      "Ball Handling & Shot Technique",
      "Defense (Team and Individual)",
      "Passing & Footwork",
      "Advanced Techniques",
      "High School Prep",
    ],
    cta: "Book a Lesson",
  },
  {
    slug: "clinics",
    title: "Clinics",
    subtitle: "Group Training",
    image: "/images/LASW_Clinics_Header_Image.jpg",
    description:
      "8 or 10 week programs for groups of 6 or more athletes. We cover sport fundamentals, teamwork, and proper technique — from first-timers to advanced players. Includes access to Basement Fitness gym.",
    sports: ["Basketball", "Soccer", "Football", "Baseball", "Volleyball"],
    highlights: [
      "Ball Handling & Shooting",
      "Defense & Teamwork",
      "Fakes, Tricks & Footwork",
      "Weight Training Access",
      "8–10 Week Program",
    ],
    cta: "Join a Clinic",
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
    note: "Royal Camp exclusive offering available — small groups of up to 13 campers with 1–2 dedicated coaches.",
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
      "Flexible camp sessions for school-off days — whether it's one day or a full week. LA Sports World keeps kids active, skilled, and having a blast whenever school is out.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Surfing", "Volleyball", "Ultimate Frisbee"],
    activities: ["Beach Day", "Movie Night", "Mud Run", "Water Parks", "Bowling", "Daily Raffle"],
  },
  {
    slug: "passover",
    title: "Passover Camp",
    subtitle: "Matza Ballers",
    image: "/images/Passover-Camp-Header-Image-3.jpg",
    description:
      "Our beloved Passover camp — \"Matza Ballers\" — runs during the Passover holiday for grades Pre-1 through 6th. Skill development, fun, and Mensch values all in one unforgettable week.",
    sports: ["Basketball", "Flag Football", "Baseball", "Soccer", "Surfing", "Volleyball", "Color War"],
    activities: ["Shacharit / Learn", "Beach Day", "Water Parks", "Daily Raffle", "Movie Night"],
  },
];

export const testimonials = [
  {
    id: 1,
    author: "Yael M.",
    text: "Coach David at LA Sports World is simply the best of the best. My son instantly bonded with David. David has enabled him to try sports and physical challenges he would never have considered before, and has helped my son overcome some of his fears involving sports. David exudes patience and calm, while pushing my son to be the best he can be. For kids who want to build confidence in physical activities or learn to excel at a certain sport, it doesn't get better than LA Sports World.",
  },
  {
    id: 2,
    author: "Aaron R.",
    text: "LA Sports World offers top notch coaching for our kids. The coaching staff are knowledgeable, patient, caring & achieve great outcomes. I'm also involved in LA Sports World flag football program & love it!! It's an organized program that attracts a great group of competitive weekend warriors. Thanks to David & Co for always bringing their A Game!!",
  },
  {
    id: 3,
    author: "Gabriel O.",
    text: "LA Sports World is a first class company that delivers and exceeds on all of its promises. David tends to all queries and is a pleasure to deal with. Have been playing in their flag football leagues for a couple of years now and love it. The competition is great and the people that continue to join have been a pleasure. I highly recommend LA Sports World, and cannot wait for the upcoming football season.",
  },
  {
    id: 4,
    author: "Lisa K.",
    text: "My 6 year old son absolutely loves Coach David. He's great with the kids. Not only do they learn skills, but they have a great time and feel good about themselves and their progress. We just signed up with another \"season\" of soccer with him. Would not hesitate to give my highest recommendation.",
  },
  {
    id: 5,
    author: "Rachel S.",
    text: "We are big fans! After trying two other coaches for our son we are so happy we found David. He has been coaching our son (age 7) for over a year. He is fun, reliable, professional, and has achieved great results! My son loves the time he spends with David and looks forward to it every week! He is a great coach and a real mensch!",
  },
];

export const staff = [
  {
    name: "David Ouaknine",
    role: "Founder & Head Coach",
    image: "/images/coach_david2.jpg",
    bio: "David is the founder and head coach of LA Sports World. With over 15 years coaching youth ages 5–18, he specializes in basketball, football, soccer, baseball, volleyball, and surfing. He attended Yeshiva University of Los Angeles and went on to coach championship-winning high school soccer teams. He also runs Basement Fitness gym in the Pico-Robertson neighborhood.",
  },
  {
    name: "Coach Ben",
    role: "Assistant Coach",
    image: "/images/coach_ben1.jpg",
    bio: "A skilled and energetic coach with extensive experience working with youth athletes across multiple sports.",
  },
  {
    name: "Coach Faraz",
    role: "Assistant Coach",
    image: "/images/coach_faraz1.jpg",
    bio: "Dedicated to developing young athletes with a focus on fundamentals and building confidence through sport.",
  },
  {
    name: "Coach Gal",
    role: "Assistant Coach",
    image: "/images/coach_gal1.jpg",
    bio: "Brings passion and expertise to every session, helping campers reach their full athletic potential.",
  },
  {
    name: "Coach Tommy",
    role: "Assistant Coach",
    image: "/images/coach_tommy1.jpg",
    bio: "An enthusiastic coach who creates a fun, safe environment where athletes can thrive and grow.",
  },
];

export const campRules = [
  "All campers must respect their coaches and follow directions each day.",
  "No products containing nuts (peanuts, almonds, cashews, etc.) at camp.",
  "Appropriate language at all times — no swearing.",
  "Treat all campers with respect and kindness — no name-calling or teasing.",
  "No cell phones, iPads, video game consoles, or toys.",
  "Be ready to practice sportsmanship, teamwork, leadership, and athleticism.",
  "Leave gum at home (choking hazard and ruins equipment).",
  "Play within the boundaries at all times.",
  "Bring athletic shoes, sunscreen, a hat, healthy snack, and lunch every day.",
  "Camp will be a great experience for all children who follow the rules!",
];
