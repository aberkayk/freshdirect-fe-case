export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  discountedPrice?: number;
  currency: "EUR";
  unit: string;
  category: string;
  image: string;
  stock: number;
}
