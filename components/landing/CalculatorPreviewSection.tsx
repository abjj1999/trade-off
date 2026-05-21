import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CalculatorPreviewSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-5xl">
            Know the deal before you accept it
          </h2>

          <p className="mt-5 text-zinc-400">
            Trade Off helps vendors calculate what a card is worth to them, what
            the customer needs to bring, and how much profit the trade creates.
          </p>
        </div>

        <Card className="border-blue-500/20 bg-zinc-900 text-white shadow-2xl">
          <CardContent className="p-6">
            <div className="rounded-xl bg-zinc-950 p-5">
              <p className="text-sm text-zinc-400">Card</p>
              <h3 className="mt-1 text-2xl font-bold">Charizard ex</h3>
              <p className="text-sm text-zinc-500">Near Mint</p>
            </div>

            <Separator className="my-5 bg-zinc-800" />

            <div className="space-y-4">
              <Row label="Market Price" value="$100.00" />
              <Row label="Trade Percent" value="80%" />
              <Row label="Vendor Trade Value" value="$80.00" />
              <Row label="Customer Needed Value" value="$125.00" />
              <Row label="Net Profit" value="$25.00" highlight />
            </div>

            <div className="mt-6 rounded-xl bg-green-500/10 p-4 text-green-400">
              Good deal for vendor
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className={highlight ? "font-bold text-yellow-400" : "font-bold"}>
        {value}
      </span>
    </div>
  );
}
