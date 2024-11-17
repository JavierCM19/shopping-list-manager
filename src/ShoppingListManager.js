const shoppingList = [];

function addItem(item) {
    if (typeof item == "string" && item.trim()) {
        shoppingList.push(item.trim());
    }
}

function removeItem(index) {
    if (index >= 0 && index < shoppingList.length) {
        shoppingList.splice(index, 1);
    } 
}

function clearList() {
    shoppingList.length = 0;
}

function getItems() {
    return shoppingList;
}

module.exports = { addItem, removeItem, getItems, clearList };