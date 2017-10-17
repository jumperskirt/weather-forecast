import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="green" units="Farenheit"/></td>
        <td><Chart data={pressures} color="blue" units="hPa"/></td>
        <td><Chart data={humidities} color="purple" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>temperature (Farenheit)</th>
            <th>pressure (hPa)</th>
            <th>humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//es6
function mapStateToProps({ weather }) {
  // return { weather: weather} === { weather }
  return { weather };
}
// function mapStateToProps(state) {
// const weather = state.weather;
//   return { weather: state.weather }
// }

//connect our component to mapStateToProps below
export default connect(mapStateToProps)(WeatherList)
