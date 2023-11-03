import type { Class, Rarity, Slot, StatType } from "@/types/items";

export const validateClass: (className: string) => Class = (className: string) => {
	switch (className) {
		case "dwarf":
			return "Steam Mechanicus";
		case "mage":
			return "Spellweaver";
		case "ranger":
			return "Ranger";
		case "warrior":
			return "Dragonknight";
		default:
			throw new Error("Invalid class name");
	}
};

export const validateFilter: (filters: string) => {
	slot: Slot | Slot[] | "";
	stat: StatType | "";
	rarity: Rarity | "";
} = (filters: string) => {
	const slotFilter = filters.split("&").filter((filter) => filter.startsWith("slot="))[0];
	const slot = slotFilter ? validateSlot(slotFilter.split("=")[1] as string) : "";
	const statFilter = filters.split("&").filter((filter) => filter.startsWith("stat="))[0];
	const stat = statFilter ? validateStat(statFilter.split("=")[1] as string) : "";
	const rarityFilter = filters.split("&").filter((filter) => filter.startsWith("rarity="))[0];
	const rarity = rarityFilter ? validateRarity(rarityFilter.split("=")[1] as string) : "";
	return { slot: slot, stat: stat, rarity: rarity };
};

const validateSlot: (slot: string) => Slot | Slot[] = (slot: string) => {
	switch (slot) {
		case "helm":
			return "Head, Helmet";
		case "shoulders":
			return "Shoulders, Pauldrons";
		case "torso":
			return "Torso, Armor";
		case "gloves":
			return "Hands, Gloves";
		case "boots":
			return "Legs, Boots";
		case "back":
			return ["Back, Cloak", "Back, Banner"];
		case "amulet":
			return "Neck, Amulet";
		case "belt":
			return "Hips, Belt";
		case "ring":
			return "Ring Finger, Ring";
		case "adorn":
			return ["Weapon Adornment, Ammo", "Weapon Adornment, Focus Crystal", "Weapon Adornment, Trophy"];
		case "2-hand":
			return [
				"Double-Handed, Heavy Gun",
				"Double-Handed, Siege Bow",
				"Double-Handed, Staff",
				"Double-Handed, Sword",
				"Double-Handed, Axe",
				"Double-Handed, Mace",
			];
		case "main-hand":
			return [
				"Main Hand, Gun",
				"Main Hand, Shortbow",
				"Main Hand, Longbow",
				"Main Hand, Staff",
				"Main Hand, Sword",
				"Main Hand, Axe",
				"Main Hand, Mace",
			];
		case "off-hand":
			return [
				"Off Hand, Tool",
				"Off Hand, Shield",
				"Off Hand, Quiver",
				"Off Hand, Orb",
				"Off Hand, Book",
				"Off Hand, Battle Shield",
			];
		default:
			throw new Error("Invalid slot");
	}
};

const validateStat: (stat: string) => StatType = (stat: string) => {
	switch (stat) {
		case "damage":
			return "Damage";
		case "crit":
			return "Critical Value";
		case "att-speed":
			return "Attacks per Second";
		case "mov-speed":
			return "Movement Speed";
		case "hp":
			return "Health Points";
		case "armor":
			return "Armor Value";
		case "block":
			return "Block Value";
		case "all-res":
			return "All Resistance";
		case "fire-res":
			return "Fire Resistance";
		case "poison-res":
			return "Poison Resistance";
		case "ice-res":
			return "Ice Resistance";
		case "lightning-res":
			return "Lightning Resistance";
		case "andermagic-res":
			return "Andermagic Resistance";
		default:
			throw new Error("Invalid stat");
	}
};

const validateRarity: (rarity: string) => Rarity = (rarity: string) => {
	switch (rarity) {
		case "unique":
			return "Unique Item";
		case "set":
			return "Set Item";
		case "mythic":
			return "Mythic Item";
		default:
			throw new Error("Invalid rarity");
	}
};
