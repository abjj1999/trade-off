"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  ArrowRightLeft,
  PlusCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/app/(auth)/actions";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Trades",
    href: "/dashboard/trades",
    icon: ArrowRightLeft,
  },
  {
    label: "New Trade",
    href: "/dashboard/trades/new",
    icon: PlusCircle,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r border-white/10 bg-[#0d1017] p-5 lg:block">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
          <ArrowRightLeft className="h-5 w-5" />
        </div>

        <div>
          <p className="font-semibold">Trade Off</p>
          <p className="text-xs text-slate-500">Vendor dashboard</p>
        </div>
      </Link>

      <nav className="mt-10 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition
          ${
            pathname === link.href
              ? "border border-indigo-500/20 bg-indigo-500/10 text-white"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }`}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-5 right-5">
        <form>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-red-400 hover:bg-white/5 hover:text-red-500"
            formAction={logoutAction}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </form>
      </div>
    </aside>
  );
}
