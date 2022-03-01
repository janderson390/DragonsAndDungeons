class Inventory {
    constructor() {
        this.items = []
    }

    getItemFromName(itemName) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name.toLowerCase() === itemName) {
                return this.items[i];
            }
        }

        return null;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        let didDrop = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name.toLowerCase() === itemName) {
                this.items.splice(i, 1);
                didDrop = true;
                break;
            }
        }

        return didDrop;
    }
}