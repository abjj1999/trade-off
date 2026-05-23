import Image from "next/image";
import { Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { TradeProduct } from "./TradeSideSection";

export default function TradeProductCard({
  product,
  onRemove,
}: {
  product: TradeProduct;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-24 w-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <p className="text-sm text-slate-500">Product</p>

        <div className="mt-1 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">{product.name}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-slate-300">
                {product.condition}
              </Badge>

              <Badge className="bg-white/10 text-slate-300">
                {product.variant}
              </Badge>

              <Badge className="bg-indigo-500/10 text-indigo-300">
                Qty: {product.quantity}
              </Badge>

              <Badge className="bg-indigo-500/10 text-indigo-300">
                ${(product.price * product.quantity).toFixed(2)}
              </Badge>
            </div>
          </div>

          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={onRemove}
            className="border-red-500/20 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:text-red-200"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
