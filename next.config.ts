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
      { source: "/pods", destination: "/coaching/groups-pods", permanent: true },
      { source: "/coaching/small-groups", destination: "/coaching/groups-pods", permanent: true },
      { source: "/birthday-parties", destination: "/parties", permanent: true },
      { source: "/classes-camps/holiday", destination: "/classes-camps/holiday-camps", permanent: true },
      { source: "/classes-camps/summer", destination: "/classes-camps/summer-camp", permanent: true },
      { source: "/organizations", destination: "/schools-organizations", permanent: true },
      { source: "/organizations/school-pe", destination: "/schools-organizations/school-pe", permanent: true },
      { source: "/organizations/enrichment", destination: "/schools-organizations/enrichment-after-school", permanent: true },
      { source: "/organizations/camps", destination: "/schools-organizations/camps-activity-programming", permanent: true },
      { source: "/organizations/events", destination: "/schools-organizations/community-events", permanent: true },
      { source: "/about/coach-standards", destination: "/about/coaches-safety", permanent: true },
      { source: "/service-area", destination: "/about/service-area", permanent: true },
    ];
  },
};

export default nextConfig;
