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
    description: "Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay with battery usage up to 40 hours. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back-case. Seamlessly capture and share content such as screenshots, recordings, and more with the Share button. Connect using the USB-C port for direct plug and play to console and PC. Support for AA batteries is included on the rear. Plug in any compatible headset with the 3.5mm audio jack. Use the Xbox Accessories app to remap buttons and create custom controller profiles for your favorite games. Quickly pair with, play on, and switch between devices including Xbox Series X|S, Xbox One, Windows 10 PCs, and Android. iOS support coming in the future.",
  },
  {
    name: 'DualSense Wireless Controller',
    console: 'PlayStation 5',
    price: 69.99,
    image: PS5WirelessFront,
    type: 'controllers',
    id: 7,
    description: "Ignite your gaming nights on your PS5 console with the DualSense Midnight Black wireless controller. Part of a new line-up of galaxy-themed colors, this sleek design takes inspiration from how we view the wonders of space through the night sky, with subtle shades of black and light gray detailing. Discover a deeper, highly immersive gaming experience** that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback*, dynamic adaptive triggers* and a built-in microphone, all integrated into an iconic comfortable design. (*Available when feature is supported by game. **Compared to DUALSHOCK 4 wireless controller. †Internet and account for PlayStation Network required.)",
  },
  {
    name: 'DualShock 4 Wireless Controller',
    console: 'PlayStation 4',
    price: 54.99,
    image: PS4WirelessFront,
    type: 'controllers',
    id: 8,
    description: "The DualShock 4 Wireless Controller features familiar controls, and incorporates several innovative features to usher in a new era of interactive experiences. Its definitive analog sticks and trigger buttons have been improved for greater feel and sensitivity. A multi touch, clickable touch pad expands gameplay possibilities, while the incorporated light bar in conjunction with the PlayStation Camera allows for easy player identification and screen adjustment when playing with friends in the same room. The addition of the Share button makes utilizing the social capabilities of the PlayStation 4 as easy as the push of a button. The DualShock 4 Wireless Controller is more than a controller; it's your physical connection to a new era of gaming.",
  },
  {
    name: 'Joy-Con Set (L+R)',
    console: 'Nintendo Switch',
    price: 79.99,
    image: SwitchFront,
    type: 'controllers',
    id: 9,
    description: "Introducing Joy-Con, Controllers that make new kinds of gaming possible, for use with the Nintendo Switch system. The versatile Joy-Con offer multiple surprising new ways for players to have fun. Two Joy-Con can be used independently in each hand, or together as One game Controller when attached to the Joy-Con grip. They can also attach to the main Console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games. Each Joy-Con has a full set of buttons and can act as a standalone Controller, and each Includes an accelerometer and gyro-sensor, making independent left and right motion control possible. Includes 1 left Joy-Con, 1 right Joy-Con, and 2 Black Joy-Con wrist strap accessories.",
  },
]

export default controllers;
