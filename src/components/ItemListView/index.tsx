import React from 'react';
import ItemView from '../ItemView';
import { observer } from 'mobx-react';

import itemListStore from '../../store/item-list';

const ItemListView = () => {
  return (
    <div>
      <h4 style={{ margin: 0 }}>Total Items: {itemListStore.getTotalItemCount}</h4>
      <span style={{ fontSize: '12px' }}>(This is computed value)</span>

      <ul style={{ padding: 0 }}>
        {itemListStore.itemList.map(item => (
          <ItemView item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
};

const ItemListObserver = observer(ItemListView);

export default ItemListObserver;