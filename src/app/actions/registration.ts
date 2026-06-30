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
  const programType = formData.get("program_type") as string;
  const parentName = formData.get("parent_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const childName = formData.get("child_name") as string;
  const childAge = formData.get("child_age") as string;
  const notes = formData.get("notes") as string;

  if (!programType || !parentName || !email || !phone || !childName || !childAge) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase.from("registrations").insert({
    program_type: programType,
    parent_name: parentName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    child_name: childName.trim(),
    child_age: childAge.trim(),
    notes: notes?.trim() || null,
  });

  if (error) {
    console.error("Registration insert error:", error);
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}
