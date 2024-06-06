export default class Section {
  constructor({ items, renderer }, classSelector) {
    //items are array of data
    this._items = items;
    //renderer is a function that creates and adds a single item to the page
    this._renderer = renderer;
    this._classSelector = classSelector;
    this._container = document.querySelector(classSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._container.prepend(item);
  }
  setItems(items) {
    this._items = items;
}

  // getItem(itemId){
  //   return this._items.find((item)=>item.id===itemId);
  // }
}
