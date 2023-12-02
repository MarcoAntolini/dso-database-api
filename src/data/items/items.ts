import { type Item } from "dso-database";
import dwarfItems from "./dwarfItems";
import mageItems from "./mageItems";
import rangerItems from "./rangerItems";
import warriorItems from "./warriorItems";

const items: Item[] = [...dwarfItems, ...mageItems, ...rangerItems, ...warriorItems];

export default items;
