import type { Item, ItemSet } from "dso-database";

const tacticalSet: ItemSet = {
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

const items: Item[] = [
	{
		name: "Tactical Belt",
		class: "Steam Mechanicus",
		image: "all_mythic_bgh_ring", // TODO change
		level: 145,
		rarity: "Set Item",
		slot: "Hips, Belt",
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 6505,
				maxValue: 43332,
			},
			{
				stat: "All Resistance", // TODO: cambiare a "All Resistance Values"
				minValue: 698,
				maxValue: 1743,
			},
		],
		set: tacticalSet,
	},
	{
		name: "Unique belt",
		class: "Steam Mechanicus",
		image: "all_mythic_bgh_ring", // TODO change
		level: 145,
		rarity: "Unique Item",
		slot: "Hips, Belt",
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 6505,
				maxValue: 43332,
			},
			{
				stat: "All Resistance", // TODO: cambiare a "All Resistance Values"
				minValue: 698,
				maxValue: 1743,
			},
		],
		uniqueBonus: [
			{
				bonus: {
					stat: "Damage",
					value: 4165,
				},
			},
			{
				bonus: "+ 29 Steam",
			},
		],
	},
	{
		name: "test belt",
		class: "Steam Mechanicus",
		image: "all_mythic_bgh_ring", // TODO change
		level: 145,
		rarity: "Mythic Item",
		slot: "Legs, Boots",
		stats: [
			{
				stat: "Critical Value",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 6505,
				maxValue: 43332,
			},
			{
				stat: "Block Value", // TODO: cambiare a "All Resistance Values"
				minValue: 698,
				maxValue: 1743,
			},
		],
		uniqueBonus: [
			{
				bonus: {
					stat: "Fire Resistance",
					value: 4165,
				},
			},
			{
				bonus: "+ 29 Steam",
			},
		],
	},
	{
		name: "bho belt",
		class: "Spellweaver",
		image: "all_mythic_bgh_ring", // TODO change
		level: 145,
		rarity: "Unique Item",
		slot: "Hips, Belt",
		stats: [
			{
				stat: "Damage",
				minValue: 987,
				maxValue: 1645,
			},
			{
				stat: "Health Points",
				minValue: 6505,
				maxValue: 43332,
			},
			{
				stat: "All Resistance", // TODO: cambiare a "All Resistance Values"
				minValue: 698,
				maxValue: 1743,
			},
		],
		uniqueBonus: [
			{
				bonus: {
					stat: "Damage",
					value: 4165,
				},
			},
			{
				bonus: "+ 29 Steam",
			},
		],
	},
];

const dwarfItems: Item[] = items;

export default dwarfItems;
