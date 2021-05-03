import { useState } from 'react'

import AnimatedNumber from 'react-animated-number';

import { CustomerForm } from './CustomerForm'
import { Preview } from './Preview'
import { Water } from './Water'
import { DatePicker } from './DatePicker'

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
    return (
      <>
        {`${Math.trunc(val)}.`}
        <span className="order-total-price__float">
          {`${val.toFixed(2).split('.')[1]} ₽`}
        </span>
      </>
    )
  }

  return (
    <div className="order">
      <Preview />
      <div className="order-form">
        <CustomerForm />
        <div className="separate"></div>
        <div className="order-row">
          <div className="order-col">
            <Water onChange={onWaterChange}/>
          </div>
          <div className="order-col">
            <DatePicker 
              onChangeInterval={(val) => console.log(val)}
              onChangeDate={(val) => console.log(val)}
            />
          </div>
        </div>
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
              duration={300} 
              formatValue={getAnimatedNumber}
            />
          </div>
          <div className="order-total__hr separate separate--solid"></div>
        </div>
      </div>
    </div>
  );
}