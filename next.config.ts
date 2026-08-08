import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lasportsworld.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/coaching", destination: "/pods-groups", permanent: true },
      { source: "/coaching/groups-pods", destination: "/pods-groups", permanent: true },
      { source: "/coaching/private", destination: "/pods-groups", permanent: true },
      { source: "/coaching/private-coaching", destination: "/pods-groups", permanent: true },
      { source: "/coaching/request", destination: "/pods-groups/request", permanent: true },
      { source: "/pods", destination: "/pods-groups", permanent: true },
      { source: "/coaching/small-groups", destination: "/pods-groups", permanent: true },
      { source: "/parties", destination: "/parties-private-events", permanent: true },
      { source: "/parties/request", destination: "/parties-private-events/request", permanent: true },
      { source: "/birthday-parties", destination: "/parties-private-events", permanent: true },
      { source: "/programs", destination: "/pods-groups", permanent: true },
      { source: "/programs/private-lessons", destination: "/pods-groups", permanent: true },
      { source: "/programs/clinics", destination: "/pods-groups", permanent: true },
      { source: "/programs/parties", destination: "/parties-private-events", permanent: true },
      { source: "/camps", destination: "/classes-camps", permanent: true },
      { source: "/camps/summer", destination: "/classes-camps/summer-camp", permanent: true },
      { source: "/camps/winter", destination: "/classes-camps/holiday-camps", permanent: true },
      { source: "/camps/day", destination: "/classes-camps/holiday-camps", permanent: true },
      { source: "/camps/passover", destination: "/classes-camps/holiday-camps", permanent: true },
      { source: "/registration", destination: "/register", permanent: true },
      { source: "/registration/private-lessons", destination: "/pods-groups/request?format=private", permanent: true },
      { source: "/registration/clinics", destination: "/pods-groups/request?format=group", permanent: true },
      { source: "/registration/parties", destination: "/parties-private-events/request", permanent: true },
      { source: "/classes-camps/holiday", destination: "/classes-camps/holiday-camps", permanent: true },
      { source: "/classes-camps/summer", destination: "/classes-camps/summer-camp", permanent: true },
      { source: "/schools-organizations", destination: "/schools-businesses", permanent: true },
      { source: "/schools-organizations/request", destination: "/schools-businesses/request", permanent: true },
      { source: "/schools-organizations/community-events", destination: "/schools-businesses/events", permanent: true },
      { source: "/schools-organizations/camps-activity-programming", destination: "/schools-businesses/programming", permanent: true },
      { source: "/schools-organizations/school-pe", destination: "/schools-businesses/pe-curriculum-after-school", permanent: true },
      { source: "/schools-organizations/enrichment-after-school", destination: "/schools-businesses/pe-curriculum-after-school", permanent: true },
      { source: "/organizations", destination: "/schools-businesses", permanent: true },
      { source: "/organizations/school-pe", destination: "/schools-businesses/pe-curriculum-after-school", permanent: true },
      { source: "/organizations/enrichment", destination: "/schools-businesses/pe-curriculum-after-school", permanent: true },
      { source: "/organizations/camps", destination: "/schools-businesses/programming", permanent: true },
      { source: "/organizations/events", destination: "/schools-businesses/events", permanent: true },
      { source: "/about/coaches-safety", destination: "/about/safety-standards", permanent: true },
      { source: "/about/coach-standards", destination: "/about/safety-standards", permanent: true },
      { source: "/service-area", destination: "/about/service-area", permanent: true },
    ];
  },
};

export default nextConfig;
