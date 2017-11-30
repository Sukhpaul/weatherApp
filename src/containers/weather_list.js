//jshint esversion:6
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
  	const name = cityData.city.name;
  	const temps = cityData.list.map(weather => weather.main.temp);
  	const pressures = cityData.list.map(pressure => pressure.main.temp);
  	const humidities = cityData.list.map(humidity => humidity.main.temp);

  	return (
  	  <tr key={name}>
  	    <td>{name}</td>
  	    <td><Chart data={temps} color='blue'/></td>
  	    <td><Chart data={pressures} color='red'/></td>
  	    <td><Chart data={humidities} color='green'/></td>
  	  </tr>
  	);
  }

  render() {
  	return (
  	  <table className='table table-hover'>
  	    <thread>
  	      <tr>
  	        <th>City</th>
  	        <th>Temperature</th>
  	        <th>Pressure</th>
  	        <th>Humidity</th>
  	      </tr>
  	    </thread>
  	    <tbody>
  	      {this.props.weather.map(this.renderWeather)}
  	    </tbody>
  	  </table>
    );
  }
}

//get weather data from redux  
function mapStateToProps({ weather }) {
  return { weather }; // is same as { weather: weather  }
}

//connect component with mapStateToProps to get weather data into container
export default connect(mapStateToProps)(WeatherList);