/**
 * Drinks menu data – edit name, description, price, and image for each item.
 *
 * To use your own images:
 * 1. Add your image files to src/assets/
 * 2. Import them at the top of this file, e.g.:
 *    import coffee1 from '../../assets/coffee-1.jpg';
 * 3. Set the image property to the imported variable (use null to keep the black placeholder).
 *
 * Section divider backgrounds (Coffee Menu, Tea Menu, Cooldrinks): set to an imported image
 * to show a greyed-out picture behind the section heading, like the home hero.
 */

// Example imports (uncomment and add your files to src/assets/):
// import coffee1 from '../../assets/coffee-1.jpg';
// import tea1 from '../../assets/tea-1.jpg';
// import coffeeBg from '../../assets/coffee-bg.jpg';

import coffeeDivider from '../../assets/DrinksMenu/Coffee/coffee divider.webp';

import hotCoffee from '../../assets/DrinksMenu/Coffee/hot coffee.webp';
import iceCoffee from '../../assets/DrinksMenu/Coffee/ice coffee.webp';
import eggCoffee from '../../assets/DrinksMenu/Coffee/egg coffee.webp';

import teaDivider from '../../assets/DrinksMenu/Tea/tea divider.webp';

import jasmineTea from '../../assets/DrinksMenu/Tea/jasmine tea.webp';
import chrysanthemumTea from '../../assets/DrinksMenu/Tea/chysanthemum tea.webp';
import rooibosTea from '../../assets/DrinksMenu/Tea/rooibos tea.webp';

import drinksDivider from '../../assets/DrinksMenu/drinks divider.webp'

export const SECTION_BACKGROUNDS = {
  coffee: coffeeDivider,
  tea: teaDivider,
  cooldrinks: drinksDivider
};

export const COFFEE_MENU = [
  { image: hotCoffee, 
    name: 'Vietnamese Hot Coffee (Cà phê đen)', 
    description: 'Strong brewed coffee slow dripped through a phin filter, into a cup with sweetened condensed milk.', 
    price: 'R 50' 
  },
  { image: iceCoffee, 
    name: 'Vietnamese Ice Coffee (Cà phê đá)', 
    description: 'Ice submerged in strong brewed coffee with sweetened condensed milk.', 
    price: 'R 50' 
  },
  { image: eggCoffee, 
    name: 'Vietnamese Egg Coffee (Cà phê trứng)', 
    description: 'Strong brewed coffee with sweetened condensed milk, topped with a layer of egg cream.', 
    price: 'R 65' 
  },
];

export const TEA_MENU = [
  { image: jasmineTea, 
    name: 'Chinese Jasmine Tea (Trà xanh)', 
    description: 'Light, fragrant tea with a smooth, earthy finish. Helps with digestion', 
    price: 'R 100' 
  },
  { image: chrysanthemumTea, 
    name: 'Chinese Chrysanthemum (Trà hoa cúc)', 
    description: 'Floral, calming, caffeine-free team with a delicate, slightly sweet aroma. Helps with digestion.', 
    price: 'R 100' 
  },
  { image: rooibosTea, 
    name: 'Rooibos Tea', 
    description: 'Naturally sweet, caffeine-free herbal tea with a smooth, earthy flavour.', 
    price: 'R 70' 
  },
];

export const COOLDRINKS = [
  { name: 'Still/Sparkling Water', price: 'R 20' },
  { name: 'Coke', price: 'R 25' },
  { name: 'Sprite', price: 'R 25' },
  { name: 'Fanta', price: 'R 25' },
  { name: 'Lipton Ice Tea', price: 'R 25' },
  { name: 'Sparletta', price: 'R 25' },
  { name: 'Liquifruit', price: 'R 25' },
  { name: 'Cappy Juice', price: 'R 25' },
  { name: 'Appletiser', price: 'R 35' },
  { name: 'Grapetiser', price: 'R 35' },
  { name: 'Coconut water', price: 'R 35' },
  { name: 'Plum Green tea', price: 'R 35' },
];