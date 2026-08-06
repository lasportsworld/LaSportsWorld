import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/about/approach",
  "/about/coaches-safety",
  "/about/service-area",
  "/classes-camps",
  "/classes-camps/classes",
  "/classes-camps/holiday-camps",
  "/classes-camps/summer-camp",
  "/coaching",
  "/coaching/groups-pods",
  "/coaching/private-coaching",
  "/contact",
  "/faq",
  "/gallery",
  "/parties",
  "/privacy",
  "/register",
  "/schools-organizations",
  "/schools-organizations/camps-activity-programming",
  "/schools-organizations/community-events",
  "/schools-organizations/enrichment-after-school",
  "/schools-organizations/school-pe",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://lasportsworld.com${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
  }));
}
