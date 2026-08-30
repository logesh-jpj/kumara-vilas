import { MenuItem } from '../types';

// Curated high quality authentic South Indian dish reference images
export const DISH_IMAGES: Record<string, string> = {
  // Idly & Podi
  'idly': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
  'podi-idly': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
  'kothu-idly': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',

  // Dosa & Roasts
  'dosa': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
  'kari-dosa': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  'ghee-roast': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
  'uthappam': 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=600&auto=format&fit=crop',

  // Parotta & Chappathi
  'parotta': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
  'kothu-parotta': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
  'bun-parotta': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=600&auto=format&fit=crop',
  'salna-parotta': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=600&auto=format&fit=crop',
  'chappathi': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',

  // Veg Dishes
  'veg-starters': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',
  'paneer-ghee-roast': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',
  'mushroom-pallipalayam': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop',
  'paneer-butter-masala': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',

  // Chicken Dishes
  'chicken-starters': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
  'chicken-ghee-roast': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
  'chicken-pallipalayam': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
  'chicken-chinthamani': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
  'chicken-65': 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop',
  'chicken-gravy': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600&auto=format&fit=crop',
  'nattu-kozhi': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600&auto=format&fit=crop',

  // Mutton Dishes
  'mutton-starters': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  'mutton-chukka': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=600&auto=format&fit=crop',
  'mutton-ghee-roast': 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=600&auto=format&fit=crop',
  'mutton-kola': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  'mutton-kothu-kari': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',

  // Fish & Egg
  'fish': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
  'egg': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',

  // Meals & Biryani
  'veg-meals': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
  'non-veg-meals': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
  'biryani': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',

  // Desserts
  'payasam': 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=600&auto=format&fit=crop',
  'pudding': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop',
  'gulab-jamun': 'https://images.unsplash.com/photo-1605197161470-ad27928e3b3e?q=80&w=600&auto=format&fit=crop',
};

export const MENU_ITEMS: MenuItem[] = [
  // --- IDLY VARIETIES ---
  {
    id: 'idly-plain',
    name: 'Idly',
    category: 'Idly',
    description: 'Steamed fluffy rice and lentil cakes served with traditional chutneys and piping hot sambar.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tiffin', 'Traditional', 'Steamed']
  },
  {
    id: 'idly-pepper',
    name: 'Pepper Idly',
    category: 'Idly',
    description: 'Soft idlies tossed with freshly ground black pepper and aromatic spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tiffin', 'Spicy']
  },
  {
    id: 'idly-podi',
    name: 'Podi Idly',
    category: 'Idly',
    description: 'Mini bite-sized idlies coated generously in homemade spiced gun powder (idli podi) and oil.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tiffin', 'Podi']
  },
  {
    id: 'idly-kothu',
    name: 'Kothu Idly',
    category: 'Idly',
    description: 'Shredded idlies tempered on the tawa with caramelized onions, curry leaves, and secret masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tiffin', 'Tawa']
  },
  {
    id: 'idly-chicken-kothu',
    name: 'Chicken Kothu Idly',
    category: 'Idly',
    description: 'Hot shredded idly tossed with tender succulent chicken pieces and rich non-veg gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Non-Veg', 'Tiffin Special']
  },
  {
    id: 'idly-mutton-kothu',
    name: 'Mutton Kothu Idly',
    category: 'Idly',
    description: 'Minced spiced mutton pieces pan-shredded with soft idlies in a hearty salna reduction.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Non-Veg', 'Mutton Specialty']
  },
  {
    id: 'idly-ghee-podi',
    name: 'Ghee Podi Idly',
    category: 'Idly',
    description: 'Signature steaming hot idlies bathed in pure aromatic desi ghee and Kumaravilas heirloom podi.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: true,
    isSignature: true,
    tags: ['KVS Special', 'Desi Ghee', 'Must Try']
  },

  // --- DOSA VARIETIES ---
  {
    id: 'dosa-veetu',
    name: 'Veetu Dosa',
    category: 'Dosa',
    description: 'Homestyle soft and spongy dosa prepared from traditional fermented batter.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Homestyle', 'Tiffin']
  },
  {
    id: 'dosa-podi',
    name: 'Podi Dosa',
    category: 'Dosa',
    description: 'Crisp golden dosa sprinkled with our handcrafted spicy gun powder.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Podi', 'Crispy']
  },
  {
    id: 'dosa-ghee',
    name: 'Ghee Dosa',
    category: 'Dosa',
    description: 'Rich and fragrant dosa roasted in pure clarified butter till golden crisp.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Ghee', 'Crispy']
  },
  {
    id: 'dosa-egg',
    name: 'Egg Dosa',
    category: 'Dosa',
    description: 'Fresh farm egg beaten with pepper and spices spread evenly across crisp dosa.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg', 'Non-Veg']
  },
  {
    id: 'dosa-onion',
    name: 'Onion Dosa',
    category: 'Dosa',
    description: 'Golden tawa dosa generously layered with crunchy sautéed shallots.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Onion', 'Crispy']
  },
  {
    id: 'dosa-kudal',
    name: 'Kudal Dosa',
    category: 'Dosa',
    description: 'Authentic Kongu style slow-cooked goat boti masala spread over a thick hot dosa.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Kudal', 'Mutton', 'Kongu Specialty']
  },
  {
    id: 'dosa-chicken-kari',
    name: 'Chicken Kari Dosa',
    category: 'Dosa',
    description: 'Thick soft dosa topped with aromatic shredded chicken sukka, egg layer, and peppery gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chicken', 'Kari Dosa', 'Heavy Tiffin']
  },
  {
    id: 'dosa-mutton-kari',
    name: 'Mutton Kari Dosa',
    category: 'Dosa',
    description: 'Madurai-inspired three-layer masterpiece with tender minced mutton, spiced egg, and crispy base.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton', 'Signature Tiffin', 'Heavy']
  },
  {
    id: 'dosa-all-mix-kari',
    name: 'All Mix Kari Dosa',
    category: 'Dosa',
    description: 'Grand festive kari dosa loaded with seasoned chicken, mutton mince, and egg.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['All Mix', 'Chef Specialty']
  },
  {
    id: 'dosa-ghee-podi-onion',
    name: 'Ghee Podi Onion Dosa',
    category: 'Dosa',
    description: 'Crisp golden roast layered with country onions, drenched in pure ghee, and coated with signature podi.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: true,
    isSignature: true,
    tags: ['KVS Special', 'Pure Ghee', 'Must Try']
  },

  // --- ROAST ---
  {
    id: 'roast-podi',
    name: 'Podi Roast',
    category: 'Roast',
    description: 'Extra thin and crispy paper-style roast crusted with spicy aromatic podi.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Crispy', 'Podi']
  },
  {
    id: 'roast-ghee',
    name: 'Ghee Roast',
    category: 'Roast',
    description: 'Classic cone or roll roast drenched in golden melted ghee with rich aroma.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Pure Ghee', 'Crispy']
  },
  {
    id: 'roast-onion',
    name: 'Onion Roast',
    category: 'Roast',
    description: 'Paper crisp roast loaded with finely chopped caramelized onions and ghee.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Onion', 'Crispy']
  },
  {
    id: 'roast-egg',
    name: 'Egg Roast',
    category: 'Roast',
    description: 'Crispy outer roast folded with an inner spiced egg seasoning.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg', 'Crispy']
  },

  // --- UTHAPPAM ---
  {
    id: 'uthappam-onion',
    name: 'Onion Uthappam',
    category: 'Uthappam',
    description: 'Thick, fluffy griddle pancake loaded with fresh chopped shallots and green chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tiffin', 'Soft']
  },
  {
    id: 'uthappam-ghee-podi-onion',
    name: 'Ghee Podi Onion Uthappam',
    category: 'Uthappam',
    description: 'Soft and thick tawa uthappam packed with caramelized onions, pure ghee, and spicy podi.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: true,
    isSignature: true,
    tags: ['KVS Special', 'Ghee Podi', 'Must Try']
  },

  // --- PAROTTA VARIETIES ---
  {
    id: 'parotta-plain',
    name: 'Parotta',
    category: 'Parotta',
    description: 'Traditional multi-layered flaky South Indian flatbread beaten hot off the tawa.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Flaky', 'Classic']
  },
  {
    id: 'parotta-bun',
    name: 'Bun Parotta',
    category: 'Parotta',
    description: 'Thick, puffy, golden-brown bun-style parotta with fluffy soft interiors and crispy crust.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Bun Parotta', 'Crispy']
  },
  {
    id: 'parotta-nool',
    name: 'Nool Parotta',
    category: 'Parotta',
    description: 'Artfully pulled stringy and layered noodle-style parotta that melts in the mouth.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Nool', 'Stringy']
  },
  {
    id: 'parotta-ghee',
    name: 'Ghee Parotta',
    category: 'Parotta',
    description: 'Layered parotta tossed in liberal lashings of clarified pure butter.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Ghee', 'Rich']
  },
  {
    id: 'parotta-veechu',
    name: 'Veechu Parotta',
    category: 'Parotta',
    description: 'Thin hand-tossed flying parotta folded into an airy rectangular envelope.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Veechu', 'Light']
  },
  {
    id: 'parotta-egg-veechu',
    name: 'Egg Veechu Parotta',
    category: 'Parotta',
    description: 'Hand-stretched veechu stuffed with seasoned egg mixture, onions, and black pepper.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg', 'Stuffed']
  },
  {
    id: 'parotta-chilly',
    name: 'Chilly Parotta',
    category: 'Parotta',
    description: 'Crispy fried parotta bite cubes wok-tossed with capsicum, onion, and spicy tangy sauce.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Chilly', 'Indo-Chinese']
  },
  {
    id: 'parotta-veg-kothu',
    name: 'Veg Kothu Parotta',
    category: 'Parotta',
    description: 'Shredded parotta chopped rhythmically on tawa with vegetables, herbs, and veg salna.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Veg Kothu', 'Street Favorite']
  },
  {
    id: 'parotta-egg-kothu',
    name: 'Egg Kothu Parotta',
    category: 'Parotta',
    description: 'Tawa-chopped flaky parotta with scrambled eggs, onions, and rich spicy salna.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg Kothu', 'Popular']
  },
  {
    id: 'parotta-chicken-kothu',
    name: 'Chicken Kothu Parotta',
    category: 'Parotta',
    description: 'Street-style minced parotta with chicken chunks, egg, green chillies, and flavourful salna.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chicken Kothu', 'Best Seller']
  },
  {
    id: 'parotta-keema-stuffed',
    name: 'Keema Stuffed Coin Parotta',
    category: 'Parotta',
    description: 'Petite coin-sized golden parottas packed with rich spiced minced meat filling.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'Mutton Keema', 'Signature']
  },
  {
    id: 'parotta-salna',
    name: 'Salna Parotta',
    category: 'Parotta',
    description: 'Flaky parottas pre-soaked and soaked in our signature slow-simmered aromatic salna gravy.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'Salna', 'Rich']
  },
  {
    id: 'parotta-halwa',
    name: 'Halwa Parotta',
    category: 'Parotta',
    description: 'A decadent combination of warm flaky parotta served with traditional sweet halwa.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: true,
    isSignature: true,
    tags: ['KVS Special', 'Sweet Delicacy', 'Unique']
  },

  // --- CHAPPATHI ---
  {
    id: 'chappathi-plain',
    name: 'Chappathi',
    category: 'Chappathi',
    description: 'Soft whole wheat flatbread roasted fresh on iron tawa.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Wheat', 'Healthy']
  },
  {
    id: 'chappathi-egg',
    name: 'Egg Chappathi',
    category: 'Chappathi',
    description: 'Whole wheat chappathi layered with spiced beaten egg.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg', 'Wheat']
  },
  {
    id: 'chappathi-veg-kothu',
    name: 'Veg Kothu Chappathi',
    category: 'Chappathi',
    description: 'Shredded wheat flatbread stir-fried on tawa with assorted vegetables and spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Veg', 'Wheat Kothu']
  },
  {
    id: 'chappathi-egg-kothu',
    name: 'Egg Kothu Chappathi',
    category: 'Chappathi',
    description: 'Chopped chappathi combined with scrambled egg, onions, and aromatic seasoning.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg', 'Wheat Kothu']
  },
  {
    id: 'chappathi-chicken-kothu',
    name: 'Chicken Kothu Chappathi',
    category: 'Chappathi',
    description: 'Whole wheat kothu tossed with tender spiced chicken pieces and gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chicken', 'Wheat Kothu']
  },
  {
    id: 'chappathi-mutton-kothu',
    name: 'Mutton Kothu Chappathi',
    category: 'Chappathi',
    description: 'Minced mutton cooked with shredded chappathi and aromatic South Indian spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton', 'Wheat Kothu']
  },

  // --- VEG STARTERS & GRAVIES ---
  {
    id: 'veg-mushroom-pallipalayam',
    name: 'Mushroom Pallipalayam',
    category: 'Veg Starters & Gravies',
    description: 'Fresh button mushrooms dry-roasted with shallots, dry red chillies, and coconut slivers.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Kongu Style', 'Pallipalayam', 'Spicy']
  },
  {
    id: 'veg-65-trio',
    name: 'Gobi / Mushroom / Paneer 65',
    category: 'Veg Starters & Gravies',
    description: 'Crispy spiced deep fried florets / mushrooms / cottage cheese with curry leaves.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Starter', 'Crispy']
  },
  {
    id: 'veg-mushroom-chukka',
    name: 'Mushroom Chukka',
    category: 'Veg Starters & Gravies',
    description: 'Mushroom pan-roasted with freshly crushed peppercorns and caramelized onions.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Chukka', 'Pepper']
  },
  {
    id: 'veg-hot-pepper',
    name: 'Hot Pepper — Gobi / Mushroom',
    category: 'Veg Starters & Gravies',
    description: 'Spicy pepper-infused dry fry prepared with choice of gobi or mushroom.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Pepper Fry', 'Spicy']
  },
  {
    id: 'veg-japan',
    name: 'Japan — Mushroom / Paneer',
    category: 'Veg Starters & Gravies',
    description: 'Creamy cashew and garlic glazed specialty stir-fry in Indo-Asian style.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Cashew Glaze', 'Special']
  },
  {
    id: 'veg-kumaravilas-paneer-ghee-roast',
    name: 'Kumaravilas Paneer Ghee Roast',
    category: 'Veg Starters & Gravies',
    description: 'Soft cottage cheese cubes slow-cooked in a spicy, tangy red masala and pure desi ghee.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: true,
    isSignature: true,
    tags: ['KVS Special', 'Desi Ghee', 'Signature']
  },
  {
    id: 'veg-butter-garlic',
    name: 'Butter Garlic — Mushroom / Paneer',
    category: 'Veg Starters & Gravies',
    description: 'Sautéed in rich melted butter with roasted garlic pearls and crushed pepper.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Butter Garlic', 'Mild']
  },
  {
    id: 'veg-paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'Veg Starters & Gravies',
    description: 'Velvety tomato cream gravy with tender paneer cubes and kasturi methi.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Gravy', 'Creamy']
  },
  {
    id: 'veg-kadai-paneer-mushroom',
    name: 'Kadai — Paneer / Mushroom',
    category: 'Veg Starters & Gravies',
    description: 'Wok-cooked in freshly pounded coriander seeds and bell pepper tomato gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Kadai', 'Spiced']
  },
  {
    id: 'veg-masala-mushroom-gobi',
    name: 'Masala — Mushroom / Gobi',
    category: 'Veg Starters & Gravies',
    description: 'Traditional homestyle South Indian spiced onion-tomato semi-gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Gravy', 'Homestyle']
  },
  {
    id: 'veg-gobi-chilli-manchurian',
    name: 'Gobi — Chilli / Manchurian',
    category: 'Veg Starters & Gravies',
    description: 'Crispy cauliflower tossed in Indo-Chinese chili soy garlic sauce.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Indo-Chinese']
  },
  {
    id: 'veg-honey-chilli',
    name: 'Honey Chilli — Gobi / Paneer',
    category: 'Veg Starters & Gravies',
    description: 'Crisp tossed paneer or gobi glazed with sweet honey and spicy red chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Sweet & Spicy']
  },

  // --- CHICKEN STARTERS & GRAVIES ---
  {
    id: 'chicken-chinthamani',
    name: 'Chicken Chinthamani',
    category: 'Chicken Starters & Gravies',
    description: 'Legendary Kongu countryside recipe with boneless chicken, lots of shallots, and whole red chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Kongu Authentic', 'Chinthamani', 'Spicy']
  },
  {
    id: 'chicken-pallipalayam',
    name: 'Chicken Pallipalayam',
    category: 'Chicken Starters & Gravies',
    description: 'Traditional rustic preparation made without turmeric or coriander — only red chillies, shallots, and coconut bites.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Pallipalayam', 'Signature Kongu']
  },
  {
    id: 'chicken-kaatu-varuval',
    name: 'Chicken Kaatu Varuval',
    category: 'Chicken Starters & Gravies',
    description: 'Spicy rustic jungle-style roast chicken cooked with native herbs and crushed pepper.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Rustic', 'Varuval']
  },
  {
    id: 'chicken-malai-gravy',
    name: 'Chicken Malai Gravy',
    category: 'Chicken Starters & Gravies',
    description: 'Mild, rich, and creamy cashew-cream gravy with tender simmered chicken pieces.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Creamy', 'Mild']
  },
  {
    id: 'chicken-boneless-chukka',
    name: 'Boneless Chicken Chukka',
    category: 'Chicken Starters & Gravies',
    description: 'Dry roasted boneless chicken infused with dark roasted spices and curry leaf oil.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Boneless', 'Chukka']
  },
  {
    id: 'chicken-pachai-milagai-varuval',
    name: 'Pachai Milagai Kozhi Varuval',
    category: 'Chicken Starters & Gravies',
    description: 'Fiery green chili chicken fry with sharp mint and coriander undertones.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Green Chilli', 'Fiery']
  },
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    category: 'Chicken Starters & Gravies',
    description: 'Classic South Indian deep fried chicken bites spiced with red masala and fried curry leaves.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Classic', 'Crispy']
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop',
    category: 'Chicken Starters & Gravies',
    description: 'Frenched chicken drumettes coated in seasoned batter and crisp-fried.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Lollipop', 'Starter']
  },
  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    category: 'Chicken Starters & Gravies',
    description: 'Juicy chicken wings tossed in spicy pepper garlic glaze.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Wings', 'Appetizer']
  },
  {
    id: 'chicken-spicy-lollipop',
    name: 'Spicy Lollipop',
    category: 'Chicken Starters & Gravies',
    description: 'Extra fiery wok-tossed chicken lollipops with schezwan pepper and garlic.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Spicy', 'Appetizer']
  },
  {
    id: 'chicken-777',
    name: '777 Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Crispy finger chicken tossed in a tangy yogurt, chili, and garlic emulsion.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Special Fry', 'Crispy']
  },
  {
    id: 'chicken-moru-moru',
    name: 'Moru Moru Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Ultra-crunchy battered chicken strips with South Indian spice dusting.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Crunchy', 'Snack']
  },
  {
    id: 'chicken-pichi-potta',
    name: 'Pichi Potta Kara Kozhi',
    category: 'Chicken Starters & Gravies',
    description: 'Shredded roasted country chicken tossed with shallots, pepper, and spicy masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Shredded', 'Kongu Specialty']
  },
  {
    id: 'chicken-pepper-leg',
    name: 'Pepper Leg',
    category: 'Chicken Starters & Gravies',
    description: 'Whole chicken leg slow-braised and coated in black pepper gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chicken Leg', 'Pepper']
  },
  {
    id: 'chicken-kumaravilas-ghee-roast',
    name: 'Kumaravilas Chicken Ghee Roast',
    category: 'Chicken Starters & Gravies',
    description: 'Succulent chicken morsels cooked to perfection in rich Byadgi chili paste and pure desi ghee.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'Desi Ghee', 'Must Try']
  },
  {
    id: 'chicken-kumaravilas-special',
    name: 'Kumaravilas Special Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Our proprietary secret spice blend chicken preparation with unmatched aroma and depth.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'House Secret', 'Signature']
  },
  {
    id: 'chicken-japan',
    name: 'Japan Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Tender chicken cubes in a rich buttery cashew sauce with fried garlic.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Cashew Butter', 'Mild']
  },
  {
    id: 'chicken-dragon',
    name: 'Dragon Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Crisp chicken strips with cashew nuts and red chili capsicum reduction.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Dragon', 'Indo-Chinese']
  },
  {
    id: 'chicken-dynamite',
    name: 'Chicken Dynamite',
    category: 'Chicken Starters & Gravies',
    description: 'Crispy chicken pops tossed in creamy spicy dynamite sauce.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Dynamite', 'Appetizer']
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    category: 'Chicken Starters & Gravies',
    description: 'Crisp chicken in a savory ginger-garlic and green onion glaze.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Manchurian']
  },
  {
    id: 'chicken-lemon',
    name: 'Lemon Chicken',
    category: 'Chicken Starters & Gravies',
    description: 'Zesty and tangy chicken tossed with freshly squeezed lemon juice and green chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Lemon', 'Tangy']
  },
  {
    id: 'chicken-chettinad-gravy',
    name: 'Chicken Chettinad Gravy',
    category: 'Chicken Starters & Gravies',
    description: 'Aromatic curry prepared with freshly roasted Chettinad whole spices, coconut, and kalpasi.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chettinad', 'Aromatic Curry']
  },
  {
    id: 'chicken-pepper-gravy',
    name: 'Pepper Chicken Gravy',
    category: 'Chicken Starters & Gravies',
    description: 'Robust dark gravy flavoured intensely with stone-ground Malabar black peppercorns.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Pepper Curry', 'Spicy']
  },
  {
    id: 'chicken-butter-masala',
    name: 'Butter Chicken Masala',
    category: 'Chicken Starters & Gravies',
    description: 'Silky rich tomato and cashew gravy loaded with butter and roasted chicken chunks.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Butter Chicken', 'Mild Curry']
  },
  {
    id: 'chicken-pallipalayam-gravy',
    name: 'Pallipalayam Chicken Gravy',
    category: 'Chicken Starters & Gravies',
    description: 'Authentic Pallipalayam style spicy shallot and red chili gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Pallipalayam', 'Gravy']
  },
  {
    id: 'chicken-hyderabadi-gravy',
    name: 'Hyderabadi Chicken Gravy',
    category: 'Chicken Starters & Gravies',
    description: 'Rich mint and coriander based green masala gravy slow-cooked with tender chicken.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Hyderabadi', 'Herb Gravy']
  },
  {
    id: 'chicken-nattu-kozhi',
    name: 'Nattu Kozhi',
    category: 'Chicken Starters & Gravies',
    description: 'Free-range country chicken cooked in traditional village style.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Country Chicken', 'Village Style']
  },
  {
    id: 'chicken-nattu-kozhi-chinthamani',
    name: 'Nattu Kozhi Chinthamani',
    category: 'Chicken Starters & Gravies',
    description: 'Country chicken slow-roasted with pure shallots and hand-crushed dried chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Country Chicken', 'Chinthamani']
  },
  {
    id: 'chicken-nattu-kozhi-pallipalayam',
    name: 'Nattu Kozhi Pallipalayam',
    category: 'Chicken Starters & Gravies',
    description: 'Country chicken sauteed in coconut bits and red chillies with zero added water.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Country Chicken', 'Pallipalayam']
  },
  {
    id: 'chicken-nattu-kozhi-kuzhambu',
    name: 'Nattu Kozhi Kuzhambu',
    category: 'Chicken Starters & Gravies',
    description: 'Thin, deeply flavourful village style country chicken broth that pairs heavenly with parotta or rice.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Country Chicken', 'Kuzhambu']
  },

  // --- MUTTON STARTERS & GRAVIES ---
  {
    id: 'mutton-kola-urundai',
    name: 'Mutton Kola Urundai',
    category: 'Mutton Starters & Gravies',
    description: 'Crispy outside, melt-in-mouth inside spiced minced mutton meat balls.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton Kola', 'Classic']
  },
  {
    id: 'mutton-pallipalayam',
    name: 'Mutton Pallipalayam',
    category: 'Mutton Starters & Gravies',
    description: 'Tender mutton cubes dry-roasted with shallots, whole red chillies, and coconut shards.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton Pallipalayam', 'Kongu Style']
  },
  {
    id: 'mutton-chukka',
    name: 'Mutton Chukka',
    category: 'Mutton Starters & Gravies',
    description: 'Slow-roasted tender lamb pieces tossed in a dark, peppery, aromatic dry masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton Chukka', 'Must Try']
  },
  {
    id: 'mutton-kothu-kari',
    name: 'Mutton Kothu Kari',
    category: 'Mutton Starters & Gravies',
    description: 'Finely minced mutton stir-fried with country shallots, black pepper, and herbs.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Minced Mutton', 'Kothu Kari']
  },
  {
    id: 'mutton-kumaravilas-kothu-kari',
    name: 'Kumaravilas Mutton Kothu Kari',
    category: 'Mutton Starters & Gravies',
    description: 'Our pride creation — spiced minced mutton prepared in signature Kumaravilas tawa roast style.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'Signature', 'Best Seller']
  },
  {
    id: 'mutton-brain-fry',
    name: 'Brain Fry',
    category: 'Mutton Starters & Gravies',
    description: 'Delicate goat brain sautéed with shallots, curry leaves, and black pepper on iron tawa.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Brain Fry', 'Delicacy']
  },
  {
    id: 'mutton-brain-egg-fry',
    name: 'Brain Egg Fry',
    category: 'Mutton Starters & Gravies',
    description: 'Rich goat brain scrambled together with farm fresh eggs and mild pepper spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Brain Egg', 'Delicacy']
  },
  {
    id: 'mutton-nalli-fry-gravy',
    name: 'Mutton Nalli Fry / Gravy',
    category: 'Mutton Starters & Gravies',
    description: 'Succulent mutton shank marrow bone cooked until tender in thick spiced masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Nalli', 'Marrow Special']
  },
  {
    id: 'mutton-chops-fry-gravy',
    name: 'Mutton Chops Fry / Gravy',
    category: 'Mutton Starters & Gravies',
    description: 'Juicy rib chops braised with shallots, garlic, and freshly crushed spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton Chops', 'Rich']
  },
  {
    id: 'mutton-kudal-fry-gravy',
    name: 'Kudal Fry / Gravy',
    category: 'Mutton Starters & Gravies',
    description: 'Cleaned and spiced goat intestine slow-roasted with peppery masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Kudal', 'Authentic']
  },
  {
    id: 'mutton-pepper-fry-gravy',
    name: 'Pepper Mutton Fry / Gravy',
    category: 'Mutton Starters & Gravies',
    description: 'Tender mutton cooked in a heavy black pepper and roasted cumin gravy.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Pepper Mutton', 'Spicy']
  },
  {
    id: 'mutton-liver-fry',
    name: 'Liver Fry',
    category: 'Mutton Starters & Gravies',
    description: 'Fresh mutton liver pan-fried with onions, crushed coriander, and black pepper.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Liver Fry', 'Healthy']
  },
  {
    id: 'mutton-nenju-kari',
    name: 'Nenju Kari',
    category: 'Mutton Starters & Gravies',
    description: 'Flavourful mutton breast meat slow-simmered in native Kongu broth.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Nenju Kari', 'Broth']
  },
  {
    id: 'mutton-kumaravilas-ghee-roast',
    name: 'Kumaravilas Mutton Ghee Roast',
    category: 'Mutton Starters & Gravies',
    description: 'Tender mutton cuts slow roasted in abundant pure ghee and aromatic house masala.',
    price: null,
    isKvsSpecial: true,
    isVegetarian: false,
    isSignature: true,
    tags: ['KVS Special', 'Desi Ghee', 'Must Try']
  },

  // --- FISH ---
  {
    id: 'fish-meen-kuzhambu',
    name: 'Meen Kuzhambu',
    category: 'Fish',
    description: 'Authentic tangy and spicy tamarind fish curry infused with shallots and fenugreek.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Fish Curry', 'Tangy & Spicy']
  },
  {
    id: 'fish-of-the-day',
    name: 'Meen of the Day',
    category: 'Fish',
    description: 'Fresh catch of the day pan-fried or tava-roasted with traditional coastal masala.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Fresh Catch', 'Tava Fry']
  },

  // --- EGG ---
  {
    id: 'egg-gravy',
    name: 'Egg Gravy',
    category: 'Egg',
    description: 'Hard-boiled farm eggs immersed in rich aromatic onion-tomato curry.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg Curry']
  },
  {
    id: 'egg-kalakki',
    name: 'Kalakki — Plain / Masala / Onion / Chicken / Kudal',
    category: 'Egg',
    description: 'Famous runny soft-cooked egg envelope with choice of spicy meat gravy filling.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Street Icon', 'Kalakki']
  },
  {
    id: 'egg-half-full-boil',
    name: 'Half Boil / Full Boil',
    category: 'Egg',
    description: 'Tawa-fried eggs sprinkled with freshly crushed black pepper and salt.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Simple', 'Egg']
  },
  {
    id: 'egg-thengai-ennai-omelette',
    name: 'Thengai Ennai Omelette',
    category: 'Egg',
    description: 'Fluffy omelette cooked in fragrant virgin cold-pressed coconut oil.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Coconut Oil', 'Aromatic']
  },
  {
    id: 'egg-chinna-vengayam-omelette',
    name: 'Chinna Vengayam Omelette',
    category: 'Egg',
    description: 'Fluffy omelette packed with finely diced shallots (chinna vengayam) and green chillies.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Shallots', 'Omelette']
  },
  {
    id: 'egg-chicken-omelette',
    name: 'Chicken Omelette',
    category: 'Egg',
    description: 'Hearty omelette folded with seasoned spiced chicken chunks and pepper.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Chicken', 'Heavy']
  },
  {
    id: 'egg-muttai-porial',
    name: 'Muttai Porial',
    category: 'Egg',
    description: 'South Indian scrambled eggs tempered with mustard, onions, and curry leaves.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Scramble', 'Porial']
  },
  {
    id: 'egg-muttai-mass',
    name: 'Muttai Mass',
    category: 'Egg',
    description: 'Spicy tawa-scrambled egg preparation with thick salna reduction.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Spicy Scramble', 'Mass']
  },

  // --- MEALS ---
  {
    id: 'meals-veg',
    name: 'Veg Meals',
    category: 'Meals',
    description: 'Traditional banana-leaf spread featuring Steamed Rice, Ghee Podi, Sambar, Special Kozhambu, Rasam, Poriyal, Kootu, Pachadi, Appalam, Pickle, Curd, and Sweet.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Banana Leaf', 'Traditional Spread', 'Unlimited Flavours']
  },
  {
    id: 'meals-non-veg',
    name: 'Non-Veg Meals',
    category: 'Meals',
    description: 'Sumptuous South Indian feast featuring Steamed Rice, Thuvaiyal, Chicken Kuzhambu, Mutton Kuzhambu, Meen Kuzhambu, Special Nattu Kozhi Kuzhambu, Rasam, Poriyal, Kootu, Curd, and Sweet.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Non-Veg Feast', 'Multiple Gravies', 'Authentic']
  },

  // --- BIRYANI ---
  {
    id: 'biryani-mutton',
    name: 'Mutton Biryani',
    category: 'Biryani',
    description: 'Fragrant Seeraga Samba rice slow-cooked on dum with succulent tender mutton cuts and traditional spices.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Seeraga Samba', 'Dum Biryani', 'Mutton']
  },
  {
    id: 'biryani-mutton-chukka',
    name: 'Mutton Chukka Biryani',
    category: 'Biryani',
    description: 'Aromatic dum biryani rice paired with intensely flavourful roasted dry mutton chukka.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Mutton Chukka', 'Rich']
  },
  {
    id: 'biryani-chicken',
    name: 'Chicken Biryani',
    category: 'Biryani',
    description: 'Classic Kongu style Seeraga Samba chicken biryani slow-cooked with fresh mint, shallots, and ghee.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Seeraga Samba', 'Chicken Dum']
  },
  {
    id: 'biryani-glima',
    name: 'Glima Biryani',
    category: 'Biryani',
    description: 'Specialty spiced biryani preparation with rich layered aroma and tender meat infusion.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Glima Biryani', 'Specialty']
  },
  {
    id: 'biryani-egg',
    name: 'Egg Biryani',
    category: 'Biryani',
    description: 'Aromatic Seeraga Samba spiced rice served with seasoned boiled eggs and onion raita.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Egg Biryani', 'Mild Spiced']
  },
  {
    id: 'biryani-plain',
    name: 'Plain Biryani (Kuska)',
    category: 'Biryani',
    description: 'Fragrant biryani rice cooked in rich meat broth and aromatic whole spices without meat pieces.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: false,
    tags: ['Kuska', 'Biryani Rice']
  },

  // --- DESSERTS ---
  {
    id: 'dessert-gulab-jamun',
    name: 'Gulab Jamun',
    category: 'Desserts',
    description: 'Soft golden milk dumplings soaked in cardamom and saffron-scented sugar syrup.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Sweet', 'Classic']
  },
  {
    id: 'dessert-elaneer-payasam',
    name: 'Elaneer Payasam',
    category: 'Desserts',
    description: 'Heavenly chilled dessert prepared from fresh tender coconut pulp, coconut milk, and condensed milk.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tender Coconut', 'Chilled', 'South Indian Classic']
  },
  {
    id: 'dessert-elaneer-pudding',
    name: 'Elaneer Pudding',
    category: 'Desserts',
    description: 'Silky smooth melt-in-the-mouth pudding crafted from fresh tender coconut water and creamy flesh.',
    price: null,
    isKvsSpecial: false,
    isVegetarian: true,
    tags: ['Tender Coconut', 'Silky', 'Signature Sweet']
  }
];

export const KVS_SPECIALS_LIST = MENU_ITEMS.filter((item) => item.isKvsSpecial);

export const CATEGORIES_LIST: Array<{ id: string; name: string }> = [
  { id: 'All', name: 'All Dishes' },
  { id: 'KVS Specials', name: '⭐ KVS Specials' },
  { id: 'Idly', name: 'Idly Varieties' },
  { id: 'Dosa', name: 'Dosa Varieties' },
  { id: 'Roast', name: 'Roast Varieties' },
  { id: 'Uthappam', name: 'Uthappam' },
  { id: 'Parotta', name: 'Parotta Varieties' },
  { id: 'Chappathi', name: 'Chappathi' },
  { id: 'Veg Starters & Gravies', name: 'Veg Starters & Gravies' },
  { id: 'Chicken Starters & Gravies', name: 'Chicken Specialties' },
  { id: 'Mutton Starters & Gravies', name: 'Mutton Specialties' },
  { id: 'Fish', name: 'Fish' },
  { id: 'Egg', name: 'Egg Varieties' },
  { id: 'Meals', name: 'Traditional Meals' },
  { id: 'Biryani', name: 'Seeraga Samba Biryani' },
  { id: 'Desserts', name: 'Desserts' }
];

// Helper to get image for any dish
export function getDishReferenceImage(dish: MenuItem): string {
  if (dish.isKvsSpecial) {
    if (dish.id.includes('paneer')) return DISH_IMAGES['paneer-ghee-roast'];
    if (dish.id.includes('chicken-kumaravilas') || dish.id.includes('chicken-ghee')) return DISH_IMAGES['chicken-ghee-roast'];
    if (dish.id.includes('mutton-kumaravilas') || dish.id.includes('mutton-ghee')) return DISH_IMAGES['mutton-ghee-roast'];
    if (dish.id.includes('keema')) return DISH_IMAGES['parotta'];
    if (dish.id.includes('salna')) return DISH_IMAGES['salna-parotta'];
    if (dish.id.includes('halwa')) return DISH_IMAGES['pudding'];
    if (dish.id.includes('idly')) return DISH_IMAGES['podi-idly'];
    if (dish.id.includes('dosa')) return DISH_IMAGES['dosa'];
    if (dish.id.includes('uthappam')) return DISH_IMAGES['uthappam'];
  }

  const name = dish.name.toLowerCase();
  const cat = dish.category;

  if (cat === 'Idly') {
    if (name.includes('podi') || name.includes('pepper')) return DISH_IMAGES['podi-idly'];
    if (name.includes('kothu')) return DISH_IMAGES['kothu-idly'];
    return DISH_IMAGES['idly'];
  }
  if (cat === 'Dosa' || cat === 'Roast') {
    if (name.includes('kari') || name.includes('chicken') || name.includes('mutton') || name.includes('kudal')) return DISH_IMAGES['kari-dosa'];
    if (name.includes('roast') || name.includes('ghee')) return DISH_IMAGES['ghee-roast'];
    return DISH_IMAGES['dosa'];
  }
  if (cat === 'Uthappam') return DISH_IMAGES['uthappam'];
  if (cat === 'Parotta') {
    if (name.includes('kothu')) return DISH_IMAGES['kothu-parotta'];
    if (name.includes('bun')) return DISH_IMAGES['bun-parotta'];
    if (name.includes('salna')) return DISH_IMAGES['salna-parotta'];
    return DISH_IMAGES['parotta'];
  }
  if (cat === 'Chappathi') return DISH_IMAGES['chappathi'];
  if (cat === 'Veg Starters & Gravies') {
    if (name.includes('paneer')) return DISH_IMAGES['paneer-ghee-roast'];
    if (name.includes('mushroom')) return DISH_IMAGES['mushroom-pallipalayam'];
    return DISH_IMAGES['veg-starters'];
  }
  if (cat === 'Chicken Starters & Gravies') {
    if (name.includes('ghee roast')) return DISH_IMAGES['chicken-ghee-roast'];
    if (name.includes('pallipalayam')) return DISH_IMAGES['chicken-pallipalayam'];
    if (name.includes('chinthamani')) return DISH_IMAGES['chicken-chinthamani'];
    if (name.includes('65') || name.includes('lollipop') || name.includes('777')) return DISH_IMAGES['chicken-65'];
    if (name.includes('nattu')) return DISH_IMAGES['nattu-kozhi'];
    if (name.includes('gravy') || name.includes('kuzhambu') || name.includes('masala')) return DISH_IMAGES['chicken-gravy'];
    return DISH_IMAGES['chicken-starters'];
  }
  if (cat === 'Mutton Starters & Gravies') {
    if (name.includes('chukka')) return DISH_IMAGES['mutton-chukka'];
    if (name.includes('ghee roast')) return DISH_IMAGES['mutton-ghee-roast'];
    if (name.includes('kola')) return DISH_IMAGES['mutton-kola'];
    if (name.includes('kothu')) return DISH_IMAGES['mutton-kothu-kari'];
    return DISH_IMAGES['mutton-starters'];
  }
  if (cat === 'Fish') return DISH_IMAGES['fish'];
  if (cat === 'Egg') return DISH_IMAGES['egg'];
  if (cat === 'Meals') {
    return dish.isVegetarian ? DISH_IMAGES['veg-meals'] : DISH_IMAGES['non-veg-meals'];
  }
  if (cat === 'Biryani') return DISH_IMAGES['biryani'];
  if (cat === 'Desserts') {
    if (name.includes('payasam')) return DISH_IMAGES['payasam'];
    if (name.includes('pudding')) return DISH_IMAGES['pudding'];
    return DISH_IMAGES['gulab-jamun'];
  }

  return DISH_IMAGES['dosa'];
}
