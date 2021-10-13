import React from 'react';
import './_style.scss';
import { observer } from 'mobx-react';

import itemStore from '../../store/item-list';

interface itemProps {
  item: {
    id: number,
    name: string,
    available: boolean
  }
}

const ItemView = (props: itemProps) => {
  return (
    <div className="item">
      <div className={props.item.available ? 'item--available' : 'item--unavailable'}>
        <div>Item ID : {props.item.id}</div>
        <div className="item__name">Item Name : {props.item.name}</div>
      </div>

      <div>
        <button onClick={() => { itemStore.toggleAvailable(props.item.id) }}>
          Toggle Available
        </button>

        <button onClick={() => { itemStore.deleteItem(props.item.id) }}>
          Delete
        </button>
      </div>
    </div>
  )
};

const itemStoreObserver = observer(ItemView);

export default itemStoreObserver;