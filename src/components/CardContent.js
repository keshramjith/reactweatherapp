import React from 'react';
import { WiCloudy } from 'weather-icons-react';

const Temperature = (props) => {
	if (props.city === '') {
		return (
				<p>Type a city name, and press submit!</p>
	)
	}
	return (
		<div className='d-flex justify-content-center'>
			<p>{ props.temp }°C</p>
		</div>
	)
}

const Wind = ({ wind }) => {
	return (
		<p>Wind speed { wind } km/h.</p>
	)
}

const Weather = ({ weather }) => {
	return (
		<WiCloudy size={70} color='#000'/>
	)
}

const Date = ({ date }) => {
	return (
		<p>{ date }</p>
	)
}

const CardContent = ({ city, temp, date, wind, weather }) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
					<Weather weather={ weather }/>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Temperature city={ city } temp={ temp } date={ date }/>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Wind wind={ wind }/>
				</div>
			</div>
		</div>
	)
}

export default CardContent;