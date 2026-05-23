"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProductSearchModal from "./ProductSearchModal";
import TradeProductCard from "./TradeProductCard";
import { Input } from "../ui/input";

export type TradeProduct = {
  id: string;
  name: string;
  image: string;
  condition: string;
  variant: string;
  quantity: number;
  price: number;
};

export default function TradeSideSection({
  title,
  products,
  setProducts,
  showTradePercent = false,
  tradePercent,
  setTradePercent,
}: {
  title: string;
  products: TradeProduct[];
  setProducts: Dispatch<SetStateAction<TradeProduct[]>>;
  showTradePercent?: boolean;
  tradePercent?: string;
  setTradePercent?: (value: string) => void;
}) {
  const [openProductModal, setOpenProductModal] = useState(false);

  const handleAddProduct = (product: TradeProduct) => {
    setProducts((prev) => [...prev, product]);
    setOpenProductModal(false);
  };

  const handleRemoveProduct = (productId: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  return (
    <>
      <Card className="border-white/10 bg-white/[0.03] text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2 bg-indigo-500 hover:bg-indigo-400">
                <Plus className="h-4 w-4" />
                Add
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="border-white/10 bg-[#0d1017] text-white"
            >
              <DropdownMenuItem
                onClick={() => setOpenProductModal(true)}
                className="cursor-pointer gap-2"
              >
                <Search className="h-4 w-4" />
                Search product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {showTradePercent &&
              tradePercent !== undefined &&
              setTradePercent && (
                <TradePercentCard
                  value={tradePercent}
                  onChange={setTradePercent}
                />
              )}

            {products.length === 0 ? (
              <EmptyState />
            ) : (
              products.map((product) => (
                <TradeProductCard
                  key={product.id}
                  product={product}
                  onRemove={() => handleRemoveProduct(product.id)}
                />
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <ProductSearchModal
        open={openProductModal}
        onOpenChange={setOpenProductModal}
        onAddProduct={handleAddProduct}
      />
    </>
  );
}

function TradePercentCard({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-slate-300">Trade %</p>
        <p className="text-xs text-slate-500">Vendor rate</p>
      </div>

      <div className="relative">
        <Input
          type="number"
          min={1}
          max={100}
          step={1}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-24 rounded-xl border border-white/10 bg-[#08090c] px-3 pr-7 text-center text-sm font-semibold text-indigo-300 outline-none focus:border-indigo-500"
        />

        <span className="pointer-events-none absolute right-3 top-2.5 text-xs text-slate-500">
          %
        </span>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20 p-6 text-center">
      <div>
        <p className="font-medium text-slate-300">No products added</p>
        <p className="mt-2 text-sm text-slate-500">
          Search for a card or sealed product to add it here.
        </p>
      </div>
    </div>
  );
}
