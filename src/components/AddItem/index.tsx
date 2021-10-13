import React from 'react';
import { observer } from 'mobx-react';

import itemListStore from '../../store/item-list';

const AddItem = () => {
  return (
    <div>
      <input
        placeholder="New Item"
        value={itemListStore.newItem}
        onChange={(evt) => itemListStore.editNewItem(evt.target.value)} />
      <button onClick={() => { itemListStore.addItem() }}>ADD</button>
    </div>
  )
}

const AddItemObserver = observer(AddItem);

export default AddItemObserver;