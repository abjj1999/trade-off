import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Percent, Search, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Market value lookup",
    description: "Pull current card value using TCGplayer market data.",
  },
  {
    icon: Percent,
    title: "Trade percent math",
    description: "Apply your vendor rate and calculate adjusted trade value.",
  },
  {
    icon: BarChart3,
    title: "Profit visibility",
    description: "See trade value, cash difference, and estimated net profit.",
  },
  {
    icon: ShieldCheck,
    title: "Deal confidence",
    description: "Rate trades as good, fair, or bad before accepting.",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-300">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Everything a vendor needs to review a trade.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="border-white/10 bg-white/[0.03] text-white"
              >
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-indigo-300" />
                  <h3 className="mt-6 font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
