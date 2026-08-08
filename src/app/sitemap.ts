import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/about/approach",
  "/about/team",
  "/about/safety-standards",
  "/classes-camps",
  "/classes-camps/classes",
  "/classes-camps/holiday-camps",
  "/classes-camps/summer-camp",
  "/pods-groups",
  "/pods-groups/request",
  "/contact",
  "/faq",
  "/gallery",
  "/parties-private-events",
  "/parties-private-events/request",
  "/plan",
  "/privacy",
  "/register",
  "/schools-businesses",
  "/schools-businesses/request",
  "/schools-businesses/events",
  "/schools-businesses/programming",
  "/schools-businesses/pe-curriculum-after-school",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://lasportsworld.com${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
  }));
}
