import { useState } from 'react'
import { WaterItemsData } from './WaterItemsData'
import { WaterItem } from './WaterItem'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

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
        <Swiper slidesPerView={3}>
          {WaterItemsData.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <WaterItem onChange={onItemChange} item={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}