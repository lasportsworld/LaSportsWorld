export const participantAgeOptions = [
  { value: "0.5", label: "6 to 11 months" },
  { value: "1", label: "1 year" },
  ...Array.from({ length: 16 }, (_, index) => {
    const age = index + 2;
    return { value: String(age), label: `${age} years` };
  }),
];

export function isSupportedParticipantAge(age: number) {
  return age === 0.5 || (Number.isInteger(age) && age >= 1 && age <= 17);
}

export function formatParticipantAge(age: number) {
  if (age === 0.5) return "6 to 11 months";
  if (age === 1) return "1 year";
  return `${age} years`;
}
