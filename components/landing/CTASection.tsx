import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center md:p-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Start analyzing trades with confidence.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Built for TCG vendors who want faster decisions, cleaner trade math,
          and better visibility into every deal.
        </p>

        <Button size="lg" className="mt-8 bg-indigo-500 hover:bg-indigo-400">
          Get started
        </Button>
      </div>
    </section>
  );
}
