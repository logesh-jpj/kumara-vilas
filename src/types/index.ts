export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  subcategory?: string;
  description?: string;
  price: number | null;
  isKvsSpecial: boolean;
  isVegetarian: boolean;
  isNonVeg?: boolean;
  isSignature?: boolean;
  tags?: string[];
  spiceLevel?: 1 | 2 | 3;
}

export type MenuCategory =
  | 'All'
  | 'KVS Specials'
  | 'Idly'
  | 'Dosa'
  | 'Roast'
  | 'Uthappam'
  | 'Parotta'
  | 'Chappathi'
  | 'Veg Starters & Gravies'
  | 'Chicken Starters & Gravies'
  | 'Mutton Starters & Gravies'
  | 'Fish'
  | 'Egg'
  | 'Meals'
  | 'Biryani'
  | 'Desserts';

export interface CravingCategory {
  id: string;
  title: string;
  subtitle: string;
  categoryFilter: MenuCategory;
  image: string;
  highlightDishes: string[];
}
