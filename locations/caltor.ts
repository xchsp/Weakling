import {strangerDialog} from "../data/dialogs/caltor/strangerDialog.js";
import {baelinDialog} from "../data/dialogs/caltor/baelinDialog.js";
import {gregDialog, gregQuestAcceptedDialog} from "../data/dialogs/caltor/gregDialog.js";
import Npc from "../entities/npc.js";
import {bodgerDialog} from "../data/dialogs/caltor/bodgerDialog.js";
import {GeneralLocation} from "./generalLocation.js";
import {announcementsDialog, announcementsEmptyDialog} from "../data/dialogs/caltor/announcementsDialog.js";
import {
    fountainChangedDialog,
    fountainSignDialog,
    fountainVandalDialog
} from "../data/dialogs/caltor/fountainSignDialog.js";
import {Trigger} from "../entities/trigger.js";

export class CaltorScene extends GeneralLocation {
    constructor() {
        super({key: 'Caltor'});
    }

    public preload() {
        super.preload()
    }

    public init(data) {
        super.init(data)
    }

    public create() {
        super.create('caltor');

        const charPickerMapObject = this.getMapObject(`Character Picker`);
        new Trigger({
            scene: this,
            name: charPickerMapObject.name,
            triggerX: charPickerMapObject.x,
            triggerY: charPickerMapObject.y,
            triggerW: charPickerMapObject.width,
            triggerH: charPickerMapObject.height,
            callback: () => {
                this.switchToScene('CharacterPicker', {}, false)
            }
        });

        let layer4visible = true;
        const barracksMapObject = this.getMapObject(`Barracks`);
        new Trigger({
            scene: this,
            name: barracksMapObject.name,
            triggerX: barracksMapObject.x,
            triggerY: barracksMapObject.y,
            triggerW: barracksMapObject.width,
            triggerH: barracksMapObject.height,
            interaction: 'overlap',
            callback: () => {
                if (layer4visible) {
                    this.layers.find(layer => layer.layer.name === 'Barracks Roof').setVisible(false);
                    layer4visible = false
                }
            }
        });

        const stranger = new Npc({
            scene: this,
            mapObjectName: "Stranger",
            initDialog: strangerDialog,
            interactionCallback: param => {
                if (param === 'daggerObtained') {
                    this.player.addItemToInventory('dagger-weapon');
                }
            }
        });

        const greg = new Npc({
            scene: this,
            mapObjectName: "Greg",
            initDialog: gregDialog,
            interactionCallback: param => {
                if (param === 'accept') {
                    this.player.addQuest('gregsBucket');
                    greg.setDialog(gregQuestAcceptedDialog);
                }
            }
        });

        const bodger = new Npc({
            scene: this,
            mapObjectName: "Bodger",
            initDialog: bodgerDialog,
            items: [
                {itemId: 'copper-pieces', quantity: 10},
                {itemId: 'dagger-weapon', quantity: 1},
                {itemId: 'leather-armor', quantity: 1},
                {itemId: 'leather-pants', quantity: 1},
                {itemId: 'leather-boots', quantity: 1},
            ],
            interactionCallback: (param) => {
                if (param === 'openShop') {
                    bodger.startTrade();
                }
                if (param === 'goodsSold') {
                    this.player.addItemToInventory('copper-pieces', 100);
                    bodger.addItemsToTrade([
                        {itemId: 'minerals', quantity: 10},
                        {itemId: 'basket', quantity: 10},
                    ]);
                    this.player.updateQuest('bigCaltorTrip', 'goodsSold');
                }
                if (param === 'goodsSoldAndOpenShop') {
                    this.player.addItemToInventory('copper-pieces', 100);
                    bodger.addItemsToTrade([
                        {itemId: 'minerals', quantity: 10},
                        {itemId: 'basket', quantity: 10},
                    ]);
                    this.player.updateQuest('bigCaltorTrip', 'goodsSold');
                    bodger.startTrade();
                }
            }
        });

        const baelin = new Npc({scene: this, mapObjectName: 'Baelin', initDialog: baelinDialog});

        const announcementsDesk = new Npc({
            scene: this,
            name: 'Announcements Desk',
            mapObjectName: 'Announcements',
            initDialog: announcementsDialog,
            interactionCallback: (param) => {
                if (param === 'questAccepted') {
                    announcementsDesk.setDialog(announcementsEmptyDialog);
                    this.player.addQuest('boarsAtTheFields');
                }
            }
        });

        const kasima = new Npc({
            scene: this,
            mapObjectName: 'Kasima',
            items: [
                {itemId: 'copper-pieces', quantity: 200},
                {itemId: 'rope-belt', quantity: 1},
                {itemId: 'dagger-weapon', quantity: 1},
                {itemId: 'leather-armor', quantity: 1},
                {itemId: 'invisibility-cape', quantity: 1},
                {itemId: 'leather-gloves', quantity: 1},
            ], interactionCallback: () => {
                kasima.startTrade();
            }
        });

        const fountain = new Npc({
            scene: this,
            mapObjectName: 'Fountain sign',
            initDialog: fountainSignDialog,
            interactionCallback: () => {
                if (this.player.getQuestById('theSelflessSpirit')?.currentStates.includes('started')) {
                    this.player.updateQuest('theSelflessSpirit', 'falseNameLearned');
                }
            }
        });

        this.events.on('wake', (scene) => {
            if (this.player.getQuestById('theSelflessSpirit')?.currentStates.includes('trueNameLearned') &&
                !this.player.getQuestById('theSelflessSpirit')?.currentStates.includes('deedsGlorified')
            ) {
                fountain.setDialog(fountainVandalDialog, (param) => {
                    if (param === 'fountainVandalized') {
                        this.player.updateQuest('theSelflessSpirit', 'deedsGlorified');
                        fountain.setDialog(fountainChangedDialog, () => {
                        });
                    }
                })
            }
        });
    }

    public update() {
        super.update();
    }
}
