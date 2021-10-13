import React from 'react';
import ItemView from '../ItemView';
import { observer } from 'mobx-react';

import itemListStore from '../../store/item-list';

const ItemListView = () => {
  return (
    <ul style={{ padding: 0 }}>
      {itemListStore.itemList.map(item => (
        <ItemView item={item} key={item.id} />
      ))}
    </ul>
  )
};

const ItemListObserver = observer(ItemListView);

export default ItemListObserver;