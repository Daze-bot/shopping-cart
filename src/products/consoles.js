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
  },
  {
    name: 'Xbox Series S',
    price: 279.99,
    image: XboxS,
    type: 'consoles',
    id: 1,
  },
  {
    name: 'Xbox One',
    price: 129.99,
    image: XboxOne,
    type: 'consoles',
    id: 2,
  },
  {
    name: 'PlayStation 5',
    price: 499.99,
    image: PS5,
    type: 'consoles',
    id: 3,
  },
  {
    name: 'PlayStation 4',
    price: 209.99,
    image: PS4,
    type: 'consoles',
    id: 4,
  },
  {
    name: 'Nintendo Switch',
    price: 299.99,
    image: Switch,
    type: 'consoles',
    id: 5,
  },
]

export default consoles;
