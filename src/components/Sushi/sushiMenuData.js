/**
 * Sushi menu data – edit name, description, price, and image for each item.
 *
 * To use your own images:
 * 1. Add your image files to src/assets/
 * 2. Import them at the top of this file, e.g.:
 *    import lunchSpecial1 from '../../assets/lunch-special-1.jpg';
 * 3. Set the image property to the imported variable (use null to keep the black placeholder).
 *
 * Section divider backgrounds (Sushi, Lunch Specials, Sushi Platters): set to an imported image
 * to show a greyed-out picture behind the section heading, like the home hero.
 */

// Example imports (uncomment and add your files to src/assets/):
// import lunchSpecial1 from '../../assets/lunch-special-1.jpg';
// import platter1 from '../../assets/platter-1.jpg';
// import sushiBg from '../../assets/sushi-bg.jpg';

import platter2 from '../../assets/SushiMenu/Lunch Specials/platter 2.webp';
import platter3 from '../../assets/SushiMenu/Lunch Specials/platter 3.webp';
import platter4 from '../../assets/SushiMenu/Lunch Specials/platter 4.webp';

import chefsPlatter from "../../assets/SushiMenu/Platters/chef's platter.webp";
import deepFriedPlatter from '../../assets/SushiMenu/Platters/deep fried platter.webp';
import salmonLunch from '../../assets/SushiMenu/Platters/salmon lunch.webp';
import tempuraPlatter from '../../assets/SushiMenu/Platters/tempura platter.webp';

import platter1 from '../../assets/SushiMenu/Lunch Specials/platter 1.webp';

import sixFlavours from '../../assets/SushiMenu/Platters/6 flavours nigiri.webp';
import prawnPlatter from '../../assets/SushiMenu/Platters/prawn platter.webp';
import rainbowPlatter from '../../assets/SushiMenu/Platters/rainbow platter.webp';
import vegPlatter from '../../assets/SushiMenu/Platters/veg platter.webp';

import sushiDivider from '../../assets/SushiMenu/sushi divider.webp';
import lunchSpecialsDivider from '../../assets/SushiMenu/lunch specials divider.webp';
import sushiPlattersDivider from '../../assets/SushiMenu/sushi platters divider.webp';

export const SECTION_BACKGROUNDS = {
  sushi: sushiDivider,
  lunchSpecials: lunchSpecialsDivider,
  sushiPlatters: sushiPlattersDivider,
};

// Sushi items with multiple price options (no images)
export const SUSHI = [
  {
    name: 'Sashimi',
    options: [
      { name: 'Salmon', price: 'R 80' },
      { name: 'Grilled', price: 'R 85' }
    ],
  },
  {
    name: 'Roses (4pcs)',
    options: [
      { name: 'Salmon', price: 'R 75' },
    ],
  },
  {
    name: 'Maki (8pcs)',
    options: [
      { name: 'Salmon', price: 'R 48' },
      { name: 'Prawn', price: 'R 48' },
      { name: 'Prawn Tempura', price: 'R 50' },
      { name: 'Veg', price: 'R 38' },
      { name: 'Crab', price: 'R 38' },
    ],
  },
  {
    name: 'California (4pcs)',
    options: [
      { name: 'Salmon', price: 'R 48' },
      { name: 'Prawn', price: 'R 48' },
      { name: 'Prawn Tempura', price: 'R 50' },
      { name: 'Veg', price: 'R 40' },
      { name: 'Crab', price: 'R 40' },
    ],
  },
  {
    name: 'Handroll (1pc)',
    options: [
      { name: 'Salmon', price: 'R 50' },
      { name: 'Prawn', price: 'R 50' },
      { name: 'Prawn Tempura', price: 'R 55' },
      { name: 'Veg', price: 'R 45' }
    ],
  },
  {
    name: 'Fashion Sandwich (4pcs)',
    options: [
      { name: 'Salmon', price: 'R 48' },
      { name: 'Prawn', price: 'R 48' },
      { name: 'Veg', price: 'R 40' },
      { name: 'Crab', price: 'R 40'}
    ],
  },
  {
    name: 'Rainbow Roll (4pcs)',
    options: [
      { name: 'Salmon', price: 'R 58' },
      { name: 'Prawn', price: 'R 58' },
      { name: 'Veg', price: 'R 48' }
    ],
  },
  {
    name: 'Seared Cheese Sushi (8pcs)',
    options: [
      { name: 'Salmon', price: 'R 95' },
      { name: 'Prawn', price: 'R 90' }
    ],
  },
  {
    name: 'Seared Sushi Roll (8pcs)',
    options: [
      { name: 'Tempura Prawn', price: 'R 99' },
      { name: 'Salmon', price: 'R 89' },
      { name: 'Prawn', price: 'R 89' },
      { name: 'Veg', price: 'R 60' }
    ],
  },
  {
    name: 'Fried Sushi (5pcs)',
    options: [
      { name: 'Salmon California Roll', price: 'R 65' },
      { name: 'Fried Salmon Roll', price: 'R 60' },
      { name: 'Crab Spicy Roll', price: 'R 55' }
    ],
  },
  {
    name: 'Mixed Roses (4pcs)',
    options: [
      { name: '1pc Prawn, 1pc Avo, 1pc Crab, 1pc Original', price: 'R 85' }
    ],
  },
  {
    name: 'Golden Roll',
    options: [
      { name: '6 Pieces', price: 'R 65' }
    ],
  },
];

export const LUNCH_SPECIALS = [
  { image: platter1,
    name: 'Platter 1 (13pcs)', 
    description: '4pcs Salmon sandwich, 4pcs Salmon california, 1pc Salmon handroll, 4pcs Avo maki.', 
    price: 'R 128' 
  },
  { image: platter2, 
    name: 'Platter 2 (15pcs)', 
    description: '4pcs Veg sandwich, 8pcs Veg rainbow, 2pcs Avo nigiri, 1pc Veg handroll.', 
    price: 'R 98' 
  },
  { image: platter3, 
    name: 'Platter 3 (14pcs)', 
    description: '4pcs Prawn sandwich, 4pcs Prawn california, 2pcs Prawn nigiri, 4pcs Avo maki.', 
    price: 'R 118' 
  },
  { image: platter4, 
    name: 'Platter 4 (14pcs)', 
    description: '4pcs Salmon rainbow, 4pcs Avo maki, 2pcs Salmon roses, 4pcs Salmon california.', 
    price: 'R 128' 
  },
];

export const SUSHI_PLATTERS = [
  { image: prawnPlatter, 
    name: 'A. Prawn Platter (23pcs)', 
    description: '8pcs Prawn sandwich, 4pcs Tempura rainbow, 2pcs Prawn nigiri, 1pc Prawn handroll, 8pcs Prawn maki.', 
    price: 'R 229' 
  },
  { image: rainbowPlatter, 
    name: 'B. Rainbow Platter (19pcs)', 
    description: '8pcs Salmon california, 8pcs Salmon rainbow, 3pcs, Salmon roses.', 
    price: 'R 229' 
  },
  { image: deepFriedPlatter, 
    name: 'C. Deep Fried Platter (20pcs)', 
    description: '4pcs Prawn sandwich, 4pcs Salmon california, 4pcs Dragon flower, 8pcs Fried salmon.', 
    price: 'R 199' 
  },
  { image: chefsPlatter, 
    name: "D. Chef's Platter (16pcs)", 
    description: '4pcs Salmon roses, 4pcs Dragon flower roll, 4pcs Mixed roses, 4pcs Tempura rainbow.', 
    price: 'R 199' 
  },
  { image: tempuraPlatter, 
    name: 'E. Tempura Platter (16pcs)', 
    description: '4pcs Deep fried california, 4pcs Dragon flower, 4pcs Tempura rainbow, 4pcs Rock prawn roll.', 
    price: 'R 169' 
  },
  { image: salmonLunch, 
    name: 'F. Salmon Lunch (18pcs)', 
    description: '4pcs Fashion sandwich, 4pcs Rainbow roll, 8pcs Salmon maki, 2pcs Roses.', 
    price: 'R 179' 
  },
  { image: vegPlatter, 
    name: 'G. Veg Platter (19pcs)', 
    description: '8pcs Veg sandwich, 8pcs Avo maki, 2pcs Avo nigiri, 1pc Avo handroll.', 
    price: 'R 149' 
  },
  { image: sixFlavours, 
    name: '6 Flavours Nigiri (6pcs)', 
    description: '1pc Original, 1pc Spicy, 1pc Sweet chilli, 1pc Teriyaki, 1pc Caviar, 1pc Black pepper.', 
    price: 'R 99' 
  }
];