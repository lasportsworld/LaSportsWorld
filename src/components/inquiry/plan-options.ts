export const planPaths = [
  "private-coaching",
  "group-coaching",
  "birthday-party",
  "school-after-school",
  "camp-programming",
  "community-event",
  "custom-recurring",
  "unsure",
] as const;

export type PlanPath = (typeof planPaths)[number];
