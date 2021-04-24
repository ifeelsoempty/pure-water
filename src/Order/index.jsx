import { useState, useEffect, useCountUp } from 'react'
import { CustomerForm } from './CustomerForm'
import { Preview } from './Preview'
import { Water } from './Water'
import AnimatedNumber from 'react-animated-number';

export const Order = () => {
  const [price, setPrice] = useState(0);

  const onWaterChange = (items) => {
    let newPrice = 0;

    for (let i = 0; i < items.length ; i++) {
      if(items[i].isActive){
        newPrice += items[i].price * items[i].count;
      }
    }

    setPrice(newPrice);
  }

  const getAnimatedNumber = (val) => {
    return <>{Math.trunc(val)}.<span className="order-total-price__float">{val.toFixed(2).split('.')[1]} ₽</span></>
  }

  return (
    <div className="order">
      <Preview />
      <div className="order-form">
        <CustomerForm />
        <div className="separate"></div>
        <Water onChange={onWaterChange}/>
        <div className="separate"></div>
        <div className="order-total">
          <div className="order-total__top">
            <div className="order-total__title">
              Итого
            </div>
            <AnimatedNumber 
              className="order-total-price" 
              component="div" 
              value={price} 
              duration={500} 
              formatValue={getAnimatedNumber}
            />
          </div>
          <div className="order-total__hr separate separate--solid"></div>
        </div>
      </div>
    </div>
  );
}