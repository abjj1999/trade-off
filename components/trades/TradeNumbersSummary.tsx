import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TradeNumbers = {
  inTotal: number;
  outTotal: number;
  adjustedInValue: number;
  cashDifference: number;
};

export default function TradeNumbersSummary({
  numbers,
}: {
  numbers: TradeNumbers;
}) {
  const cashDifference = numbers.outTotal - numbers.adjustedInValue;

  const vendorPays = cashDifference < 0;

  return (
    <Card className="border-white/10 bg-white/[0.03] text-white">
      <CardHeader>
        <CardTitle className="text-lg">Trade summary</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">
          <SummaryCard label="Cards coming in" value={numbers.inTotal} />
          <SummaryCard
            label="Adjusted trade value"
            value={numbers.adjustedInValue}
          />
          <SummaryCard label="Cards going out" value={numbers.outTotal} />

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-slate-500">Cash difference</p>

            <p
              className={`mt-2 text-2xl font-semibold ${
                vendorPays ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {cashDifference < 0 ? "-" : "+"}$
              {Math.abs(cashDifference).toFixed(2)}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              {vendorPays ? "Vendor pays customer" : "Customer pays vendor"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">
        ${value.toFixed(2)}
      </p>
    </div>
  );
}
