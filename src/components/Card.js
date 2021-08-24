import React from 'react';
import CardContent from './CardContent';
import '../styles/global.css'

const Card = ({ city, temp, date, wind, weatherIconId }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<CardContent city={city} temp={temp} date={date} wind={wind} weatherIconId={weatherIconId} />
			</div>
		</div>
	)
}

export default Card;
