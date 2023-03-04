import XboxWireless from '../imgs/products/xbox-controller.jpeg';
import PS5WirelessFront from '../imgs/products/ps5-controller.webp';
import PS4WirelessFront from '../imgs/products/ps4-controller.webp';
import SwitchFront from '../imgs/products/switch-controller0.avif';

const controllers = [
  {
    name: 'Xbox Wireless Controller',
    console: 'Xbox Series X|S and Xbox One',
    price: 59.99,
    image: XboxWireless,
    type: 'controllers',
    id: 6,
  },
  {
    name: 'DualSense Wireless Controller',
    console: 'PlayStation 5',
    price: 69.99,
    image: PS5WirelessFront,
    type: 'controllers',
    id: 7,
  },
  {
    name: 'DualShock 4 Wireless Controller',
    console: 'PlayStation 4',
    price: 54.99,
    image: PS4WirelessFront,
    type: 'controllers',
    id: 8,
  },
  {
    name: 'Joy-Con Set (L+R)',
    console: 'Nintendo Switch',
    price: 79.99,
    image: SwitchFront,
    type: 'controllers',
    id: 9,
  },
]

export default controllers;
