import type { Item } from "dso-database";
import { worldSet } from "../sets/rangerSets";

const rangerItems: Item[] = [
	{
		class: "Ranger",
		name: "Yachak's Way",
		image: "ranger_set_worlddrop_class_boots",
		rarity: "Mythic Item",
		slot: "Legs, Boots",
		level: 145,
		set: worldSet,
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 5693,
				maxValue: 37967,
			},
			{
				stat: "Block Value",
				minValue: 636,
				maxValue: 1589,
			},
		],
	},
	{
		class: "Ranger",
		name: "Yachak's Insight",
		image: "ranger_set_worlddrop_class_gloves",
		rarity: "Mythic Item",
		slot: "Hands, Gloves",
		level: 145,
		set: worldSet,
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 5693,
				maxValue: 37967,
			},
			{
				stat: "Block Value",
				minValue: 636,
				maxValue: 1589,
			},
		],
	},
	{
		class: "Ranger",
		name: "Yachak's Awakening",
		image: "ranger_set_worlddrop_class_belt",
		rarity: "Mythic Item",
		slot: "Hips, Belt",
		level: 145,
		set: worldSet,
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 8549,
				maxValue: 56950,
			},
			{
				stat: "Block Value",
				minValue: 953,
				maxValue: 2384,
			},
		],
	},
];

export default rangerItems;
