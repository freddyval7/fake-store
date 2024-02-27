export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rate: {
    rate: number;
    count: number;
  };
};
