import items from "@/data/items/items";
import type { Class, Item, Rarity, Slot, StatType } from "dso-database-types";
import type { NextRequest } from "next/server";

type Message = {
	className: Class;
	slot?: Slot;
	stat?: StatType | StatType[];
	rarity?: Rarity;
};

export async function GET(req: NextRequest) {
	const data = (await req.json()) as Message;
	const { className, slot, stat, rarity } = data;
	const filteredItems = items.filter((item) => {
		return (
			item.class === className &&
			(slot === undefined || item.slot === slot) &&
			(stat === undefined ||
				(Array.isArray(stat) ? stat.every((stat) => findStat(item, stat)) : findStat(item, stat))) &&
			(rarity === undefined || item.rarity === rarity)
		);
	});
	return Response.json(filteredItems);
}

function findStat(item: Item, stat: StatType): boolean {
	return (item.stats.some((itemStat) => itemStat.stat === stat) ||
		((item.rarity === "Set Item" || item.rarity === "Mythic Item") &&
			item.set?.bonus.some((bonus) => bonus.value === stat)) ||
		((item.rarity === "Unique Item" || item.rarity === "Mythic Item") &&
			item.uniqueBonus?.some((bonus) => bonus.value === stat))) as boolean;
}
