/**
 * Cuisine menu data – edit name, description, price/options, and image for each item.
 *
 * PRICING OPTIONS:
 * Each item can have either:
 * 1. Simple pricing: Just use the 'price' field (e.g., price: 'R 120')
 * 2. Multiple options: Use the 'options' field with an array of choices
 *    options: [
 *      { name: 'Veg', price: 'R 30' },
 *      { name: 'Chicken', price: 'R 40' },
 *      { name: 'Prawn', price: 'R 45' }
 *    ]
 *
 * To use your own images:
 * 1. Add your image files to src/assets/
 * 2. Import them at the top of this file, e.g.:
 *    import starter1 from '../../assets/your-starter-1.jpg';
 * 3. Set the image property to the imported variable (use null to keep the black placeholder).
 *
 * Section divider backgrounds (Starters, Mains, Desserts): set to an imported image
 * to show a greyed-out picture behind the section heading, like the home hero.
 */

// Example imports (uncomment and add your files to src/assets/):
// import starter1 from '../../assets/starter1.jpg';
// import main1 from '../../assets/main1.jpg';
// import startersBg from '../../assets/starters-bg.jpg';

import startersDivider from '../../assets/CuisineMenu/Starters/starters divider.webp';

import dumplings from '../../assets/CuisineMenu/Starters/Dumplings.webp';
import kfc from '../../assets/CuisineMenu/Starters/Korean Fried Chicken Wings.webp';
import freshSpringRolls from '../../assets/CuisineMenu/Starters/Prawn Fresh Spring Roll.webp';
import banhMi from '../../assets/CuisineMenu/Starters/Banh Mi.webp';
import chineseShrimpChips from '../../assets/CuisineMenu/Starters/Chinese Shrimp Chips.webp';
import crispyWontons from '../../assets/CuisineMenu/Starters/Crispy Wontons.webp';
import friedSpringRolls from '../../assets/CuisineMenu/Starters/Fried Spring Roll.webp';
import meatballs from '../../assets/CuisineMenu/Starters/Meatballs.webp';
import prawnDimSum from '../../assets/CuisineMenu/Starters/Prawn Dim Sum.webp';
import prawnTempura from '../../assets/CuisineMenu/Starters/Prawn Tempura.webp';

import mainsDivider from '../../assets/CuisineMenu/Mains/mains divider.webp';

import beefPho from '../../assets/CuisineMenu/Mains/Beef Noodle Soup.webp';
import chickenPho from '../../assets/CuisineMenu/Mains/Chicken Noodle Soup.webp';
import friedNoodles from '../../assets/CuisineMenu/Mains/Fried Noodles.webp';
import friedRice from '../../assets/CuisineMenu/Mains/Fried Rice.webp';
import beefVerm from '../../assets/CuisineMenu/Mains/Grilled Beef Ball Vermicelli Bowl.webp';
import chickenVerm from '../../assets/CuisineMenu/Mains/Grilled Chicken Vermicelli Bowl.webp';
import vegVerm from '../../assets/CuisineMenu/Mains/Vegetarian Vermicelli Bowl.webp';
import soupCombo from '../../assets/CuisineMenu/Mains/Soup Combo.webp';
import springRollBowl from '../../assets/CuisineMenu/Mains/Spring Roll Bowl.webp';
import stirFry from '../../assets/CuisineMenu/Mains/Stir Fry.webp';
import sweetAndSour from '../../assets/CuisineMenu/Mains/Sweet and Sour Chicken.webp';
import pepperSteak from '../../assets/CuisineMenu/Mains/Taiwanese Black Pepper Steak Noodles.webp';

import dessertsDivider from '../../assets/CuisineMenu/Desserts/desserts divider.webp'

import avoIce from '../../assets/CuisineMenu/Desserts/Avo Ice Cream.webp';
import redBean from '../../assets/CuisineMenu/Desserts/Red Bean.webp';
import bananaIce from '../../assets/CuisineMenu/Desserts/Banana Ice Cream.webp';

export const SECTION_BACKGROUNDS = {
  starters: startersDivider,
  mains: mainsDivider,
  desserts: dessertsDivider,
};

export const STARTERS = [
  { 
    image: freshSpringRolls, 
    name: 'Fresh Spring Rolls (1pc) (Gỏi cuốn)', 
    description: 'Rice paper rolls filled with a mix of veg/chicken/prawn, herbs, pickles, vermicelli noodles and fresh vegetables. Served with fish sauce.', 
    options: [
      { name: 'Veg', price: 'R 30' },
      { name: 'Chicken', price: 'R 40' },
      { name: 'Prawn', price: 'R 45' }
    ]
  },
  { 
    image: friedSpringRolls, 
    name: 'Fried Spring Rolls (3pcs) (Chả giò)', 
    description: 'Vegetables, dried mushroom, glass noodles with veg/chicken/beef/prawn. Served with sweet chilli sauce.', 
    options: [
      { name: 'Veg', price: 'R 45' },
      { name: 'Chicken', price: 'R 50' },
      { name: 'Beef', price: 'R 55' },
      { name: 'Prawn', price: 'R 60 '}
    ]
  },
  { 
    image: banhMi, 
    name: 'Banh Mi', 
    description: 'Baguette filled with egg spread, pate, fresh vegetables, pickles and tofu/chicken/beef.', 
    options: [
      { name: 'Chicken', price: 'R 80' },
      { name: 'Beef', price: 'R 80' },
      { name: 'Tofu', price: 'R 80 '}
    ]
  },
  { 
    image: dumplings, 
    name: 'Dumplings (5pcs)', 
    description: 'Crispy-bottomed, pan-fried dumplings with a juicy savoury filling. Served with soy sauce.', 
    options: [
      { name: 'Veg', price: 'R 65' },
      { name: 'Chicken', price: 'R 65' }
    ]
  },
  { image: prawnDimSum, 
    name: 'Prawn Dim Sum (4pcs)', 
    description: 'Bite-sized chinese delicacy, steamed. Perfect for sharing. Served with soy sauce.', 
    price: 'R 65' 
  },
  { image: kfc, 
    name: 'Korean Fried Chicken Wings', 
    description: 'Crispy, fried wings glazed in gochujang', 
    options: [
      { name: '6 pieces', price: 'R 80' },
      { name: '12 pieces', price: 'R 140' }
    ] 
  },
  { image: crispyWontons, 
    name: 'Crispy Wontons (5pcs)', 
    description: 'Golden fried wontons with chicken/prawn filling. Served with sweet chilli sauce.', 
    options: [
      { name: 'Chicken', price: 'R 50' },
      { name: 'Prawn', price: 'R 65' }
    ] 
  },
  { image: prawnTempura, 
    name: 'Prawn Tempura (4pcs)', 
    description: 'Lightly battered and crispy fried prawns. Served with special sauce.', 
    price: 'R 60' 
  },
  { image: meatballs, 
    name: 'Home-Made Fried Beef Meatballs (4pcs)',
    description: 'Delicious, tender beef meatballs. Served with sweet chilli sauce.', 
    price: 'R 60' 
  },
  { image: chineseShrimpChips, 
    name: 'Chinese Shrimp Chips', 
    description: 'Light, crispy crackers with a savoury shrimp flavour.', 
    price: 'R 30' 
  },
];

export const MAINS = [
  { image: beefPho, 
    name: 'Beef Noodle Soup (Phở bò)', 
    description: 'Fragrant Vietnamese beef broth with rice noodles, tender beef slices, home-made beef meatballs, bean sprouts, onion and fresh herbs.', 
    price: 'R 130' 
  },
  { 
    image: chickenPho, 
    name: 'Chicken Noodles Soup (Phở gà)', 
    description: 'Fragrant Vietnamese chicken broth with rice noodles, tender chicken, home-made chicken meatballs, bean sprouts, onion and fresh herbs.', 
    price : 'R 120'
  },
  { image: friedNoodles, 
    name: 'Fried Noodles (Mì xào)', 
    description: 'Stir-fried noodles with vegetables and tofu/chicken/beef/prawn.', 
    options: [
      { name: 'Veg/Tofu', price: 'R 99' },
      { name: 'Chicken', price: 'R 120' },
      { name: 'Beef', price: 'R 120' },
      { name: 'Prawn', price: 'R 130' }  
    ] 
  },
  { image: friedRice, 
    name: 'Fried Rice (Cơm chiên)', 
    description: 'Wok-tossed rice with vegetables and egg/chicken/beef/prawn. Served with fish sauce.', 
    options: [
      { name: 'Veg/Tofu', price: 'R 99' },
      { name: 'Chicken', price: 'R 120' },
      { name: 'Beef', price: 'R 120' },
      { name: 'Prawn', price: 'R 130' }  
    ]
  },
  { 
    image: pepperSteak, 
    name: 'Taiwanese Black Pepper Steak Noodles', 
    description: 'Steak with noodles in a rich, peppery sauce, paired with a sunny side up egg.', 
    price: 'R 170'
  },
  { image: stirFry, 
    name: 'Stir Fry (Xào thập cẩm)', 
    description: 'Delicious mix of meat and vegetables in a savoury sauce. Served with steamed rice.', 
    options: [
      { name: 'Veg/Tofu', price: 'R 100' },
      { name: 'Chicken', price: 'R 120' },
      { name: 'Beef', price: 'R 120' },
      { name: 'Prawn', price: 'R 130' }  
    ] 
  },
  { image: sweetAndSour, 
    name: 'Sweet and Sour Chicken (Gà xào chua ngọt)', 
    description: 'Tasty chicken tossed in sweet and sour sauce. Served with steamed rice.', 
    price: 'R 135' 
  },
  { image: springRollBowl, 
    name: 'Spring Roll Bowl (Bún chả giò)', 
    description: '3 Spring rolls with vermicelli, green salad, peanuts, mint, pickle and cucumber. Served with fish sauce.', 
    options: [
      { name: 'Veg', price: 'R 95' },
      { name: 'Chicken', price: 'R 100' },
      { name: 'Beef', price: 'R 100' },
      { name: 'Prawn', price: 'R 110' }  
    ]
  },
  { image: vegVerm, 
    name: 'Vegetarian Vermicelli Bowl (Bún chay)', 
    description: 'Vermicelli rice noodles with peanuts, fresh vegetables and herbs. Served with fish sauce.', 
    price: 'R 90' 
  },
  { image: chickenVerm, 
    name: 'Grilled Chicken Vermicelli Bowl (Bún thịt nướng)', 
    description: 'Vermicelli rice noodles topped with marinated grilled chicken, peanuts and fresh vegetables and herbs. Served with fish sauce.', 
    price: 'R 100' 
  },
  { image: beefVerm, 
    name: 'Grilled Beef Ball Vermicelli Bowl (Bún bò viên)', 
    description: 'Vermicelli rice noodles topped with tender beef meatballs, peanuts and fresh vegetables and herbs. Served with fish sauce.', 
    price: 'R 100' 
  },
  { image: soupCombo, 
    name: 'Soup Combo', 
    description: 'Pho, half banh mi, beansprouts and vietnamese ice coffee (drink can be swapped).', 
    options: [
      { name: 'Chicken', price: 'R 190' },
      { name: 'Beef', price: 'R 200' }
    ] 
  },
];

export const DESSERTS = [
  { image: avoIce, 
    name: 'Vietnamese Avocado Ice Cream (Kem bơ)', 
    description: 'Creamy, smooth avocado blend, topped with with vanilla ice cream and peanuts.', 
    price: 'R 60' 
  },
  { image: redBean, 
    name: 'Fried Red Bean Sesame Balls', 
    description: 'Crispy sesame-coated balls with a sweet red bean filling. Optionally served with ice-cream, topped with chocolate sauce', 
    options: [
      { name: '3pcs without ice cream', price: 'R 40' },
      { name: '2pcs with ice cream', price: 'R 50' }
    ] 
  },
  { 
    image: bananaIce,
    name: 'Banana Ice Cream (Kem chuối chiên)', 
    description: 'Fried banana served with vanilla ice cream, topped with chocolate sauce.', 
    price: 'R 75'
  },
];