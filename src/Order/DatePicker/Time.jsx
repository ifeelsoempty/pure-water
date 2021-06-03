import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { timeSliderBreakpoints } from './utils';

SwiperCore.use([Navigation]);

export const Time = (props) => {
  const [selectedId, setSelectedId] = useState(props.value?.id ?? null);

  useEffect(() => {
    setSelectedId(props.value?.id);
  }, [props.value]);

  const onSelect = (item) => {
    if(item.id === selectedId) return;
    setSelectedId(item.id);
    props.onChange(item);
  }

  return (
    <div className="date-picker-time date-picker__item">
      <div className="date-picker__subtitle">Время</div>
      <div 
        className="date-picker__slider"
      >
        <div className="date-picker__button date-picker__arrow date-picker__arrow--left"></div>
        <Swiper
          slidesPerView={3}
          watchOverflow
          observer
          breakpoints={timeSliderBreakpoints}
          navigation={{
            prevEl: ".date-picker-time .date-picker__arrow--left",
            nextEl: ".date-picker-time .date-picker__arrow--right",
          }}
        >
          {props.intervals.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => onSelect(item)}
                    className={`date-picker-item date-picker__button 
                      ${ item.id === selectedId ? 'date-picker-item--selected' : ''}`
                    }
                  >
                    <div className="date-picker-item__title">
                      {`${item.startTime} - ${item.endTime}`}
                    </div>
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