import * as $ from 'jquery';
import React, { useState } from 'react';
import file from './apikey.txt';

const Button = (props) => {
	return (
		<button onClick={props.onClick}>
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

const Temperature = (props) => {
	if (props.city === '') {
		return (
		<p>Type a city name, and press submit!</p>
	)
	}
	return (
		<p>Temperature in {props.city} on {props.date}: { props.temp }C</p>
	)
}

const Input = (props) => {
	return (
		<input onInput={e => props.onInput(e.target.value)} name='cityName'/>
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
	
	const onInput = (value) => {
		setInput(value)
	}

	const onClick = (value) => {
		return fetchData(apiKey)
	}

	const fetchData = (apiKey) => {
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${apiKey}`;
		$.get(url, (data) => {
			setTemperature(data.list[0].main.temp)
			setDate(data.list[0].dt_txt)
			setCity(data.city.name)
		})
	}
	return (
		<div>
			<Heading text='Todays temperature'/>
			<Input onInput={ onInput }/>
			<Button text='submit' onClick={onClick} />
			<Temperature city={city} temp={temperature} date={ date }/>
		</div>
  );
}

export default App;
