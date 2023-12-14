import items from "@/data/items/items";
import type { Bonus, Class, Item, Rarity, Slot, StatType } from "dso-database";
import type { NextRequest } from "next/server";

type Message = {
	className: Class;
	slot?: Slot | Slot[];
	stat?: StatType | StatType[];
	rarity?: Rarity;
	name?: string;
};

export async function POST(req: NextRequest) {
	const data = (await req.json()) as Message;
	const { className, slot, stat, rarity, name } = data;
	const filteredItems = items.filter((item) => {
		return (
			item.class === className &&
			(slot === undefined || (Array.isArray(slot) ? slot.includes(item.slot) : item.slot === slot)) &&
			(stat === undefined ||
				(Array.isArray(stat) ? stat.every((stat) => findStat(item, stat)) : findStat(item, stat))) &&
			(rarity === undefined || item.rarity === rarity) &&
			(name === undefined || item.name.toLowerCase().includes(name.toLowerCase()))
		);
	});
	return Response.json(filteredItems);
}

function findStat(item: Item, stat: StatType): boolean {
	return (item.stats.some((itemStat) => itemStat.stat === stat) ||
		((item.rarity === "Set Item" || item.rarity === "Mythic Item") &&
			item.set?.setBonus.some((bonus) => findInBonus(bonus.bonus, stat))) ||
		((item.rarity === "Unique Item" || item.rarity === "Mythic Item") &&
			item.uniqueBonus?.some((bonus) => findInBonus(bonus.bonus, stat)))) as boolean;
}

function findInBonus(bonus: Bonus, stat: StatType): boolean {
	if (typeof bonus === "string") {
		return bonus.includes(stat);
	}
	return bonus.stat === stat;
}
