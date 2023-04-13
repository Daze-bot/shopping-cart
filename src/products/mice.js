import Corsair from '../imgs/products/corsair-mouse.jpg';
import Razer from '../imgs/products/razer-mouse.jpg';
import Logitech from '../imgs/products/logitech-mouse.jpg';
import HyperX from '../imgs/products/hyperX-mouse.jpg';
import SteelSeries from '../imgs/products/steelSeries-mouse.jpg';

const mice = [
  {
    name: 'CORSAIR - M65 Ultra Wireless Mouse',
    price: 89.99,
    image: Corsair,
    type: 'mice',
    id: 20,
    description: "Make all your clicks count with the CORSAIR M65 RGB ULTRA WIRELESS Tunable Gaming Mouse, boasting a durable aluminum frame and hyper-fast SLIPSTREAM WIRELESS for sub-1ms latency. Experience pinpoint accuracy powered by a 26,000 DPI MARKSMAN optical sensor and optical OMRON switches, while sensor fusion technology enables convenient tilt gestures for in-game actions.",
  },
  {
    name: 'Razer - Naga Trinity Wired Mouse',
    price: 79.99,
    image: Razer,
    type: 'mice',
    id: 21,
    description: "Experience the power of total control in your hand, no matter what game you play. Designed to provide you that Edge you need in MOBA/mmO gameplay, the Razer Naga Trinity lets you configure your mouse for everything from Weapons to build customizations so you'll always be ahead of the competition. 1000 Hz Ultrapolling,Razer Synapse 3 (Beta) enabled, Ergonomic right-handed design with enhanced rubber side grips,Compatible with Xbox One for basic input, Gaming-grade tactile scroll wheel.",
  },
  {
    name: 'Logitech - G502 HERO Wired Mouse',
    price: 39.99,
    image: Logitech,
    type: 'mice',
    id: 22,
    description: "Logitech updated its iconic G502 gaming mouse to deliver even higher performance and more precise functionality than ever. Logitech G502 Hero high Performance Gaming mouse features the next generation Hero 16K Optical sensor, The highest performing and most efficient gaming sensor Logitech has ever made. An all-New lens and an updated tracking algorithm deliver ultra-precise tracking with no acceleration, smoothing, or filtering over the entire DPI range. Now, customize RGB mouse lighting to match your style and environment or sync to other Logitech G products. No matter your gaming style, It's easy to tweak G502 Hero to match your requirements, with custom profiles for your games, adjustable sensitivity from 200 up to 16, 000 DPI, and a tunable weight system that allows for tuning and balancing of up to five 3. 6G weights for just the right balance and feel.",
  },
  {
    name: 'HyperX - Pulsefire Haste Wired Mouse',
    price: 39.99,
    image: HyperX,
    type: 'mice',
    id: 23,
    description: "The HyperX Pulsefire Haste is built for elite gamers looking to gain every fraction of a second possible in their quest to be the best. Weighing in at 59 grams, this full-featured, responsive honeycomb shell mouse has everything you need, just without the extra weight. TTC Golden micro switches provide satisfying, reliable clicks and are rated for 60 million clicks, so you won't have to worry about missing inputs. The flexible HyperFlex USB cable and the virgin-grade PTFE skates work together to give you a smooth, easy glide to make dominating the game simple.",
  },
  {
    name:'SteelSeries - Aerox 5 Wireless Mouse',
    price: 119.99,
    image: SteelSeries,
    type: 'mice',
    id: 24,
    description: "Empower yourself to command any battlefield with the versatile, ultra-lightweight Aerox 5 Wireless. Victory is in your hand with a lightning-fast 74g build, engineered to excel in any gaming genre with a wide range of customization. 9 programmable buttons provide gamers with quick shortcuts and macros to dominate the competition, including a convenient 5-button side panel and the custom-built up/down flick switch. Next-gen Quantum 2.0 Wireless brings lag-free gameplay with the flexibility of 2.4GHz and Bluetooth 5.0 connectivity for up to 180 hours. Our powerful IP54-rated AquaBarrier protection shields the Aerox 5 from water, dust, dirt, and more. Engineered to perfection, the Aerox 5 Wireless has all the components for glory, except for one - you.",
  },
];

export default mice;