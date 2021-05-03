import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { getNextDays, getItemById } from './utils';

SwiperCore.use([Navigation]);

// It's better to separate this component into 2 components
// and take out state control to parent

export const DatePicker = (props) => {
  const [daysArr] = useState(getNextDays(7));
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(1);
  const [selectedIntervalId, setSelectedIntervalId] = useState(null);

  const onSelectItem = (id) => {
    if(id === selectedItemId) return;
    setSelectedItemId(id);
    // setSelectedIntervalId(null);
  }

  const onSelectInterval = (id) => {
    if(id === selectedIntervalId) return;
    setSelectedIntervalId(id);
  }

  useEffect(() => {
    setSelectedItem(getItemById(daysArr, selectedItemId));
    props.onChangeDate(getItemById(daysArr, selectedItemId));
  }, [selectedItemId, daysArr, props]);

  useEffect(() => {
    const intervalsArr = getItemById(daysArr, selectedItemId).intervals;
    props.onChangeInterval(getItemById(intervalsArr, selectedIntervalId));
  }, [selectedIntervalId, selectedItemId, daysArr, props]);

  return (
    <div className="date-picker">
      <div className="date-picker__title">Дата и время доставки</div>
      <div className="date-picker__item">
        <div className="date-picker__subtitle">День</div>
        <div 
          className="date-picker__slider"
        >
          <div className="date-picker__button date-picker__arrow date-picker__arrow--left"></div>
          <Swiper
            slidesPerView={5}
            navigation={{
              prevEl: ".date-picker__arrow--left",
              nextEl: ".date-picker__arrow--right",
            }}
          >
            {daysArr.map((dayItem) => {
                return (
                  <SwiperSlide key={dayItem.id}>
                    <div
                      className={`date-picker-item date-picker__button 
                        ${ dayItem.isWeekend ? 'date-picker-item--weekend' : ''} 
                        ${ dayItem.id === selectedItemId ? 'date-picker-item--selected' : ''}`
                      }
                      onClick={() => onSelectItem(dayItem.id)}
                    >
                      <div className="date-picker-item__title">{ dayItem.dayOfMonth }</div>
                      <div className="date-picker-item__subtitle">{ dayItem.dayOfWeek }</div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <div className="date-picker__button date-picker__arrow date-picker__arrow--right"></div>
        </div>
      </div>
      <div className="date-picker__item">
        <div className="date-picker__subtitle">Время</div>
        <div 
          className="date-picker__slider"
        >
          <Swiper
            slidesPerView={3}
          >
            {selectedItem && selectedItem.intervals.map((intervalItem) => {
                return (
                  <SwiperSlide key={intervalItem.id}>
                    <div
                      onClick={() => onSelectInterval(intervalItem.id)}
                      className={`date-picker-item date-picker__button 
                        ${ intervalItem.id === selectedIntervalId ? 'date-picker-item--selected' : ''}`
                      }
                    >
                      <div className="date-picker-item__title">
                        {`${intervalItem.startTime} - ${intervalItem.endTime}`}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}