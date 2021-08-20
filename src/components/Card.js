import React from 'react';
import CardContent from './CardContent';
import '../styles/global.css'

const Card = ({ city, temp, date, wind, weather }) => {
	return (
		<div className='card'>
			<CardContent city={city} temp={temp} date={date} wind={wind} weather={weather} />
		</div>
	)
}

export default Card;
