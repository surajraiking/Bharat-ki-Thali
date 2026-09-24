import { Dish, ThaliSlotKey } from '../types';

export type FoodCategory =
  | 'Dal & Curry'
  | 'Sabzi'
  | 'Rice & Pulao'
  | 'Roti & Bread'
  | 'Salad & Raita'
  | 'Chutney & Pickle'
  | 'Snack & Chaat'
  | 'Sweet & Dessert'
  | 'Beverage'
  | 'Breakfast'
  | 'Main Course'
  | 'Other';

const slotRules: Record<ThaliSlotKey, RegExp[]> = {
  dal: [/dal|dhal|rajma|chole|kadhi|kadhi|sambar|rasam|curry|kofta/i],
  sabzi: [/sabzi|bhaji|aloo|gobi|baingan|bhindi|palak|matar|undhiyu|avial|vegetable|veg/i],
  rice: [/rice|chawal|pulao|biryani|khichdi|khichdi/i],
  roti: [/roti|roti|phulka|paratha|parantha|naan|kulcha|thepla|bhakri|appam|dosa/i],
  salad: [/salad|raita|kachumber|kosambari/i],
  chutney: [/chutney|pickle|achar|farsan|khandvi|dhokla/i],
  sweet: [/sweet|halwa|kheer|laddu|ladoo|barfi|rasgulla|gulab|jalebi|peda|payasam|pongal/i],
  drink: [/chaas|lassi|sharbat|tea|coffee|drink|juice|beverage/i],
};

export const getPrimaryFoodCategory = (dish: Dish): FoodCategory => {
  const text = [
    dish.name, dish.nameHindi, ...(dish.category || []), ...(dish.mealTypes || []),
    ...(dish.tags || [])
  ].join(' ');
  if (/sweet|dessert|halwa|kheer|laddu|ladoo|barfi|rasgulla|gulab|jalebi|peda|payasam/i.test(text)) return 'Sweet & Dessert';
  if (/drink|beverage|chaas|lassi|sharbat|juice/i.test(text)) return 'Beverage';
  if (/chutney|pickle|achar/i.test(text)) return 'Chutney & Pickle';
  if (/salad|raita/i.test(text)) return 'Salad & Raita';
  if (/rice|chawal|pulao|biryani|khichdi/i.test(text)) return 'Rice & Pulao';
  if (/roti|phulka|paratha|parantha|naan|kulcha|thepla|bhakri|appam/i.test(text)) return 'Roti & Bread';
  if (/dal|rajma|chole|kadhi|sambar|rasam|curry/i.test(text)) return 'Dal & Curry';
  if (/sabzi|bhaji|aloo|gobi|baingan|bhindi|palak|matar|undhiyu|avial/i.test(text)) return 'Sabzi';
  if (/snack|chaat|dhokla|khandvi|samosa|pakora|vada/i.test(text)) return 'Snack & Chaat';
  if ((dish.mealTypes || []).includes('Breakfast')) return 'Breakfast';
  return (dish.category || [])[0] === 'Main Course' ? 'Main Course' : 'Other';
};

export const getCompatibleDishes = (dishes: Dish[], slot: ThaliSlotKey) => {
  const rules = slotRules[slot];
  return dishes.filter(dish => {
    const text = [dish.name, dish.nameHindi, ...(dish.category || []), ...(dish.mealTypes || []), ...(dish.tags || [])].join(' ');
    return rules.some(rule => rule.test(text)) || getPrimaryFoodCategory(dish).toLowerCase().includes(slot);
  });
};

export const getSlotLabel = (slot: ThaliSlotKey) => ({
  dal: 'Dal / Curry',
  sabzi: 'Sabzi',
  rice: 'Rice / Pulao',
  roti: 'Roti / Bread',
  salad: 'Salad / Raita',
  chutney: 'Chutney / Pickle',
  sweet: 'Sweet / Dessert',
  drink: 'Beverage'
}[slot]);
