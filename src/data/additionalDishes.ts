import { Dish } from '../types';

const make = (d: Dish): Dish => d;

export const additionalDishes: Dish[] = [
  make({
    id: 'litti-chokha', name: 'Litti Chokha', nameHindi: 'लिट्टी चोखा',
    description: 'Bihar classic baked wheat litti stuffed with sattu and served with smoky chokha.',
    descriptionHindi: 'सत्तू से भरी लिट्टी और भुने बैंगन-टमाटर का देसी चोखा।',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format&fit=crop&q=85',
    region: 'East India', state: 'Bihar', cuisine: ['Bihari'], category: ['Main Course', 'Street Food'], mealTypes: ['Lunch', 'Dinner'], diet: ['Vegetarian'],
    ingredients: [
      { id: 'ing-1', name: 'Whole wheat flour', quantity: 2, unit: 'cup', optional: false },
      { id: 'ing-2', name: 'Sattu', quantity: 1, unit: 'cup', optional: false },
      { id: 'ing-3', name: 'Mustard oil', quantity: 2, unit: 'tbsp', optional: false },
      { id: 'ing-4', name: 'Roasted eggplant', quantity: 1, unit: 'large', optional: false },
      { id: 'ing-5', name: 'Tomato', quantity: 2, unit: 'medium', optional: false },
      { id: 'ing-6', name: 'Garlic, ginger and green chilli', quantity: 2, unit: 'tbsp', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Make dough', instruction: 'Mix wheat flour, salt and water into a firm dough.', durationMinutes: 5 },
      { id: 'step-2', stepNumber: 2, title: 'Prepare filling', instruction: 'Mix sattu with mustard oil, lemon, pickle spices, onion and herbs.', durationMinutes: 8 },
      { id: 'step-3', stepNumber: 3, title: 'Shape litti', instruction: 'Stuff dough balls with sattu filling and seal well.', durationMinutes: 8 },
      { id: 'step-4', stepNumber: 4, title: 'Bake', instruction: 'Bake until browned and cooked through, turning once or twice.', durationMinutes: 20 },
      { id: 'step-5', stepNumber: 5, title: 'Make chokha', instruction: 'Mash roasted eggplant and tomatoes with garlic, chilli, herbs and mustard oil.', durationMinutes: 8 }
    ],
    prepTimeMinutes: 20, cookTimeMinutes: 30, totalTimeMinutes: 50, servings: 3, difficulty: 'Medium', spiceLevel: 'Medium',
    nutrition: { calories: 390, protein: 13, carbohydrates: 57, fat: 12, fiber: 9 },
    tips: ['Brush with a small amount of ghee just before serving for a traditional finish.'], precautions: ['Use less mustard oil if its strong flavor is not preferred.'], allergens: ['Gluten'], festival: ['All Seasons'],
    tags: ['Regional Special', 'High Fiber', 'Traditional'], popularity: 94, emoji: '🥟', accentColor: '#b45309', tasteProfile: 'Smoky, nutty, earthy and aromatic', bestTimeToEat: 'Lunch or dinner', suitableFor: ['Family meals', 'Regional food lovers']
  }),
  make({
    id: 'misal-pav', name: 'Misal Pav', nameHindi: 'मिसळ पाव', description: 'Maharashtrian sprouted-matki curry topped with farsan, onion and coriander.', descriptionHindi: 'अंकुरित मटकी की तीखी उसळ, फरसाण और पाव का लोकप्रिय महाराष्ट्रियन नाश्ता।',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=900&auto=format&fit=crop&q=85', region: 'West India', state: 'Maharashtra', cuisine: ['Maharashtrian'], category: ['Street Food', 'Breakfast'], mealTypes: ['Breakfast', 'Snack'], diet: ['Vegetarian'],
    ingredients: [
      { id: 'ing-1', name: 'Sprouted matki', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-2', name: 'Misal masala', quantity: 2, unit: 'tbsp', optional: false }, { id: 'ing-3', name: 'Onion', quantity: 1, unit: 'medium', optional: false }, { id: 'ing-4', name: 'Tomato', quantity: 2, unit: 'medium', optional: false }, { id: 'ing-5', name: 'Farsan', quantity: 1, unit: 'cup', optional: false }, { id: 'ing-6', name: 'Pav', quantity: 6, unit: 'pieces', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Cook sprouts', instruction: 'Pressure cook sprouted matki until tender but not mushy.', durationMinutes: 10 }, { id: 'step-2', stepNumber: 2, title: 'Make usal', instruction: 'Cook onion, tomato and misal masala, then add sprouts and simmer.', durationMinutes: 12 }, { id: 'step-3', stepNumber: 3, title: 'Assemble', instruction: 'Pour spicy gravy into a bowl and top with farsan, onion and coriander.', durationMinutes: 3 }, { id: 'step-4', stepNumber: 4, title: 'Serve', instruction: 'Serve hot with toasted pav and lemon.', durationMinutes: 2 }
    ],
    prepTimeMinutes: 12, cookTimeMinutes: 25, totalTimeMinutes: 37, servings: 3, difficulty: 'Medium', spiceLevel: 'Extra Spicy', nutrition: { calories: 360, protein: 14, carbohydrates: 55, fat: 9, fiber: 11 },
    tips: ['Keep the farsan separate until serving to preserve crunch.'], precautions: ['Reduce chilli and farsan for a milder version.'], allergens: ['Gluten'], festival: ['All Seasons'], tags: ['Street Food', 'High Fiber', 'Protein Rich'], popularity: 96, emoji: '🌶️', accentColor: '#dc2626', tasteProfile: 'Fiery, tangy, crunchy and deeply spiced', bestTimeToEat: 'Breakfast or evening snack', suitableFor: ['Spicy food lovers']
  }),
  make({
    id: 'puran-poli', name: 'Puran Poli', nameHindi: 'पुरण पोली', description: 'Soft golden flatbread filled with sweet chana dal and jaggery.', descriptionHindi: 'गुड़ और चना दाल की मीठी भरावन वाली नरम महाराष्ट्रीयन पोळी।', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=85', region: 'West India', state: 'Maharashtra', cuisine: ['Maharashtrian'], category: ['Rotis & Grains', 'Healthy Desserts'], mealTypes: ['Dessert', 'Snack'], diet: ['Vegetarian'],
    ingredients: [
      { id: 'ing-1', name: 'Chana dal', quantity: 1, unit: 'cup', optional: false }, { id: 'ing-2', name: 'Jaggery', quantity: 1, unit: 'cup', optional: false }, { id: 'ing-3', name: 'Whole wheat flour', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-4', name: 'Cardamom', quantity: 0.5, unit: 'tsp', optional: false }, { id: 'ing-5', name: 'Ghee', quantity: 2, unit: 'tbsp', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Cook dal', instruction: 'Cook chana dal until soft and drain excess water.', durationMinutes: 15 }, { id: 'step-2', stepNumber: 2, title: 'Make filling', instruction: 'Cook dal with jaggery until thick, then add cardamom and mash smooth.', durationMinutes: 12 }, { id: 'step-3', stepNumber: 3, title: 'Stuff', instruction: 'Fill soft dough balls with the cooled dal mixture.', durationMinutes: 8 }, { id: 'step-4', stepNumber: 4, title: 'Cook', instruction: 'Roll gently and roast on a hot tawa with ghee until golden spots appear.', durationMinutes: 10 }
    ],
    prepTimeMinutes: 25, cookTimeMinutes: 30, totalTimeMinutes: 55, servings: 4, difficulty: 'Medium', spiceLevel: 'Mild', nutrition: { calories: 280, protein: 7, carbohydrates: 48, fat: 7, fiber: 5 }, tips: ['Cool the filling fully before stuffing to prevent tearing.'], precautions: ['It is naturally sweet and calorie dense.'], allergens: ['Gluten', 'Dairy'], festival: ['Holi', 'Gudi Padwa'], tags: ['Festive', 'Traditional', 'Sweet'], popularity: 92, emoji: '🫓', accentColor: '#ca8a04', tasteProfile: 'Warm, buttery, sweet and cardamom-scented', bestTimeToEat: 'Festival dessert', suitableFor: ['Festive meals']
  }),
  make({
    id: 'kashmiri-rajma', name: 'Kashmiri Rajma', nameHindi: 'कश्मीरी राजमा', description: 'Slow-cooked red kidney beans in a fragrant Kashmiri-style tomato gravy.', descriptionHindi: 'कश्मीरी मसालों की खुशबू वाली गाढ़ी और comforting राजमा।', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&auto=format&fit=crop&q=85', region: 'North India', state: 'Jammu and Kashmir', cuisine: ['Kashmiri'], category: ['Main Course'], mealTypes: ['Lunch', 'Dinner'], diet: ['Vegetarian', 'Vegan'],
    ingredients: [
      { id: 'ing-1', name: 'Rajma', quantity: 1.5, unit: 'cup', optional: false }, { id: 'ing-2', name: 'Tomato', quantity: 3, unit: 'medium', optional: false }, { id: 'ing-3', name: 'Ginger', quantity: 1, unit: 'tbsp', optional: false }, { id: 'ing-4', name: 'Kashmiri chilli', quantity: 1, unit: 'tsp', optional: false }, { id: 'ing-5', name: 'Fennel powder', quantity: 1, unit: 'tsp', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Soak', instruction: 'Soak rajma overnight and rinse well.', durationMinutes: 5 }, { id: 'step-2', stepNumber: 2, title: 'Pressure cook', instruction: 'Cook until beans are tender and creamy.', durationMinutes: 25 }, { id: 'step-3', stepNumber: 3, title: 'Make gravy', instruction: 'Cook tomato, ginger and Kashmiri spices until aromatic.', durationMinutes: 12 }, { id: 'step-4', stepNumber: 4, title: 'Simmer', instruction: 'Add cooked rajma and simmer until the gravy coats the beans.', durationMinutes: 15 }
    ],
    prepTimeMinutes: 10, cookTimeMinutes: 45, totalTimeMinutes: 55, servings: 4, difficulty: 'Medium', spiceLevel: 'Medium', nutrition: { calories: 300, protein: 15, carbohydrates: 44, fat: 5, fiber: 12 }, tips: ['Rest for 10 minutes before serving for deeper flavor.'], precautions: ['Soak and cook thoroughly for better digestion.'], allergens: [], festival: ['All Seasons'], tags: ['High Protein', 'High Fiber', 'Comfort Food'], popularity: 95, emoji: '🍛', accentColor: '#b91c1c', tasteProfile: 'Earthy, tangy, aromatic and creamy', bestTimeToEat: 'Lunch or dinner', suitableFor: ['Family meals']
  }),
  make({
    id: 'kerala-appam-stew', name: 'Kerala Appam with Vegetable Stew', nameHindi: 'केरल अप्पम और स्ट्यू', description: 'Lacy fermented rice pancakes paired with a gentle coconut vegetable stew.', descriptionHindi: 'नरम-सुंदर किनारों वाला अप्पम और हल्का नारियल वाला वेजिटेबल स्ट्यू।', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=900&auto=format&fit=crop&q=85', region: 'South India', state: 'Kerala', cuisine: ['Kerala'], category: ['Rotis & Grains', 'Main Course'], mealTypes: ['Breakfast', 'Dinner'], diet: ['Vegetarian', 'Vegan'],
    ingredients: [
      { id: 'ing-1', name: 'Rice', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-2', name: 'Coconut milk', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-3', name: 'Mixed vegetables', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-4', name: 'Green chilli', quantity: 2, unit: 'pieces', optional: false }, { id: 'ing-5', name: 'Curry leaves', quantity: 10, unit: 'leaves', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Ferment batter', instruction: 'Soak, grind and ferment rice batter until light and bubbly.', durationMinutes: 30 }, { id: 'step-2', stepNumber: 2, title: 'Make stew', instruction: 'Simmer vegetables in thin coconut milk with curry leaves and chilli.', durationMinutes: 15 }, { id: 'step-3', stepNumber: 3, title: 'Cook appam', instruction: 'Swirl batter in a hot appam pan and cook covered until the center is set.', durationMinutes: 12 }, { id: 'step-4', stepNumber: 4, title: 'Serve', instruction: 'Serve hot appam with creamy vegetable stew.', durationMinutes: 2 }
    ],
    prepTimeMinutes: 20, cookTimeMinutes: 35, totalTimeMinutes: 55, servings: 4, difficulty: 'Medium', spiceLevel: 'Mild', nutrition: { calories: 290, protein: 6, carbohydrates: 46, fat: 9, fiber: 5 }, tips: ['A well-fermented batter gives soft centers and crisp lacy edges.'], precautions: ['Keep coconut milk refrigerated and use fresh.'], allergens: [], festival: ['Onam'], tags: ['South Indian', 'Coconut', 'Traditional'], popularity: 91, emoji: '🥥', accentColor: '#16a34a', tasteProfile: 'Mild, creamy, coconut-rich and delicate', bestTimeToEat: 'Breakfast or dinner', suitableFor: ['Family meals']
  }),
  make({
    id: 'amritsari-fish', name: 'Amritsari Fish Fry', nameHindi: 'अमृतसरी फिश फ्राई', description: 'Crisp gram-flour coated fish with ajwain, lemon and warming spices.', descriptionHindi: 'अजवाइन और बेसन की कुरकुरी परत वाली पंजाबी स्टाइल फिश।', image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e3?w=900&auto=format&fit=crop&q=85', region: 'North India', state: 'Punjab', cuisine: ['Punjabi'], category: ['Main Course', 'Street Food'], mealTypes: ['Lunch', 'Dinner'], diet: ['Non-Veg'],
    ingredients: [
      { id: 'ing-1', name: 'Firm fish fillets', quantity: 500, unit: 'grams', optional: false }, { id: 'ing-2', name: 'Besan', quantity: 0.75, unit: 'cup', optional: false }, { id: 'ing-3', name: 'Ajwain', quantity: 1, unit: 'tsp', optional: false }, { id: 'ing-4', name: 'Lemon juice', quantity: 2, unit: 'tbsp', optional: false }, { id: 'ing-5', name: 'Ginger-garlic paste', quantity: 1, unit: 'tbsp', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Marinate', instruction: 'Coat fish with lemon, ginger-garlic, spices and salt.', durationMinutes: 15 }, { id: 'step-2', stepNumber: 2, title: 'Make batter', instruction: 'Mix besan, ajwain and spices with a little water.', durationMinutes: 5 }, { id: 'step-3', stepNumber: 3, title: 'Coat', instruction: 'Dip marinated fish evenly in the gram-flour coating.', durationMinutes: 5 }, { id: 'step-4', stepNumber: 4, title: 'Fry', instruction: 'Shallow-fry until crisp and cooked through.', durationMinutes: 12 }
    ],
    prepTimeMinutes: 20, cookTimeMinutes: 15, totalTimeMinutes: 35, servings: 4, difficulty: 'Medium', spiceLevel: 'Spicy', nutrition: { calories: 330, protein: 31, carbohydrates: 14, fat: 17, fiber: 2 }, tips: ['Use a firm boneless fish for neat pieces.'], precautions: ['Cook fish to a safe internal temperature and avoid cross-contamination.'], allergens: ['Fish'], festival: ['All Seasons'], tags: ['Punjabi', 'High Protein', 'Crispy'], popularity: 89, emoji: '🐟', accentColor: '#2563eb', tasteProfile: 'Crispy, tangy, spicy and aromatic', bestTimeToEat: 'Lunch or dinner', suitableFor: ['Non-vegetarian meals']
  }),
  make({
    id: 'makhana-kheer', name: 'Makhana Kheer', nameHindi: 'मखाना खीर', description: 'Creamy fox-nut pudding gently sweetened with milk, cardamom and nuts.', descriptionHindi: 'मखाने, दूध और इलायची से बनी हल्की और शाही खीर।', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=900&auto=format&fit=crop&q=85', region: 'North India', state: 'Uttar Pradesh', cuisine: ['North Indian'], category: ['Healthy Desserts'], mealTypes: ['Dessert'], diet: ['Vegetarian'],
    ingredients: [
      { id: 'ing-1', name: 'Makhana', quantity: 2, unit: 'cup', optional: false }, { id: 'ing-2', name: 'Milk', quantity: 1, unit: 'liter', optional: false }, { id: 'ing-3', name: 'Jaggery or sugar', quantity: 4, unit: 'tbsp', optional: false }, { id: 'ing-4', name: 'Cardamom', quantity: 0.5, unit: 'tsp', optional: false }, { id: 'ing-5', name: 'Mixed nuts', quantity: 2, unit: 'tbsp', optional: false }
    ],
    steps: [
      { id: 'step-1', stepNumber: 1, title: 'Roast makhana', instruction: 'Dry-roast makhana until crisp and lightly golden.', durationMinutes: 6 }, { id: 'step-2', stepNumber: 2, title: 'Simmer milk', instruction: 'Bring milk to a gentle simmer and reduce slightly.', durationMinutes: 20 }, { id: 'step-3', stepNumber: 3, title: 'Combine', instruction: 'Crush some makhana, add all makhana to milk and simmer.', durationMinutes: 10 }, { id: 'step-4', stepNumber: 4, title: 'Finish', instruction: 'Add sweetener, cardamom and nuts; cool slightly before serving.', durationMinutes: 5 }
    ],
    prepTimeMinutes: 5, cookTimeMinutes: 35, totalTimeMinutes: 40, servings: 5, difficulty: 'Easy', spiceLevel: 'Mild', nutrition: { calories: 210, protein: 7, carbohydrates: 26, fat: 8, fiber: 2 }, tips: ['Roast makhana before adding it to milk for better aroma.'], precautions: ['Adjust sweetness to taste.'], allergens: ['Dairy', 'Nuts'], festival: ['Navratri', 'Janmashtami'], tags: ['Festive', 'Dessert', 'Makhana'], popularity: 93, emoji: '🍮', accentColor: '#db2777', tasteProfile: 'Creamy, lightly sweet, nutty and fragrant', bestTimeToEat: 'Dessert', suitableFor: ['Festive meals']
  })
];
