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

export const SECTION_BACKGROUNDS = {
  sushi: null,
  lunchSpecials: null,
  sushiPlatters: null,
};

// Sushi items with multiple price options (no images)
export const SUSHI = [
  {
    name: 'Maki',
    options: [
      { name: 'Salmon', price: 'R 48' },
      { name: 'Prawn', price: 'R 48' },
      { name: 'Prawn Tempura', price: 'R 50' },
      { name: 'Veg', price: 'R 38' },
      { name: 'Crab', price: 'R 38' },
    ],
  },
  {
    name: 'Nigiri',
    options: [
      { name: 'Salmon', price: 'R 55' },
      { name: 'Tuna', price: 'R 60' },
      { name: 'Prawn', price: 'R 52' },
      { name: 'Eel', price: 'R 58' },
    ],
  },
  {
    name: 'Sashimi',
    options: [
      { name: 'Salmon', price: 'R 85' },
      { name: 'Tuna', price: 'R 90' },
      { name: 'Mixed', price: 'R 95' },
    ],
  },
  {
    name: 'California Roll',
    options: [
      { name: 'Classic', price: 'R 65' },
      { name: 'Tempura', price: 'R 70' },
      { name: 'Spicy', price: 'R 68' },
    ],
  },
  {
    name: 'Rainbow Roll',
    options: [
      { name: 'Regular', price: 'R 85' },
      { name: 'Deluxe', price: 'R 95' },
    ],
  },
  {
    name: 'Dragon Roll',
    options: [
      { name: 'Eel & Avocado', price: 'R 90' },
      { name: 'Prawn Tempura', price: 'R 88' },
    ],
  },
  {
    name: 'Spicy Tuna Roll',
    options: [
      { name: 'Regular', price: 'R 72' },
      { name: 'Extra Spicy', price: 'R 75' },
    ],
  },
  {
    name: 'Philadelphia Roll',
    options: [
      { name: 'Classic', price: 'R 68' },
      { name: 'Smoked Salmon', price: 'R 75' },
    ],
  },
  {
    name: 'Temaki (Hand Roll)',
    options: [
      { name: 'Salmon', price: 'R 45' },
      { name: 'Tuna', price: 'R 48' },
      { name: 'Prawn', price: 'R 45' },
      { name: 'Veg', price: 'R 35' },
    ],
  },
  {
    name: 'Futomaki',
    options: [
      { name: 'Mixed Seafood', price: 'R 78' },
      { name: 'Vegetarian', price: 'R 58' },
    ],
  },
  {
    name: 'Salmon Roses',
    options: [
      { name: '4 Pieces', price: 'R 75' },
      { name: '8 Pieces', price: 'R 140' },
    ],
  },
  {
    name: 'Inari',
    options: [
      { name: 'Salmon', price: 'R 52' },
      { name: 'Tuna', price: 'R 55' },
      { name: 'Veg', price: 'R 42' },
    ],
  },
];

export const LUNCH_SPECIALS = [
  { image: null, name: 'Bento Box Special', description: 'Choice of California roll, 3pc nigiri, miso soup, and edamame.', price: 'R 120' },
  { image: null, name: 'Sushi & Sashimi Combo', description: '6pc sushi, 6pc sashimi, served with miso soup.', price: 'R 145' },
  { image: null, name: 'Salmon Lover Set', description: '8pc salmon maki, 2pc salmon nigiri, 3pc salmon sashimi.', price: 'R 135' },
  { image: null, name: 'Vegetarian Delight', description: 'Assorted vegetarian rolls with avocado, cucumber, and pickled radish.', price: 'R 95' },
];

export const SUSHI_PLATTERS = [
  { image: null, name: 'Family Platter', description: '40 pieces: Mixed maki, nigiri, and California rolls.', price: 'R 450' },
  { image: null, name: 'Deluxe Platter', description: '60 pieces: Premium selection of sushi and sashimi.', price: 'R 680' },
  { image: null, name: 'Party Platter', description: '80 pieces: Ultimate variety for sharing at parties.', price: 'R 850' },
  { image: null, name: 'Sashimi Platter', description: '30 pieces: Fresh cuts of salmon, tuna, and yellowtail.', price: 'R 380' },
  { image: null, name: 'Vegetarian Platter', description: '36 pieces: All vegetarian rolls and nigiri.', price: 'R 320' },
  { image: null, name: 'Salmon Platter', description: '30 pieces: All salmon - maki, nigiri, and sashimi.', price: 'R 360' },
  { image: null, name: 'Mixed Nigiri Platter', description: '24 pieces: Assorted premium nigiri selection.', price: 'R 420' },
  { image: null, name: 'Roll Combo Platter', description: '48 pieces: Various specialty rolls for sharing.', price: 'R 580' },
];