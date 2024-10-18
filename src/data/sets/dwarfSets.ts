import type { ItemSet } from "dso-database";

export const tacticalSet: ItemSet = {
	name: "Tactical Battle Armor",
	items: [
		"Tactical Hood",
		"Tactical Pauldrons",
		"Tactical Plate Armor",
		"Tactical Gloves",
		"Tactical Boots",
		"Tactical Belt",
		"Tactical Cannon",
	],
	setBonus: [
		{
			requiredItems: 2,
			bonus: {
				stat: "Damage",
				value: 4165,
			},
		},
		{
			requiredItems: 3,
			bonus: {
				stat: "Critical Value",
				value: 4331,
			},
		},
		{
			requiredItems: 4,
			bonus: {
				stat: "Attacks per Second",
				value: 4331,
			},
		},
		{
			requiredItems: 5,
			bonus: "+ 29 Steam",
		},
	],
};

const dwarfSets: Record<string, ItemSet> = {
	tacticalSet,
};

export default dwarfSets;
