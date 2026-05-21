const steps = [
  {
    title: "Add card traded in",
    description:
      "Enter the customer card, condition, and notes. Trade Off looks up the market price.",
  },
  {
    title: "Add card traded out",
    description:
      "Enter the vendor card leaving inventory so both sides of the trade are visible.",
  },
  {
    title: "Apply vendor trade rate",
    description:
      "Set the trade percentage and calculate the customer’s adjusted trade value.",
  },
  {
    title: "Review the final deal",
    description:
      "See profit, cash difference, and a simple deal rating before accepting.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-300">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            From trade offer to decision.
          </h2>
          <p className="mt-4 text-slate-400">
            Compare both sides of the deal, calculate the vendor value, and know
            whether the trade makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-semibold text-indigo-300">
                {index + 1}
              </div>

              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
