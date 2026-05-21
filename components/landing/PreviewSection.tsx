import TradePreviewCard from "./TradePreviewCard";

export default function PreviewSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-300">
            Trade analysis
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A clean dashboard for fast booth decisions.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Trade Off keeps the trade simple: what is coming in, what is going
            out, what the values are, and whether the vendor wins the deal.
          </p>
        </div>

        <TradePreviewCard />
      </div>
    </section>
  );
}
