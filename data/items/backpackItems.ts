import {backpackSlotNames, containerSlotNames} from "./itemSlots.js";

export const backpackItems: { [key: string]: ItemData } = {
    'mirror-of-travel': {
        itemId: 'mirror-of-travel',
        displayName: 'Mirror of travel',
        description: 'Powerful magic artifact allowing user to travel to the distant lands in a blink of an eye',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 177},
        stackable: false,
        modified: false,
        specifics: {},
        sellPrice: 100,
        buyPrice: 200
    },
    'jeremaya-book': {
        itemId: 'jeremaya-book',
        displayName: 'The biography of Jeremaya the Bandit',
        description: 'The book contains the description of life and deeds of Jeremaya the Bandit, all the way up to his departure from Caltor.',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 213},
        stackable: false,
        modified: false,
        specifics: {},
        sellPrice: 50,
        buyPrice: 100
    },
    'rope': {
        itemId: 'rope',
        displayName: 'Rope',
        description: 'Long and strong rope - best friend of any adventurer.',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 173},
        stackable: false,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'basket': {
        itemId: 'basket',
        displayName: 'Basket',
        description: 'Accurately made, sturdy baskets made by aunt Nahkha for sale',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'base', frame: 876},
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 5,
        buyPrice: 10
    },
    'minerals': {
        itemId: 'minerals',
        displayName: 'Minerals',
        description: 'A chunk of minerals',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 274},
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 5,
        buyPrice: 10
    },
    'copper-key': {
        itemId: 'copper-key',
        displayName: 'Copper key',
        description: 'Simple key most likely used to unlock some simple door or chest',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 185},
        stackable: false,
        modified: false,
        specifics: {
            opens: ''
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'hargkakhs-key': {
        itemId: 'hargkakhs-key',
        displayName: `Hargkakh's key`,
        description: 'Simple key most likely used to unlock some simple door or chest',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 185},
        stackable: false,
        modified: false,
        specifics: {
            opens: ''
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'copper-pieces': {
        itemId: 'copper-pieces',
        displayName: 'Copper pieces',
        description: 'Basic currency of Ardhon',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames],
        sprite: {key: 'icon-item-set', frame: 200},
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 1
    }
};
