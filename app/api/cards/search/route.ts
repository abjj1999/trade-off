import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const setName = searchParams.get("set");

  if (!name || name.length < 2) {
    return NextResponse.json({ cards: [] });
  }

  const queryParts = [`name:${name}*`];

  if (setName && setName.length >= 2) {
    queryParts.push(`set.name:"${setName}"`);
  }

  const q = queryParts.join(" ");

  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
      q,
    )}&orderBy=-set.releaseDate&pageSize=20`,
  );

  if (!response.ok) {
    return NextResponse.json(
      { cards: [], error: "Failed to fetch cards" },
      { status: response.status },
    );
  }

  const data = await response.json();

  const cards = data.data.map((card: any) => {
    const tcgPlayerPrice =
      card.tcgplayer?.prices?.holofoil?.market ??
      card.tcgplayer?.prices?.reverseHolofoil?.market ??
      card.tcgplayer?.prices?.normal?.market ??
      null;

    const cardMarketPriceEur =
      card.cardmarket?.prices?.averageSellPrice ??
      card.cardmarket?.prices?.trendPrice ??
      null;

    const cardMarketPriceUsd = cardMarketPriceEur
      ? Number((cardMarketPriceEur * 1.09).toFixed(2))
      : null;

    return {
      id: card.id,
      name: card.name,
      image: card.images?.small,
      set: card.set?.name,
      rarity: card.rarity,
      releaseDate: card.set?.releaseDate,
      tcgPlayerPrice,
      cardMarketPriceEur,
      cardMarketPriceUsd,
      price: tcgPlayerPrice ?? cardMarketPriceUsd ?? 0,
    };
  });

  return NextResponse.json({ cards });
}
