import { permanentRedirect } from "next/navigation";

export default function LegacyPrivateCoachingPage() {
  permanentRedirect("/coaching/private-coaching");
}
