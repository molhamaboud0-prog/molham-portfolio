/** FlavorHub menu catalog — EN/AR for preview & Figma reference */
const MENU_CATEGORIES = [
  { id: 'popular', en: 'Popular', ar: 'الأكثر طلباً' },
  { id: 'burgers', en: 'Burgers', ar: 'برجر' },
  { id: 'pizza', en: 'Pizza', ar: 'بيتزا' },
  { id: 'shawarma', en: 'Shawarma', ar: 'شاورما' },
  { id: 'bowls', en: 'Bowls', ar: 'أوعية' },
  { id: 'appetizers', en: 'Starters', ar: 'مقبلات' },
  { id: 'desserts', en: 'Desserts', ar: 'حلويات' },
  { id: 'drinks', en: 'Drinks', ar: 'مشروبات' },
  { id: 'breakfast', en: 'Breakfast', ar: 'فطور' },
  { id: 'kids', en: 'Kids', ar: 'أطفال' },
];

const HOME_CUISINES = [
  { en: '🍔 Burgers', ar: '🍔 برجر' },
  { en: '🍕 Pizza', ar: '🍕 بيتزا' },
  { en: '🌯 Shawarma', ar: '🌯 شاورما' },
  { en: '🍣 Asian', ar: '🍣 آسيوي' },
  { en: '🥗 Healthy', ar: '🥗 صحي' },
  { en: '☕ Coffee', ar: '☕ قهوة' },
  { en: '🧁 Desserts', ar: '🧁 حلويات' },
  { en: '🌱 Vegan', ar: '🌱 نباتي' },
];

const FOOD_FILTERS = [
  { id: 'delivery', key: 'filter.delivery' },
  { id: 'booking', key: 'filter.booking' },
  { id: 'rating', key: 'filter.rating' },
  { id: 'veg', key: 'filter.vegetarian' },
  { id: 'halal', key: 'filter.halal' },
  { id: 'spicy', key: 'filter.spicy' },
  { id: 'under15', key: 'filter.under15' },
  { id: 'free', key: 'filter.freedelivery' },
];

const MENU_ITEMS = [
  { id: 'fiery-burger', cat: 'burgers', popular: true, badges: ['spicy'], priceEn: '$12', priceAr: '٣٨ ر.س', en: { name: 'Fiery Burger', desc: 'Angus beef, chili mayo, pickles' }, ar: { name: 'برجر حار', desc: 'لحم أنغوس، مايونيز حار، مخلل' } },
  { id: 'classic-burger', cat: 'burgers', popular: true, badges: [], priceEn: '$10', priceAr: '٣٢ ر.س', en: { name: 'Classic Cheese', desc: 'Cheddar, lettuce, house sauce' }, ar: { name: 'جبنة كلاسيك', desc: 'شيدر، خس، صلصة المنزل' } },
  { id: 'mushroom-burger', cat: 'burgers', popular: false, badges: ['veg'], priceEn: '$11', priceAr: '٣٥ ر.س', en: { name: 'Truffle Mushroom', desc: 'Portobello, truffle aioli' }, ar: { name: 'فطر ترافل', desc: 'بورتوبيلو، أيولي ترافل' } },
  { id: 'margherita', cat: 'pizza', popular: true, badges: ['veg'], priceEn: '$14', priceAr: '٤٢ ر.س', en: { name: 'Margherita', desc: 'San Marzano, fresh basil' }, ar: { name: 'مارغريتا', desc: 'طماطم سان مارزano، ريحان' } },
  { id: 'pepperoni', cat: 'pizza', popular: true, badges: [], priceEn: '$16', priceAr: '٤٨ ر.س', en: { name: 'Pepperoni Feast', desc: 'Double pepperoni, mozzarella' }, ar: { name: 'بيبروني', desc: 'بيبروني مزدوج، موزاريلا' } },
  { id: 'bbq-chicken-pizza', cat: 'pizza', popular: false, badges: [], priceEn: '$17', priceAr: '٥٢ ر.س', en: { name: 'BBQ Chicken', desc: 'Smoky BBQ, red onion' }, ar: { name: 'دجاج باربيكيو', desc: 'صلصة مدخنة، بصل أحمر' } },
  { id: 'chicken-shawarma', cat: 'shawarma', popular: true, badges: ['halal'], priceEn: '$9', priceAr: '٢٨ ر.س', en: { name: 'Chicken Shawarma', desc: 'Garlic toum, pickles, fries inside' }, ar: { name: 'شاورما دجاج', desc: 'توم، مخلل، بطاطس' } },
  { id: 'meat-shawarma', cat: 'shawarma', popular: true, badges: ['halal', 'spicy'], priceEn: '$11', priceAr: '٣٤ ر.س', en: { name: 'Spiced Meat Wrap', desc: 'Slow-roasted beef, tahini' }, ar: { name: 'لحم متبل', desc: 'لحم مشوي، طحينة' } },
  { id: 'falafel-wrap', cat: 'shawarma', popular: false, badges: ['veg', 'halal'], priceEn: '$8', priceAr: '٢٤ ر.س', en: { name: 'Falafel Wrap', desc: 'Crispy falafel, tahini, greens' }, ar: { name: 'فلافل', desc: 'فلافل مقرمش، طحينة، خضار' } },
  { id: 'rice-bowl', cat: 'bowls', popular: true, badges: [], priceEn: '$10', priceAr: '٣٢ ر.س', en: { name: 'Teriyaki Rice Bowl', desc: 'Chicken, edamame, sesame' }, ar: { name: 'وعاء ترياكي', desc: 'دجاج، إدامامي، سمسم' } },
  { id: 'poke-bowl', cat: 'bowls', popular: false, badges: [], priceEn: '$13', priceAr: '٤٠ ر.س', en: { name: 'Salmon Poke', desc: 'Fresh salmon, avocado, sushi rice' }, ar: { name: 'بوكي سالمون', desc: 'سلمون، أفوكادو، أرز سوشي' } },
  { id: 'buddha-bowl', cat: 'bowls', popular: false, badges: ['veg'], priceEn: '$11', priceAr: '٣٥ ر.س', en: { name: 'Buddha Bowl', desc: 'Quinoa, roasted veg, hummus' }, ar: { name: 'بوذا بول', desc: 'كينوا، خضار مشوية، حمص' } },
  { id: 'wings', cat: 'appetizers', popular: true, badges: ['spicy'], priceEn: '$8', priceAr: '٢٦ ر.س', en: { name: 'Buffalo Wings ×6', desc: 'Blue cheese dip' }, ar: { name: 'أجنحة بافالو ×٦', desc: 'صلصة جبن أزرق' } },
  { id: 'hummus', cat: 'appetizers', popular: false, badges: ['veg', 'halal'], priceEn: '$6', priceAr: '١٨ ر.س', en: { name: 'Hummus & Pita', desc: 'Warm pita, olive oil' }, ar: { name: 'حمص وخبز', desc: 'خبز عربي دافئ، زيت زيتون' } },
  { id: 'mozzarella', cat: 'appetizers', popular: false, badges: ['veg'], priceEn: '$7', priceAr: '٢٢ ر.س', en: { name: 'Mozzarella Sticks', desc: 'Marinara dip' }, ar: { name: 'أصابع موزاريلا', desc: 'صلصة مارينارا' } },
  { id: 'lava-cake', cat: 'desserts', popular: true, badges: [], priceEn: '$7', priceAr: '٢٢ ر.س', en: { name: 'Chocolate Lava', desc: 'Vanilla ice cream' }, ar: { name: 'لافا شوكولا', desc: 'آيس كريم فانيلا' } },
  { id: 'kunafa', cat: 'desserts', popular: true, badges: ['halal'], priceEn: '$8', priceAr: '٢٨ ر.س', en: { name: 'Kunafa Slice', desc: 'Pistachio, sweet syrup' }, ar: { name: 'كنافة', desc: 'فستق، قطر' } },
  { id: 'smoothie', cat: 'drinks', popular: false, badges: ['veg'], priceEn: '$5', priceAr: '١٦ ر.س', en: { name: 'Berry Smoothie', desc: 'Mixed berries, yogurt' }, ar: { name: 'سموثي توت', desc: 'توت مشكل، زبادي' } },
  { id: 'fresh-juice', cat: 'drinks', popular: false, badges: ['veg'], priceEn: '$4', priceAr: '١٢ ر.س', en: { name: 'Fresh Orange', desc: 'Cold-pressed' }, ar: { name: 'عصير برتقال', desc: 'عصر طازج' } },
  { id: 'iced-latte', cat: 'drinks', popular: true, badges: [], priceEn: '$5', priceAr: '١٥ ر.س', en: { name: 'Iced Latte', desc: 'Arabica espresso, oat milk option' }, ar: { name: 'آيس لاتيه', desc: 'إسبريسو، حليب شوفان اختياري' } },
  { id: 'shakshuka', cat: 'breakfast', popular: true, badges: ['veg', 'halal'], priceEn: '$9', priceAr: '٢٨ ر.س', en: { name: 'Shakshuka', desc: 'Eggs in tomato pepper sauce' }, ar: { name: 'شكشوكة', desc: 'بيض بصلصة طماطم وفلفل' } },
  { id: 'pancakes', cat: 'breakfast', popular: false, badges: ['veg'], priceEn: '$8', priceAr: '٢٤ ر.س', en: { name: 'Pancake Stack', desc: 'Maple syrup, berries' }, ar: { name: 'بان كيك', desc: 'شراب القيقب، توت' } },
  { id: 'kids-nuggets', cat: 'kids', popular: false, badges: [], priceEn: '$7', priceAr: '٢٠ ر.س', en: { name: 'Kids Nuggets', desc: 'Fries, juice box' }, ar: { name: 'ناجتس أطفال', desc: 'بطاطس، عصير' } },
  { id: 'kids-pasta', cat: 'kids', popular: false, badges: ['veg'], priceEn: '$7', priceAr: '٢٠ ر.س', en: { name: 'Kids Pasta', desc: 'Butter or tomato sauce' }, ar: { name: 'مكرونة أطفال', desc: 'صلصة زبدة أو طماطم' } },
];

function menuCategoryLabel(cat, loc) {
  const c = MENU_CATEGORIES.find((x) => x.id === cat);
  return c ? c[loc] : cat;
}

function getMenuItems(categoryId) {
  if (categoryId === 'popular') {
    return MENU_ITEMS.filter((i) => i.popular);
  }
  return MENU_ITEMS.filter((i) => i.cat === categoryId);
}

function getDishById(id) {
  return MENU_ITEMS.find((i) => i.id === id) || MENU_ITEMS[0];
}