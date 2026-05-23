"use client";

import { useEffect, useState } from "react";
import { Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProductDetailsModal from "./ProductDetailsModal";
import type { TradeProduct } from "./TradeSideSection";

type SearchProduct = Omit<
  TradeProduct,
  "condition" | "variant" | "quantity"
> & {
  set?: string;
  rarity?: string;
  releaseDate?: string;
};

export default function ProductSearchModal({
  open,
  onOpenChange,
  onAddProduct,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddProduct: (product: TradeProduct) => void;
}) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<SearchProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SearchProduct | null>(
    null,
  );

  useEffect(() => {
    if (search.trim().length < 2) {
      setProducts([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/cards/search?q=${search}`);
        const data = await res.json();
        setProducts(data.cards || []);
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-[#0d1017] p-0 text-white sm:max-w-3xl">
          <DialogHeader className="border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <DialogTitle className="text-xl">Search product</DialogTitle>
                <p className="mt-1 text-sm text-slate-400">
                  Search Pokémon cards by name.
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-5 p-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Charizard, Umbreon, Pikachu..."
                className="h-12 border-white/10 bg-black/20 pl-11 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500"
              />
            </div>

            {loading && <SearchSkeleton />}

            {!loading && products.length > 0 && (
              <div className="grid gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-indigo-500/30 hover:bg-white/[0.04] md:grid-cols-[88px_1fr_auto]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w-[88px] rounded-xl object-cover shadow-lg"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>

                        <Badge className="bg-indigo-500/10 text-indigo-300">
                          ${product.price.toFixed(2)}
                        </Badge>
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {product.set}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.rarity && (
                          <Badge className="bg-white/10 text-slate-300">
                            {product.rarity}
                          </Badge>
                        )}

                        {product.releaseDate && (
                          <Badge className="bg-white/10 text-slate-300">
                            {product.releaseDate}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-end md:items-center">
                      <Button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-indigo-500 hover:bg-indigo-400 md:w-auto"
                      >
                        Add product
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && search.length >= 2 && products.length === 0 && (
              <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-10 text-center">
                <p className="font-medium text-slate-300">No cards found</p>
                <p className="mt-2 text-sm text-slate-500">
                  Try another search term.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ProductDetailsModal
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedProduct(null);
        }}
        onConfirm={(completedProduct) => {
          onAddProduct(completedProduct);
          setSelectedProduct(null);
          onOpenChange(false);
          setSearch("");
          setProducts([]);
        }}
      />
    </>
  );
}

function SearchSkeleton() {
  return (
    <div className="grid gap-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 md:grid-cols-[88px_1fr_auto]"
        >
          <Skeleton className="h-32 w-[88px] rounded-xl bg-white/10" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-48 bg-white/10" />
            <Skeleton className="h-4 w-32 bg-white/10" />
            <Skeleton className="h-6 w-64 bg-white/10" />
          </div>

          <Skeleton className="h-10 w-28 bg-white/10" />
        </div>
      ))}
    </div>
  );
}
