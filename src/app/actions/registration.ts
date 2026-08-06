"use server";

import { createClient } from "@supabase/supabase-js";

export type RegistrationState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitRegistration(
  _prev: RegistrationState,
  formData: FormData
): Promise<RegistrationState> {
  if (String(formData.get("website") || "").trim()) return { status: "success" };

  const programType = String(formData.get("program_type") || "").trim();
  const parentName = String(formData.get("parent_name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const phone = String(formData.get("phone") || "").trim();
  const childName = String(formData.get("child_name") || "").trim();
  const childAge = String(formData.get("child_age") || "").trim();
  const notes = String(formData.get("notes") || "").trim();

  if (!programType || !parentName || !email || !phone || !childName || !childAge) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return { status: "error", message: "Please enter a valid phone number." };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Registration submission is unavailable: server configuration is missing.");
    return {
      status: "error",
      message: "We couldn’t send your registration. Please call (213) 301-6226 for help.",
    };
  }

  try {
    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { error } = await supabase.from("registrations").insert({
      program_type: programType,
      parent_name: parentName,
      email,
      phone,
      child_name: childName,
      child_age: childAge,
      notes: notes || null,
    });

    if (error) throw error;
    return { status: "success" };
  } catch (error) {
    console.error("Registration insert error:", error);
    return {
      status: "error",
      message: "We couldn’t send your registration. Please try again or call (213) 301-6226.",
    };
  }
}
