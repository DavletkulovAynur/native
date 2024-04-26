import { ImageSourcePropType } from "react-native";
import sp1 from "@assets/images/test/sp1.jpeg";
import sp2 from "@assets/images/test/sp2.jpeg";
import sp3 from "@assets/images/test/sp3.jpeg";
import sp4 from "@assets/images/test/sp4.jpeg";
import sp5 from "@assets/images/test/sp5.jpeg";

export const data = [
  { id: "1", title: "Сердце Башкирии", cover: sp3 },
  { id: "5", title: "Айгир", cover: sp5 },
  { id: "2", title: "Водопад Гадельша", cover: sp2 },
  { id: "3", title: "Нугушское водохранилище", cover: sp1 },
  { id: "4", title: "Национальный парк «Башкирия»", cover: sp4 },
];

export type TData = {
  id: string;
  title: string;
  cover: ImageSourcePropType;
};
