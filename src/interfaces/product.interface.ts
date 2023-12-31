export interface Product {
  _id: string;
  name: string;
  imageURL: string;
  category: string;
  description: string;
  additionalInfo: string;
  inStock: number;
  priceOld?: number;
  price: number;
  rating: number;
}
