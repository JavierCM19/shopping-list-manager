const {addItem, removeItem, getItems, clearList} = require('../src/ShoppingListManager');

test('additem should add an item to the shopping list', () => {
    addItem('Apples');
    expect(getItems()).toContain("Apples");
});

test('addItem should trim whitespace from valid strings', () => {
    addItem('   Bananas   ');
    expect(getItems()).toContain('Bananas');
});

test('addItem should not add non-string inputs', () => {
    addItem(123);
    expect(getItems()).not.toContain(123);
});

test('removeItem should remove an item from the list', () => {
    addItem('Bread');
    removeItem(getItems().indexOf('Bread'));
    expect(getItems()).not.toContain('Bread');
});

test('clearList should remove all items from the list', () => {
    addItem('Milk');
    addItem('Eggs');
    clearList();
    expect(getItems()).toEqual([]);
});