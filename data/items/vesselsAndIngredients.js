import { backpackSlotNames, componentSlotNames, containerSlotNames } from "./itemSlots.js";
export const vesselsAndIngredients = {
    'small-bottle': {
        itemId: 'small-bottle',
        displayName: 'Small empty bottle',
        description: 'Small and cheap empty bottle, nothing special',
        possibleSlots: ['vesselSlot', ...backpackSlotNames, ...containerSlotNames],
        sprite: { key: 'icon-item-set', frame: 306 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'medium-bottle': {
        itemId: 'medium-bottle',
        displayName: 'Medium empty bottle',
        description: 'Medium empty bottle',
        possibleSlots: ['vesselSlot', ...backpackSlotNames, ...containerSlotNames],
        sprite: { key: 'icon-item-set', frame: 305 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'big-bottle': {
        itemId: 'big-bottle',
        displayName: 'Big empty bottle',
        description: 'Big empty bottle',
        possibleSlots: ['vesselSlot', ...backpackSlotNames, ...containerSlotNames],
        sprite: { key: 'icon-item-set', frame: 304 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'giant-bottle': {
        itemId: 'giant-bottle',
        displayName: 'Giant empty bottle',
        description: 'Giant empty bottle',
        possibleSlots: ['vesselSlot', ...backpackSlotNames, ...containerSlotNames],
        sprite: { key: 'icon-item-set', frame: 307 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'coal': {
        itemId: 'coal',
        displayName: 'Coal',
        description: 'A piece of coal which can be used for alchemy or just to paint something on the wall.',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 69 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'sourgrass': {
        itemId: 'sourgrass',
        displayName: 'Sourgrass',
        description: 'Common grass growing in this area. Consumed by herbivore animals, and sometimes as a spice by humans.',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 189 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'apple': {
        itemId: 'apple',
        displayName: 'Apple',
        description: `It is an apple. That's about it.`,
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 224 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'primula-flower': {
        itemId: 'primula-flower',
        displayName: 'Primula',
        description: 'Beautiful blue flower',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 54 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'rocky-rose-flower': {
        itemId: 'rocky-rose-flower',
        displayName: 'Rocky Rose flower',
        description: 'The flower of Rocky Rose',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 172 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'yellow-fingers-flower': {
        itemId: 'yellow-fingers-flower',
        displayName: 'Yellow Fingers flower',
        description: 'The flower of Yellow Fingers flower',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 55 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'pinky-pie-flower': {
        itemId: 'pinky-pie-flower',
        displayName: 'Pinky Pie flower',
        description: 'The flower of Pinky Pie flower',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 53 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'primula-sapling': {
        itemId: 'primula-sapling',
        displayName: 'Primula sapling',
        description: 'The sapling of blue Primula',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base-addition', frame: 234 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'primula-flower'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'rocky-rose-sapling': {
        itemId: 'rocky-rose-sapling',
        displayName: 'Rocky Rose sapling',
        description: 'The sapling of Rocky Rose',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base-addition', frame: 234 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'rocky-rose-flower'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'yellow-fingers-sapling': {
        itemId: 'yellow-fingers-sapling',
        displayName: 'Yellow Fingers sapling',
        description: 'The sapling of Yellow Fingers flower',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base-addition', frame: 234 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'yellow-fingers-flower'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'pinky-pie-sapling': {
        itemId: 'pinky-pie-sapling',
        displayName: 'Pinky Pie sapling',
        description: 'The sapling of Pinky Pie flower',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base-addition', frame: 234 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'pinky-pie-flower'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'carrot-seeds': {
        itemId: 'carrot-seeds',
        displayName: 'Carrot seeds',
        description: 'The seeds of the carrots',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 198 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'carrot'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'carrot': {
        itemId: 'carrot',
        displayName: 'Carrot',
        description: 'Nice grown carrot',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 230 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'cabbage-seeds': {
        itemId: 'cabbage-seeds',
        displayName: 'Cabbage seeds',
        description: 'The seeds of the cabbage',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 198 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'cabbage'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'cabbage': {
        itemId: 'cabbage',
        displayName: 'Cabbage',
        description: 'Nice grown cabbage',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 167 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'pumpkin-seeds': {
        itemId: 'pumpkin-seeds',
        displayName: 'Pumpkin seeds',
        description: 'The seeds of the pumpkin',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 198 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'pumpkin'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'pumpkin': {
        itemId: 'pumpkin',
        displayName: 'Pumpkin',
        description: 'Nice grown pumpkin',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'base', frame: 166 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
    'strawberry-seeds': {
        itemId: 'strawberry-seeds',
        displayName: 'Strawberry seeds',
        description: 'The seeds of the strawberry',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 198 },
        stackable: true,
        modified: false,
        specifics: {
            plantable: 'strawberry'
        },
        sellPrice: 1,
        buyPrice: 2
    },
    'strawberry': {
        itemId: 'strawberry',
        displayName: 'Strawberry',
        description: 'Nice grown strawberry',
        possibleSlots: [...backpackSlotNames, ...containerSlotNames, ...componentSlotNames],
        sprite: { key: 'icon-item-set', frame: 228 },
        stackable: true,
        modified: false,
        specifics: {},
        sellPrice: 1,
        buyPrice: 2
    },
};
//# sourceMappingURL=vesselsAndIngredients.js.map