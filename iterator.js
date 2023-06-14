// Create an object with an iterator
const myCollection = {
  items: [],

  // Add items to the collection
  addItem(item) {
    this.items.push(item);
  },

  // Implement the Symbol.iterator method
  [Symbol.iterator]() {
    let index = 0;

    // Implement the next method
    return {
      next: () => {
        if (index < this.items.length) {
          return {
            value: this.items[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

// Add some items to the collection
myCollection.addItem("Item 1");
myCollection.addItem("Item 2");
myCollection.addItem("Item 3");

// Iterate over the collection using a for...of loop
for (const item of myCollection) {
  console.log(item);
}
