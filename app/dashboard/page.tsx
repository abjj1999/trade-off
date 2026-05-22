import { Button } from "@/components/ui/button";
import { redirectIfNotAuth } from "@/utils/redirect/ifNotAuth";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import { logoutAction } from "../(auth)/actions";

const DashboardPage = async () => {
  const user = await redirectIfNotAuth();
  const supabase = await createClient();

  return (
    <section className="relative mx-auto max-w-5xl p-6">
      <header className="flex flex-col gap-2 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your Notes</h1>
          <p className="text-sm text-zinc-400">
            Signed in as <span className="text-zinc-200"></span>
          </p>
          {/* <LogoutButton /> */}
          <form>
            <Button formAction={logoutAction}> logout</Button>
          </form>
        </div>
      </header>
    </section>
  );
};

export default DashboardPage;
