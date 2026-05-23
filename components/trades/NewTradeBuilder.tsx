"use client";

import { useMemo, useState } from "react";
import TradeSideSection, { TradeProduct } from "./TradeSideSection";
import TradeNumbersSummary from "./TradeNumbersSummary";
import { Button } from "@/components/ui/button";

export default function NewTradeBuilder() {
  const [goingIn, setGoingIn] = useState<TradeProduct[]>([]);
  const [goingOut, setGoingOut] = useState<TradeProduct[]>([]);
  const [tradePercent, setTradePercent] = useState("80");

  const numbers = useMemo(() => {
    const inTotal = goingIn.reduce((sum, item) => sum + item.price, 0);
    const outTotal = goingOut.reduce((sum, item) => sum + item.price, 0);

    const adjustedInValue = inTotal * (Number(tradePercent || 0) / 100);
    const cashDifference = outTotal - adjustedInValue;
    return {
      inTotal,
      outTotal,
      adjustedInValue,
      cashDifference,
    };
  }, [goingIn, goingOut, tradePercent]);

  const handleFinalizeTrade = async () => {
    const payload = {
      goingIn,
      goingOut,
      tradePercent: Number(tradePercent),
      ...numbers,
    };

    console.log("Send to backend:", payload);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">New Trade</h2>
        <p className="mt-1 text-sm text-slate-400">
          Add the products coming in and going out, then review the cash
          difference.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <TradeSideSection
          title="Cards coming in"
          products={goingIn}
          setProducts={setGoingIn}
          showTradePercent
          tradePercent={tradePercent}
          setTradePercent={setTradePercent}
        />

        <TradeSideSection
          title="Cards going out"
          products={goingOut}
          setProducts={setGoingOut}
        />
      </div>

      <TradeNumbersSummary numbers={numbers} />

      <div className="flex justify-end">
        <Button
          onClick={handleFinalizeTrade}
          className="h-11 bg-indigo-500 px-6 hover:bg-indigo-400"
        >
          Finalize Trade
        </Button>
      </div>
    </div>
  );
}
