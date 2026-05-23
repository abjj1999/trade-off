import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function DashboardLayout({
  title = "Dashboard",
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#08090c] text-white">
      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col">
          <MobileNav />

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

              <p className="mt-1 text-sm text-slate-400">
                Review trades, values, and vendor performance.
              </p>
            </div>

            <Button className="gap-2 bg-indigo-500 hover:bg-indigo-400">
              <Plus className="h-4 w-4" />
              New Trade
            </Button>
          </div>

          <div className="flex-1 p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
