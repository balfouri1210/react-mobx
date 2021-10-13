import { makeAutoObservable } from 'mobx';

interface Iitem {
  id: number;
  name: string;
  available: boolean;
}

class ItemListStore {
  itemList: Iitem[] = [{
    id: 1,
    name: 'Starbucks - iced americano',
    available: true
  }, {
    id: 2,
    name: 'Paris baguette - choco roll cake',
    available: true
  }, {
    id: 3,
    name: 'BHC - fried chicken',
    available: true
  }, {
    id: 4,
    name: 'Twosome place - cheese cake',
    available: true
  }];

  newItem: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  editNewItem(text: string) {
    this.newItem = text;
  }

  addItem() {
    // 이 안에서 어떤일이 일어나던 state는 최종값만을 반영한다.
    // this.itemList = [...this.itemList, {
    //   id: this.itemList[this.itemList.length - 1].id + 1,
    //   name: this.newItem,
    //   available: true
    // }];
    this.itemList.push({
      id: this.itemList[this.itemList.length - 1].id + 1,
      name: this.newItem,
      available: true
    });
  }

  toggleAvailable(itemId: number) {
    this.itemList.forEach(item => {
      if (item.id === itemId) item.available = !item.available;
    })
  }

  deleteItem(itemId: number) {
    this.itemList = this.itemList.filter(item => item.id !== itemId);
  }
}

const item = new ItemListStore();

export default item;