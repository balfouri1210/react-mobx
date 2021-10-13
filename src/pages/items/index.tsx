import React from 'react';
import './_style.scss';
import ItemListView from '../../components/ItemListView';
import AddItem from '../../components/AddItem';
import StoreCodeViewer from '../../components/StoreCodeViewer';

function Items() {
  return (
    <div className="items">
      <h2>ItemList Page</h2>
      <p>- 전역 상태관리를 위해 Mobx로 스토어 생성</p>
      <p>- makeAutoObservable로 state와 action을 손쉽게 observable화 가능</p>
      <p>- Add, Delete, Toggle 작업을 action을 통해 수행</p>
      <p>- 업데이트된 state는 해당 state를 사용하고 있는 컴포넌트를 observer로 감싸 자동으로 최신화</p>

      <div className="items__demo">
        <ItemListView />
        <AddItem />
      </div>

      <p>Item List Store Code</p>
      <StoreCodeViewer />
    </div>
  )
}

export default Items;