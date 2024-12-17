import { Item, Profession } from "@/types";
import alchItems from "@/data/items/alchItems";
import cmpdItems from "@/data/items/cmpdItems";
import cookItems from "@/data/items/cookItems";
import crftItems from "@/data/items/crftItems";
import engItems from "@/data/items/engItems";
import smthItems from "@/data/items/smthItems";
import writItems from "@/data/items/writItems";

const itemStats: { [key in Profession]: Item<key>[] } = {
  [Profession.ALCH]: alchItems,
  [Profession.CMPD]: cmpdItems,
  [Profession.COOK]: cookItems,
  [Profession.CRFT]: crftItems,
  [Profession.ENG]: engItems,
  [Profession.SMTH]: smthItems,
  [Profession.WRIT]: writItems,
};

export default itemStats;
