import { Dish } from '../types';
const repeatedLegacyImages = ['photo-1589301760014-d929f3979dbc','photo-1546833999-b9f581a1996d','photo-1565557623262-b51c2513a641','photo-1668236543090-82eba5ee5976','photo-1513558161293-cdaf765ed2fd','photo-1585937421612-70a008356fbe','photo-1563379091339-03b21ab4a4f8'];
const stableSeed = (value: string) => value.split('').reduce((n,ch)=>(n*31+ch.charCodeAt(0))>>>0,7);
export const getDishImage = (dish: Dish) => {
  if (!repeatedLegacyImages.some(id => dish.image.includes(id))) return dish.image;
  const prompt = ['photorealistic professional food photography',`exact Indian dish: ${dish.name}`,dish.nameHindi,'the named dish must be the clear main subject','authentic ingredients and traditional presentation','single plated dish, no samosa, no unrelated food, no text, natural restaurant lighting'].join(', ');
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=900&nologo=true&seed=${stableSeed(dish.id)}`;
};
