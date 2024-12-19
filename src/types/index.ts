export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'pastry' | 'breakfast';
}

export interface NavLink {
  title: string;
  path: string;
}
