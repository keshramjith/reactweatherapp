import * as $ from 'jquery';
import React, { useState } from 'react';
import Card from './components/Card';
import file from './apikey.txt';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = (props) => {
	return (
		<div className='form-group mx-sm-3 mb-2'>
			<button type='submit' className='btn btn-dark' onClick={props.onClick}>
				{props.text}
			</button>
		</div>
	)
}

const Heading = (props) => {
	return (
		<h1>
			{props.text}
		</h1>
	)
}

const Input = (props) => {
	return (
		<div className='form-group mb-2'>
			<label htmlFor="cityInput">City name</label>
			<input id='cityInput'className='form-control' onInput={e => props.onInput(e.target.value)} name='cityName' placeholder='Enter a city name'/>
		</div>
	)
}

function App() {
	let apiKey = '';

	fetch(file)
		.then(r => r.text())
		.then(text => {
			apiKey = text;
		})

	const [temperature, setTemperature] = useState(0);
	const [date, setDate] = useState(new Date().toUTCString());
	const [city, setCity] = useState('')
	const [input, setInput] = useState('');
	const [wind, setWind] = useState(0);
	const [weatherIconId, setWeatherIconId] = useState('');

	const onInput = (value) => {
		setInput(value)
	}

	const onClick = (event) => {
		event.preventDefault();
		return fetchData(apiKey)
	}

	const fetchData = (apiKey) => {
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${apiKey}`;
		$.get(url, (data) => {
			console.log(data);
			setTemperature(data.list[0].main.temp);
			setDate(data.list[0].dt_txt);
			setCity(data.city.name);
			setWind(data.list[0].wind.speed);
			setWeatherIconId(data.list[0].weather[0].icon)
		});
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
					<Heading text='Todays temperature'/>
				</div>
			</div>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
					<form onSubmit={ onClick } className='form-inline'>
						<Input onInput={onInput} />
						<Button text='Submit'/>
					</form>
				</div>
			</div>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
				<Card city={city} temp={temperature} date={date} wind={wind} weatherIconId={ weatherIconId }/>
				</div>
			</div>
		</div>
  );
}

export default App;
