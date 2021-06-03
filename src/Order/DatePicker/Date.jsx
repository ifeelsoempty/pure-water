import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { getNextDays, dateSliderBreakpoints } from './utils';

SwiperCore.use([Navigation]);

export const Date = (props) => {
  const [daysArr] = useState(getNextDays(7));
  const [selectedId, setSelectedId] = useState(props.value.id);

  const onSelect = (item) => {
    if(item.id === selectedId) return;
    setSelectedId(item.id);
    props.onChange(item);
  }

  return (
    <div className="date-picker__item">
      <div className="date-picker__subtitle">День</div>
      <div 
        className="date-picker-date date-picker__slider"
      >
        <div className="date-picker__button date-picker__arrow date-picker__arrow--left"></div>
        <Swiper
          slidesPerView={5}
          observer
          breakpoints={dateSliderBreakpoints}
          navigation={{
            prevEl: ".date-picker-date .date-picker__arrow--left",
            nextEl: ".date-picker-date .date-picker__arrow--right",
          }}
        >
          {daysArr.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className={`date-picker-item date-picker__button 
                      ${ item.isWeekend ? 'date-picker-item--weekend' : ''} 
                      ${ item.id === selectedId ? 'date-picker-item--selected' : ''}`
                    }
                    onClick={() => onSelect(item)}
                  >
                    <div className="date-picker-item__title">{ item.dayOfMonth }</div>
                    <div className="date-picker-item__subtitle">{ item.dayOfWeek }</div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="date-picker__button date-picker__arrow date-picker__arrow--right"></div>
      </div>
    </div>
  )
}