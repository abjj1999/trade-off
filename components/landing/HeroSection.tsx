import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TradePreviewCard from "./TradePreviewCard";

export default function HeroSection() {
  return (
    <section className="border-b border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <Badge className="mb-6 border-white/10 bg-white/5 text-slate-300">
            Vendor-first TCG trade analyzer
          </Badge>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Make better card trades with clear numbers.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Trade Off helps vendors compare cards traded in and cards traded
            out, look up market value, apply trade percent, and calculate profit
            before accepting a deal.
          </p>

          <div className="mt-9 flex gap-4">
            <Button size="lg" className="bg-indigo-500 hover:bg-indigo-400">
              Get started
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              View workflow
            </Button>
          </div>
        </div>

        <TradePreviewCard />
      </div>
    </section>
  );
}
