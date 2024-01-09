import { GiNecklaceDisplay } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { BiBriefcase } from "react-icons/bi";

export interface Categories {
  id: number;
  name: string;
  slug: string;
}

export const CATEGORY_ICON = {
  colares: <GiNecklaceDisplay />,
  brincos: <GiHeartEarrings />,
  pulseiras: <LiaRingSolid />,
  anéis: <LiaRingSolid />,
  acessórios: <BiBriefcase />,
};

export const categoriesData: Categories[] = [
  { id: 1, name: "Colares", slug: "colares" },
  { id: 2, name: "Brincos", slug: "brincos" },
  { id: 3, name: "Pulseiras", slug: "pulseiras" },
  { id: 4, name: "Anéis", slug: "anéis" },
  { id: 5, name: "Acessórios", slug: "acessórios" },
];
