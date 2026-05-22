"use server";
import { SignupFormValues, signupSchema } from "@/lib/validations/signup";
import { createActionClient } from "../../utils/supabase/actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signinSchema } from "@/lib/validations/signin";

export async function signupAction(formData: {
  username: string;
  email: string;
  businessName: string;
  password: string;
  confirmPassword: string;
}) {
  const validatedFields = signupSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: "Invalid form fields",
    };
  }
  const { email, password, username, businessName } = validatedFields.data;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(error);

  if (error) {
    return {
      error: error.message,
    };
  }
  const { error: vendorError } = await supabase.from("vendors").insert({
    id: data?.user?.id,
    username,
    business_name: businessName,
  });

  if (vendorError) {
    return {
      error: vendorError.message,
    };
  }
  redirect("/dashboard");
}

export async function signinAction(formData: {
  email: string;
  password: string;
}) {
  const supabase = await createActionClient();
  const validatedFields = signinSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: "Invalid form fields",
    };
  }
  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      error: error.message,
    };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  const supabase = await createActionClient();
  await supabase.auth.signOut();
  redirect("/signin");
}
