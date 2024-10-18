import type { ItemSet } from "dso-database";

export const worldSet: ItemSet = {
	name: "Yachak's Dream",
	items: ["Yachak's Way", "Yachak's Insight", "Yachak's Awakening"],
	setBonus: [
		{
			requiredItems: 2,
			bonus: {
				stat: "Health Points",
				value: 22232,
			},
		},
		{
			requiredItems: 2,
			bonus: {
				stat: "Damage",
				value: 2776,
			},
		},
		{
			requiredItems: 3,
			bonus: {
				stat: "Block Value",
				value: 3056,
			},
		},
		{
			requiredItems: 3,
			bonus: "+ 15% movement speed for 5 seconds upon defeating an enemy",
		},
	],
};

const rangerSets: Record<string, ItemSet> = {
	worldSet,
};

export default rangerSets;
