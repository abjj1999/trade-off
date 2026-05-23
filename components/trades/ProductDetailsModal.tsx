"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TradeProduct } from "./TradeSideSection";

type BaseProduct = Omit<TradeProduct, "condition" | "variant" | "quantity">;

const conditions = [
  "Near Mint",
  "Lightly Played",
  "Moderately Played",
  "Heavily Played",
  "Damaged",
];

const variants = ["Normal", "Reverse Holo", "Holo", "1st Edition"];

export default function ProductDetailsModal({
  product,
  open,
  onOpenChange,
  onConfirm,
}: {
  product: BaseProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (product: TradeProduct) => void;
}) {
  const [condition, setCondition] = useState("Near Mint");
  const [variant, setVariant] = useState("Normal");
  const [quantity, setQuantity] = useState("1");

  if (!product) return null;

  const handleConfirm = () => {
    onConfirm({
      ...product,
      condition,
      variant,
      quantity: Number(quantity || 1),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-[#0d1017] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Product details</DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-28 w-20 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-500">
              Market price: ${product.price.toFixed(2)}
            </p>
          </div>
        </div>

        <Field label="Condition">
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger className="border-white/10 bg-black/20 text-white">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="border-white/10 bg-[#0d1017] text-white">
              {conditions.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Variant">
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger className="border-white/10 bg-black/20 text-white">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="border-white/10 bg-[#0d1017] text-white">
              {variants.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Quantity">
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className="border-white/10 bg-black/20 text-white"
          />
        </Field>

        <Button
          type="button"
          onClick={handleConfirm}
          className="h-11 bg-indigo-500 hover:bg-indigo-400"
        >
          Add to trade
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-slate-400">{label}</label>
      {children}
    </div>
  );
}
