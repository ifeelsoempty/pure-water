import { useState } from 'react'
import { WaterItemsData } from './WaterItemsData'
import { WaterItem } from './WaterItem'

export const Water = (props) => {
  const [items, setItems] = useState(WaterItemsData);

  const onItemChange = (newItem) => {
    const newItems = items.map((item) => {
      return newItem.id === item.id ? newItem : item;
    })
    setItems(newItems);
    props.onChange(newItems);
  }

  return (
    <div className="water">
      <div className="water__title">Вода</div>
      <div className="water__list">
        {WaterItemsData.map(item => {
          return <WaterItem onChange={onItemChange} item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}