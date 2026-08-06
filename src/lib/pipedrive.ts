const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

// Existing Pipedrive account structure (LA Sports World), confirmed via read-only
// API calls before building this integration, so we reuse what's already there
// instead of creating duplicate fields/labels.
export const PRIVATE_EVENTS_PIPELINE_ID = 3;
export const PRIVATE_EVENTS_LEAD_STAGE_ID = 14;

export const DEAL_LABEL_IDS = {
  privateCoaching: 43,
  birthdayParty: 44,
  general: 46, // "LASW Program" reused as the generic/general-question label
} as const;

function apiToken() {
  const token = process.env.PIPEDRIVE_API_TOKEN;
  if (!token) throw new Error("PIPEDRIVE_API_TOKEN is not configured");
  return token;
}

async function pipedriveRequest<T>(
  path: string,
  options: { method?: string; body?: Record<string, unknown>; query?: Record<string, string> } = {}
): Promise<T> {
  const url = new URL(`${PIPEDRIVE_BASE}${path}`);
  url.searchParams.set("api_token", apiToken());
  if (options.query) {
    for (const [key, value] of Object.entries(options.query)) {
      url.searchParams.set(key, value);
    }
  }

  const res = await fetch(url.toString(), {
    method: options.method || "GET",
    headers: { "Content-Type": "application/json" },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(`Pipedrive request failed (${path}): ${JSON.stringify(json)}`);
  }
  return json.data as T;
}

interface PipedrivePerson {
  id: number;
}

export async function findPersonByEmailOrPhone(
  email: string,
  phone: string
): Promise<number | null> {
  const term = email || phone;
  if (!term) return null;

  const result = await pipedriveRequest<{ items: Array<{ item: { id: number } }> } | null>(
    "/persons/search",
    {
      query: {
        term,
        fields: email ? "email" : "phone",
        exact_match: "true",
      },
    }
  );

  const match = result?.items?.[0]?.item;
  return match ? match.id : null;
}

export async function createPerson(params: {
  name: string;
  email?: string;
  phone?: string;
}): Promise<number> {
  const person = await pipedriveRequest<PipedrivePerson>("/persons", {
    method: "POST",
    body: {
      name: params.name,
      email: params.email ? [{ value: params.email, primary: true }] : undefined,
      phone: params.phone ? [{ value: params.phone, primary: true }] : undefined,
    },
  });
  return person.id;
}

export async function findOrCreatePerson(params: {
  name: string;
  email?: string;
  phone?: string;
}): Promise<number> {
  const existingId = await findPersonByEmailOrPhone(params.email || "", params.phone || "");
  if (existingId) return existingId;
  return createPerson(params);
}

interface PipedriveDeal {
  id: number;
}

export async function createDeal(params: {
  title: string;
  personId: number;
  labelId: number;
  eventDate?: string;
  eventLocation?: string;
}): Promise<number> {
  const deal = await pipedriveRequest<PipedriveDeal>("/deals", {
    method: "POST",
    body: {
      title: params.title,
      person_id: params.personId,
      pipeline_id: PRIVATE_EVENTS_PIPELINE_ID,
      stage_id: PRIVATE_EVENTS_LEAD_STAGE_ID,
      label: String(params.labelId),
      ...(params.eventDate ? { b0c76e6b1be7f041831a04e30d83e16c98535410: params.eventDate } : {}),
      ...(params.eventLocation
        ? { fcfba240a50f7d852cd5568bbe43c9c4f677119c: params.eventLocation }
        : {}),
    },
  });
  return deal.id;
}

export async function addNoteToDeal(dealId: number, content: string): Promise<void> {
  await pipedriveRequest("/notes", {
    method: "POST",
    body: { content, deal_id: dealId },
  });
}
