import { useState, useEffect } from 'react'

export const WaterItem = (props) => {
  const { item } = props;

  const onClick = () => {
    if(!item.isActive) item.count = 1;
    item.isActive = !item.isActive
    props.onChange(item);
  }

  const changeCounter = (val) => {
    if(val > 0 && val < 100){
      item.count = val;
      if(item.isActive){
        props.onChange(item);
      }
    }
  }

  return (
    <div className={`water-item ${item.isActive ? 'water-item--active' : ''}`}>
      <div onClick={onClick} className="water-item__card">
        <div className="water-item__size">{ item.size } л</div>
        <div className="water-item__price">{ item.price } ₽</div>
        <div className="water-item__image">
          <img src={props.item.imgPath} alt=""></img>
        </div>
        <div className="water-item__toggle"></div>
      </div>
      <div className={`water-item__counter ${item.isActive ? 'water-item__counter--visible' : 'water-item__counter--hidden'}`}>
        <div onClick={() => changeCounter(item.count - 1)} className="water-item__arrow water-item__arrow--minus"></div>
        <div className="water-item__amount">{ item.count }</div>
        <div onClick={() => changeCounter(item.count + 1)} className="water-item__arrow water-item__arrow--plus"></div>
      </div>
    </div>
  )
}