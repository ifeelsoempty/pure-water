export const weekDay = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export const getNextDays = (daysCount = 7) => {
  const days = [];

  for(let i = 1; i <= daysCount; i++){
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    
    const isWeekend = weekDay[newDate.getDay()] === 'сб' || weekDay[newDate.getDay()] === 'вс';
    days.push(
      {
        id: i,
        monthName: monthsNames[newDate.getMonth()],
        dayOfWeek: weekDay[newDate.getDay()],
        dayOfMonth: newDate.getDate(),
        isWeekend: isWeekend,
        intervals: getIntervals(isWeekend),
      }
    )
  }

  return days;
}

export const getItemById = (arr, id) => {
  return arr.filter((item) => item.id === id)[0];
}

export const getIntervals = (isWeekend) => {
  return !isWeekend ? [
    {
      id: 1,
      startTime: '10:00',
      endTime: '11:00',
    },
    {
      id: 2,
      startTime: '12:00',
      endTime: '13:00',
    },
    {
      id: 3,
      startTime: '15:00',
      endTime: '16:00',
    }
  ] : [
    {
      id: 2,
      startTime: '12:00',
      endTime: '13:00',
    },
    {
      id: 3,
      startTime: '15:00',
      endTime: '16:00',
    }
  ];
}

export const monthsNames = [
  "Января", 
  "Февраля", 
  "Марта", 
  "Апреля", 
  "Мая", 
  "Июня", 
  "Июля", 
  "Августа", 
  "Сентября", 
  "Октября", 
  "Ноября", 
  "Декабря"
];

export const dateSliderBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 2,
  },
  540: {
    slidesPerView: 3,
  },
  600: {
    slidesPerView: 4,
  },
  650: {
    slidesPerView: 5,
  },
}

export const timeSliderBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
  },
  550: {
    slidesPerView: 3,
    watchOverflow: true,
  },
}