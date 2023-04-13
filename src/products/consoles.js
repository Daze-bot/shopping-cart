import XboxX from '../imgs/products/xbox-series-x.png';
import XboxS from '../imgs/products/xbox-series-s.webp';
import XboxOne from '../imgs/products/xbox-one.jpg';
import PS5 from '../imgs/products/ps5.webp';
import PS4 from '../imgs/products/ps4.webp';
import Switch from '../imgs/products/nintendo-switch.webp';

const consoles = [
  {
    name: 'Xbox Series X',
    price: 499.99,
    image: XboxX,
    type: 'consoles',
    id: 0,
    description: "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately), you get online multiplayer to play with friends and an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios.",
  },
  {
    name: 'Xbox Series S',
    price: 279.99,
    image: XboxS,
    type: 'consoles',
    id: 1,
    description: "The smallest, sleekest Xbox ever. At 60% smaller than Xbox Series X, it delivers the speed and performance of a next-gen, all-digital console at an accessible price point.",
  },
  {
    name: 'Xbox One',
    price: 129.99,
    image: XboxOne,
    type: 'consoles',
    id: 2,
    description: "Xbox One brings together the best exclusive games, the most advanced multiplayer, and entertainment experiences you won't find anywhere else. Play games like Titanfall™ and Halo together with your friends on a network powered by over 300,000 servers for maximum performance. Find new challengers who fit your skill and style with Smart Match, which uses intelligent algorithms to bring the right players together. Turn your best game moments into personalized movies that you can share with friends, or broadcast your gameplay live. Then switch quickly between apps like Netflix, Hulu, and Internet Explorer. Or do two things at once by snapping a game, live TV, a movie or apps side-by-side.",
  },
  {
    name: 'PlayStation 5',
    price: 499.99,
    image: PS5,
    type: 'consoles',
    id: 3,
    description: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.",
  },
  {
    name: 'PlayStation 4',
    price: 209.99,
    image: PS4,
    type: 'consoles',
    id: 4,
    description: "The all new lighter and slimmer PlayStation4 system has a 1TB hard drive for all of the greatest games, TV, music and more. Incredible Games You've come to the right place. Exclusive games take you on incredible journeys, from critically acclaimed indies to award-winning AAA hits. Endless Entertainment Something new and amazing is always in reach. Find what you're looking for and get it at the touch of a button via PlayStation entertainment options like PlayStation Vue and more.",
  },
  {
    name: 'Nintendo Switch',
    price: 299.99,
    image: Switch,
    type: 'consoles',
    id: 5,
    description: "Get the gaming system that lets you play the games you want, wherever you are, however you like. Includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy-Con controllers-one red, one blue. Also includes all the extras you need to get started. This model includes battery life of approximately 4.5 - 9 hours. ",
  },
]

export default consoles;
