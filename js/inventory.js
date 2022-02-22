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
        this.refreshInventoryDisplay();
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

        this.refreshInventoryDisplay();

        return didDrop;
    }

    refreshInventoryDisplay() {
        inventoryTable.innerHTML = "";
        
        for (let i = 0; i < this.items.length; i++) {
            let tr = document.createElement("tr");
            tr.className = "inventoryItem";

            let tdName = document.createElement("td");
            tdName.innerHTML = this.items[i].name;

            let tdValue = document.createElement("td");
            tdValue.innerHTML = this.items[i].value;

            tr.append(tdName);
            tr.append(tdValue);

            inventoryTable.append(tr);
        }
    }
}