
export type Category = 
  | 'All' 
  | 'Hot Coffee' 
  | 'Iced Coffee' 
  | 'Hot Chocolate' 
  | 'Ceremonial Matcha Bar' 
  | 'Smoothie Bowls' 
  | 'Smoothies' 
  | 'Cold Brew' 
  | 'Tea' 
  | 'Desserts' 
  | 'Healthy Shots';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  description?: string;
  isBestseller?: boolean;
  isVeg?: boolean;
  image?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
