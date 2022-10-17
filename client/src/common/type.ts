export type ClothingType = "pants" | "cap" | "shirt";

export interface IProduct {
  id: number;
  name: string;
  type: ClothingType;
  color: string;
  price: number;
}
