import { Profession } from "@/types";

const boostItems: { [key in Profession]: string } = {
  [Profession.ALCH]: "Alchemist's Stone",
  [Profession.CMPD]: "Multi-Flask",
  [Profession.COOK]: "Keen Kitchen Knife",
  [Profession.CRFT]: "Cherubic Bust",
  [Profession.ENG]: "NC Program Disk",
  [Profession.SMTH]: "Smithy Hammer",
  [Profession.WRIT]: "Enchanted Pen",
};

export default boostItems;
