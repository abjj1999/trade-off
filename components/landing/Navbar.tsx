import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/80 px-6 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
            <ArrowRightLeft className="h-5 w-5" />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Trade Off
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#workflow" className="hover:text-white">
            Workflow
          </Link>
          <Link href="#preview" className="hover:text-white">
            Preview
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden text-slate-300 hover:bg-white/10 hover:text-white md:inline-flex"
          >
            Sign in
          </Button>

          <Button className="bg-indigo-500 hover:bg-indigo-400">
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
}
