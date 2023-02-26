import XboxWireless from '../imgs/products/xbox-wireless-controller.avif';
import PS5WirelessFront from '../imgs/products/ps5-controller.webp';
import PS5WirelessSide from '../imgs/products/ps5-controller1.webp';
import PS4WirelessFront from '../imgs/products/ps4-controller.webp';
import PS4WirelessSide from '../imgs/products/ps4-controller1.webp';
import SwitchFront from '../imgs/products/switch-controller0.avif';
import SwitchBox from '../imgs/products/switch-controller1.avif';

const controllers = [
  {
    name: 'Xbox Wireless Controller',
    console: 'Xbox Series X|S and Xbox One',
    price: 59.99,
    images: [
      XboxWireless
    ],
    id: 0,
  },
  {
    name: 'DualSense Wireless Controller',
    console: 'PlayStation 5',
    price: 69.99,
    images: [
      PS5WirelessFront,
      PS5WirelessSide
    ],
    id: 1,
  },
  {
    name: 'DualShock 4 Wireless Controller',
    console: 'PlayStation 4',
    price: 54.99,
    images: [
      PS4WirelessFront,
      PS4WirelessSide
    ],
    id: 2,
  },
  {
    name: 'Joy-Con Set (L+R)',
    console: 'Nintendo Switch',
    price: 79.99,
    images: [
      SwitchFront,
      SwitchBox
    ],
    id: 3,
  },
]

export default controllers;
