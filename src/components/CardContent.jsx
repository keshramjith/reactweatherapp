import React from 'react';
// import * as $ from 'jquery';

const Temperature = ({ city, temp }) => {
  if (city === '') {
    return (
      <p>Type a city name, and press submit!</p>
    );
  }
  return (
    <div className='d-flex justify-content-center'>
      <p className='fw-bold fs-3'>
        {`${temp} °C`}
      </p>
    </div>
  );
};

const Wind = ({ wind }) => (
  <p>
    {`Wind speed ${wind} km/h.`}
  </p>
);

const WeatherIcon = ({ weatherIconId }) => {
  if (weatherIconId === '') {
    return (
      <img alt='' />
    );
  }
  const imgsrc = `http://openweathermap.org/img/wn/${weatherIconId}@2x.png`;
  // $.get(`http://openweathermap.org/img/wn/${weatherIconId}@2x.png`, (data) => {
  //   console.log(data);
  // })

  return <img src={imgsrc} alt='Weather icon' />;
};

/* const Date = ({ date }) => (
  <p>
    {date}
  </p>
);
*/

const CardContent = ({
  city, temp, date, wind, weatherIconId
}) => (
  <div className='container'>
    <div className='row'>
      <div className='col d-flex justify-content-center'>
        <WeatherIcon weatherIconId={weatherIconId} />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <Temperature city={city} temp={temp} date={date} />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <Wind wind={wind} />
      </div>
    </div>
  </div>
);

export default CardContent;
