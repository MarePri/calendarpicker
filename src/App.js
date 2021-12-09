import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function App() {
  const [choosingType, setChoosingType] = useState('start');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  function updateDate(chosenDay) {
    if (startDate && chosenDay < startDate) {
      setStartDate(chosenDay);
      return setChoosingType('end')
    }

    if (endDate && chosenDay > endDate) {
      setEndDate(chosenDay);
      return setChoosingType('end')
    }



    if (choosingType === 'start') {
    setStartDate(chosenDay);
    setChoosingType('end');
    return;
  }

  if (choosingType === 'end') {
    setEndDate(chosenDay);
  }
  }


  return (
    <>
      <StyledDateChooser>
        <button className="date-chooser-button" onClick={() => setChoosingType('start')}>
          Start Date <span>{startDate}</span>
        </button>
        <button className="date-chooser-button">
          End Date <span>{endDate}</span>
        </button>
      </StyledDateChooser>

      <div className="calendar">
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;

          let isSelected = dayNumber === startDate || dayNumber === endDate;

          return ( 
          <button 
          key={index}
          className={`calendar-day ${isSelected ? 'is-selected' : ''} `}
          onClick={() => updateDate(dayNumber)}
          >
            {dayNumber}
          </button>
          );
        })}
      </div>
    </>
  );
}


const StyledDateChooser = styled.div`


`
