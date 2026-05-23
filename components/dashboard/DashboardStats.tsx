import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRightLeft,
  DollarSign,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    label: "Total trades",
    value: "0",
    icon: ArrowRightLeft,
  },
  {
    label: "Trade value",
    value: "$0.00",
    icon: DollarSign,
  },
  {
    label: "Estimated profit",
    value: "$0.00",
    icon: TrendingUp,
  },
  {
    label: "Good deals",
    value: "0",
    icon: BadgeCheck,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            className="border-white/10 bg-white/[0.03] text-white"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <Icon className="h-5 w-5 text-indigo-300" />
              </div>

              <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
