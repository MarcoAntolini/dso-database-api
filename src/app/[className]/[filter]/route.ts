import items from "@/data/items";
import { validateClass, validateFilter } from "@/utils/validator";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { className: string; filter: string } }) {
	const className = validateClass(params.className);
	const { slot, stat, rarity } = validateFilter(params.filter);
	const filteredItems = items
		.filter((item) => item.class === className)
		.filter((item) => (slot !== "" ? (Array.isArray(slot) ? slot.includes(item.slot) : item.slot === slot) : false))
		.filter((item) =>
			stat !== ""
				? item.stats.some((itemStat) => itemStat.stat === stat) ||
				  ((item.rarity === "Set Item" || item.rarity === "Mythic Item") &&
						item.set?.bonus.some((bonus) => bonus.value === stat)) ||
				  ((item.rarity === "Unique Item" || item.rarity === "Mythic Item") &&
						item.uniqueBonus?.some((bonus) => bonus.value === stat))
				: false,
		)
		.filter((item) => (rarity !== "" ? item.rarity === rarity : false));
	return Response.json(filteredItems);
}
