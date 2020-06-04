import GeneralCharacter from "../generalCharacter.js";
import Item from "../../entities/item.js";
export class Adventurer extends GeneralCharacter {
    constructor() {
        super();
        this.inventory = new Map();
        this.actionPointsBase = { physical: 1, magical: 1, misc: 1 };
        this.actionPointsIncrement = { physical: 1, magical: 1, misc: 1 };
    }
    getInventoryItemById(itemId, excludeBackpack = false) {
        const entreeFound = [...this.inventory.entries()].find(([slot, existingItem]) => {
            if (excludeBackpack) {
                return existingItem.itemId === itemId && slot.includes('backpack') === false;
            }
            else {
                return existingItem.itemId === itemId;
            }
        });
        if (entreeFound)
            return entreeFound[1];
    }
    _getInventorySlotOfItem(item) {
        for (let [slot, inventoryItem] of this.inventory.entries()) {
            if (inventoryItem === item) {
                return slot;
            }
        }
        return undefined;
    }
    getEmptyBackpackSlot() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const testedSlot = `backpack${i}_${j}`;
                if (this.inventory.get(testedSlot) === undefined) {
                    return testedSlot;
                }
            }
        }
        return undefined;
    }
    _addItemToEmptyBackpackSlot(item) {
        const emptyBackpackSlot = this.getEmptyBackpackSlot();
        if (emptyBackpackSlot) {
            return this._addItemToTheMap(emptyBackpackSlot, item);
        }
        else {
            return undefined;
        }
    }
    _addItemToTheMap(slot, item) {
        if (slot === undefined || item === undefined) {
            throw `Error while adding ${item} to ${slot}`;
        }
        this.inventory.set(slot, item);
        this.applyItems();
        return item;
    }
    addItemToInventory(passedItem, quantity = 1, slot) {
        if (typeof quantity !== "number")
            throw 'addItemToInventory received quantity not as a number';
        const item = typeof passedItem === "string" ? new Item(passedItem, quantity) : passedItem;
        if (slot !== undefined) {
            const itemInTheSlot = this.inventory.get(slot);
            if (itemInTheSlot) {
                if (itemInTheSlot.itemId !== item.itemId) {
                    throw `Trying to add ${item.itemId} to the ${slot} slot where ${itemInTheSlot.itemId} resides`;
                }
                else {
                    if (item.stackable === true) {
                        itemInTheSlot.quantity += quantity;
                    }
                    else {
                        throw `Trying to stack un-stackable item ${item.itemId} in the slot ${slot}`;
                    }
                }
            }
            else {
                return this._addItemToTheMap(slot, item);
            }
        }
        else {
            if (item.stackable === true) {
                const sameItemInInventory = this.getInventoryItemById(item.itemId);
                if (sameItemInInventory) {
                    sameItemInInventory.quantity += quantity;
                }
                else {
                    return this._addItemToEmptyBackpackSlot(item);
                }
            }
            else {
                return this._addItemToEmptyBackpackSlot(item);
            }
        }
    }
    removeItemFromInventory(item, quantity = 1) {
        const slotOfItem = this._getInventorySlotOfItem(item);
        if (slotOfItem === undefined || quantity > item.quantity) {
            throw 'Trying to remove non-existing item (or more items than possessed)!';
        }
        if (quantity === item.quantity || !item.quantity) {
            this.inventory.delete(slotOfItem);
        }
        else {
            item.quantity -= quantity;
        }
        this.applyItems();
    }
    getAttackDamage() {
        var _a, _b, _c, _d;
        const rightHandDamage = ((_b = (_a = this.inventory.get('rightHand')) === null || _a === void 0 ? void 0 : _a.specifics) === null || _b === void 0 ? void 0 : _b.damage) || 1;
        const leftHandDamage = ((_d = (_c = this.inventory.get('leftHand')) === null || _c === void 0 ? void 0 : _c.specifics) === null || _d === void 0 ? void 0 : _d.damage) / 2 || 0;
        return Math.round(rightHandDamage + leftHandDamage);
    }
    getAllItems() {
        return this.inventory;
    }
    getItemInSlot(slotName) {
        return this.inventory.get(slotName);
    }
    applyItems() {
        Object.entries(this.characteristicsModifiers).forEach(([group, value]) => {
            Object.entries(value).forEach(([subgroup, value]) => {
                this.characteristicsModifiers[group][subgroup] = this.characteristicsModifiers[group][subgroup].filter(modifier => !modifier.source.itemId);
            });
        });
        this.inventory.forEach((item, slot) => {
            var _a, _b;
            if (slot.includes('backpack') === false) {
                (_b = (_a = item.specifics) === null || _a === void 0 ? void 0 : _a.additionalCharacteristics) === null || _b === void 0 ? void 0 : _b.forEach(char => {
                    Object.entries(char).forEach(([targetString, targetValue]) => {
                        const target = targetString.split('.');
                        this.characteristicsModifiers[target[0]][target[1]].push({
                            value: targetValue,
                            source: item
                        });
                    });
                });
            }
        });
        this.recalculateCharacteristics();
    }
    getAvailableActions() {
        let combinedActions = [...this.availableActions];
        this.inventory.forEach((item, slot) => {
            var _a, _b;
            if (((_a = item.specifics) === null || _a === void 0 ? void 0 : _a.additionalActions) && !slot.includes('backpack')) {
                combinedActions = [...combinedActions, ...(_b = item.specifics) === null || _b === void 0 ? void 0 : _b.additionalActions];
            }
        });
        return [...new Set(combinedActions)];
    }
    startRound(roundType) {
        super.startRound(roundType);
        if (roundType === 'preparation') {
            this.isAlive = true;
            this.applyItems();
        }
    }
    freeze() {
    }
    destroy() {
    }
}
//# sourceMappingURL=adventurer.js.map