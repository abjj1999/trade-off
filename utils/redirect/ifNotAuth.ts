import { redirect } from "next/navigation";

import { createClient } from "../supabase/server";
import { cookies } from "next/headers";

export async function redirectIfNotAuth(path = "/login") {
  const cookieStore = await cookies();

  const supabase = await createClient(cookieStore);
  const { data } = await supabase.auth.getUser();
  if (!data?.user) {
    redirect(path);
  }

  return data.user;
}
