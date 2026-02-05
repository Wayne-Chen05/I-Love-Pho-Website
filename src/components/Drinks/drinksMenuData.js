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

export const SECTION_BACKGROUNDS = {
  coffee: null,
  tea: null,
  cooldrinks: null,
};

export const COFFEE_MENU = [
  { image: null, name: 'Espresso', description: 'Rich, bold shot of pure Italian espresso.', price: 'R 28' },
  { image: null, name: 'Cappuccino', description: 'Espresso with steamed milk and velvety foam.', price: 'R 38' },
  { image: null, name: 'Latte', description: 'Smooth espresso with creamy steamed milk.', price: 'R 42' },
];

export const TEA_MENU = [
  { image: null, name: 'Green Tea', description: 'Traditional Japanese green tea, light and refreshing.', price: 'R 25' },
  { image: null, name: 'Jasmine Tea', description: 'Fragrant jasmine blossoms infused with green tea.', price: 'R 28' },
  { image: null, name: 'Chai Latte', description: 'Spiced black tea with steamed milk and honey.', price: 'R 38' },
];

export const COOLDRINKS = [
  { name: 'Coca Cola', price: 'R 22' },
  { name: 'Coca Cola Zero', price: 'R 22' },
  { name: 'Sprite', price: 'R 22' },
  { name: 'Fanta Orange', price: 'R 22' },
  { name: 'Stoney Ginger Beer', price: 'R 22' },
  { name: 'Appletiser', price: 'R 28' },
  { name: 'Grapetiser', price: 'R 28' },
  { name: 'Still Water', price: 'R 18' },
  { name: 'Sparkling Water', price: 'R 20' },
  { name: 'Iced Tea', price: 'R 25' },
];