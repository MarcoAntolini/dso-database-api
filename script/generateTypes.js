const fs = require("fs");
const path = require("path");

const imagesFolder = path.join(__dirname, "../public/images");
const outputFile = path.join(__dirname, "imageTypes.d.ts");

const imageFiles = fs.readdirSync(imagesFolder);

const typeDefinitions = imageFiles
	.filter((file) => file.endsWith(".png"))
	.reduce(
		(acc, file) => {
			const fileName = path.parse(file).name;
			if (fileName.startsWith("dwarf")) {
				acc.Dwarf.push(`"${fileName}"`);
			} else if (fileName.startsWith("warrior")) {
				acc.Warrior.push(`"${fileName}"`);
			} else if (fileName.startsWith("ranger")) {
				acc.Ranger.push(`"${fileName}"`);
			} else if (fileName.startsWith("mage")) {
				acc.Mage.push(`"${fileName}"`);
			} else if (fileName.startsWith("all")) {
				acc.Dwarf.push(`"${fileName}"`);
				acc.Warrior.push(`"${fileName}"`);
				acc.Ranger.push(`"${fileName}"`);
				acc.Mage.push(`"${fileName}"`);
			}
			return acc;
		},
		{ Dwarf: [], Warrior: [], Ranger: [], Mage: [] },
	);

const content = `
export type DwarfImage = ${typeDefinitions.Dwarf.join(" | ")};
export type WarriorImage = ${typeDefinitions.Warrior.join(" | ")};
export type RangerImage = ${typeDefinitions.Ranger.join(" | ")};
export type MageImage = ${typeDefinitions.Mage.join(" | ")};
`;

fs.writeFileSync(outputFile, content);

console.log("Type definitions generated successfully.");
