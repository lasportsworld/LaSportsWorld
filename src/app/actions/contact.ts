"use server";

import { addNoteToDeal, createDeal, findOrCreatePerson, DEAL_LABEL_IDS } from "@/lib/pipedrive";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const SERVICE_LABELS: Record<string, string> = {
  "birthday-party": "Birthday Party",
  general: "General Question",
};

const SERVICE_DEAL_LABELS: Record<string, number> = {
  "birthday-party": DEAL_LABEL_IDS.birthdayParty,
  general: DEAL_LABEL_IDS.general,
};

function fieldLabel(key: string) {
  return key
    .replace("field_", "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = ((formData.get("firstName") as string) || "").trim();
  const phone = ((formData.get("phone") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim().toLowerCase();
  const service = ((formData.get("service") as string) || "").trim();
  const details = ((formData.get("details") as string) || "").trim();

  if (!firstName || !phone || !service) {
    return {
      status: "error",
      message: "Please fill in your name, phone number, and what you need.",
    };
  }

  const labelId = SERVICE_DEAL_LABELS[service];
  if (!labelId) {
    return { status: "error", message: "Please choose what you need from the list." };
  }

  const extraFields: string[] = [];
  const rawFields: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (key.startsWith("field_") && typeof value === "string" && value.trim()) {
      rawFields[key] = value.trim();
      extraFields.push(`${fieldLabel(key)}: ${value.trim()}`);
    }
  });

  const serviceLabel = SERVICE_LABELS[service] || service;
  const sourcePage = ((formData.get("sourcePage") as string) || "").trim();
  const landingPage = ((formData.get("landingPage") as string) || "").trim();
  const utmSource = ((formData.get("utm_source") as string) || "").trim();
  const utmMedium = ((formData.get("utm_medium") as string) || "").trim();
  const utmCampaign = ((formData.get("utm_campaign") as string) || "").trim();
  const timestamp = ((formData.get("timestamp") as string) || "").trim();

  try {
    const personId = await findOrCreatePerson({ name: firstName, email, phone });

    const dealId = await createDeal({
      title: `${serviceLabel} — ${firstName}`,
      personId,
      labelId,
      eventDate: rawFields.field_event_date,
      eventLocation: rawFields.field_neighborhood,
    });

    const noteLines = [
      `Website inquiry: ${serviceLabel}`,
      `Phone: ${phone}`,
      ...extraFields,
      details ? `Details: ${details}` : null,
      "",
      sourcePage ? `Source page: ${sourcePage}` : null,
      landingPage ? `Landing page: ${landingPage}` : null,
      utmSource || utmMedium || utmCampaign
        ? `UTM: source=${utmSource || "-"} medium=${utmMedium || "-"} campaign=${utmCampaign || "-"}`
        : null,
      timestamp ? `Submitted: ${timestamp}` : null,
      "Form version: v3 (Pipedrive)",
    ].filter((line) => line !== null);

    await addNoteToDeal(dealId, noteLines.join("\n"));

    return { status: "success" };
  } catch (error) {
    console.error("Pipedrive contact submission failed:", error);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
