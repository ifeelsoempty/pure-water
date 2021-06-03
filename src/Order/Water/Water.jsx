import { useState } from 'react'
import { waterItemsData, waterSliderBreakpoints } from './utils'
import { WaterItem } from './WaterItem'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import SwiperCore, {
  Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { cloneDeep } from 'lodash';

SwiperCore.use([Pagination]);

export const Water = (props) => {
  const [items, setItems] = useState(waterItemsData);
  const [value] = useState(props.value);

  const onChange = (newItem) => {
    const newItems = items.map((item) => {
      return newItem.id === item.id ? newItem : item;
    })

    setItems(newItems);
    props.onChange(newItems.filter((item) => item.isActive));
  }

  return (
    <div className="water__list">
      <Swiper
        slidesPerView={3}
        breakpoints={waterSliderBreakpoints}
      >
        {items.map(item => {
          const clonedItem = cloneDeep(item);
          
          return (
            <SwiperSlide 
              key={item.id}
            >
              <WaterItem 
                onChange={onChange} 
                item={value.filter((valueItem) => valueItem.id === item.id)[0] || clonedItem} 
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}