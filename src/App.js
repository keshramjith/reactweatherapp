import * as $ from 'jquery';
import React, { useState } from 'react';
import Card from './components/Card';
import file from './apikey.txt';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = (props) => {
	return (
		<button className='btn btn-dark' onClick={props.onClick}>
			{props.text}
		</button>
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
		<input className='form-control' onInput={e => props.onInput(e.target.value)} name='cityName'/>
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
	const [weather, setWeather] = useState('');

	const onInput = (value) => {
		setInput(value)
	}

	const onClick = () => {
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
			setWeather(data.list[0].weather[0].main)
		});
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
					<Heading text='Todays temperature'/>
				</div>
			</div>
			<Input onInput={onInput} />
			<div className='row'>
				<div className='col d-flex justify-content-center'>
				<Button text='Submit' onClick={onClick} />
				</div>
			</div>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
				<Card city={city} temp={temperature} date={date} wind={wind} weather={ weather }/>
				</div>
			</div>
		</div>
  );
}

export default App;
