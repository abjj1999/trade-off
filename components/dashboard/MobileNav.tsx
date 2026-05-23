"use client";

import Link from "next/link";
import {
  ArrowRightLeft,
  LayoutDashboard,
  Menu,
  PlusCircle,
  Settings,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export default function MobileNav() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-[#0d1017] px-5 lg:hidden">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
          <ArrowRightLeft className="h-5 w-5" />
        </div>

        <span className="font-semibold">Trade Off</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-white/10 bg-white/5"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-56 border-white/10 bg-[#0d1017] text-white"
        >
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <DropdownMenuItem key={link.href} asChild>
                <Link
                  href={link.href}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuItem className="flex cursor-pointer items-center gap-3 text-red-400">
            <LogOut className="h-4 w-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
