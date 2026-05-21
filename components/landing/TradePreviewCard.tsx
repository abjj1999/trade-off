import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";

export default function TradePreviewCard() {
  return (
    <Card className="border-white/10 bg-white/[0.03] text-white shadow-2xl">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Trade summary</p>
            <h3 className="text-xl font-semibold">Pending review</h3>
          </div>

          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
            Good deal
          </span>
        </div>

        <div className="grid gap-4">
          <TradeCard
            label="Card traded in"
            name="Umbreon VMAX"
            condition="Near Mint"
            value="$620.00"
          />

          <div className="flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-3">
              <ArrowRightLeft className="h-5 w-5 text-slate-300" />
            </div>
          </div>

          <TradeCard
            label="Card traded out"
            name="Charizard ex"
            condition="Lightly Played"
            value="$480.00"
          />
        </div>

        <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <SummaryRow label="Trade percent" value="80%" />
          <SummaryRow label="Trade-in value" value="$496.00" />
          <SummaryRow label="Cash difference" value="$16.00" />
          <SummaryRow label="Estimated profit" value="$32.00" highlight />
        </div>
      </CardContent>
    </Card>
  );
}

function TradeCard({
  label,
  name,
  condition,
  value,
}: {
  label: string;
  name: string;
  condition: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <h4 className="mt-2 font-semibold">{name}</h4>
          <p className="text-sm text-slate-500">{condition}</p>
        </div>

        <p className="font-medium text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span
        className={
          highlight ? "font-semibold text-indigo-300" : "text-slate-200"
        }
      >
        {value}
      </span>
    </div>
  );
}
