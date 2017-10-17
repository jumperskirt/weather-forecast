import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //we need to go and fetch weather data
    //we want to call the action creator fetch weather here
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a five-day forecast for your favorite u.s. cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    )
  }
}

//hook up action creator fetch weather to this searchBar container
function mapDispatchToProps(dispatch) {
  //dispatch makes sure the action flows through the middleware and reducers in our redux application
  //by binding fetchWeather to dispatch here, we can now access this.props.fetchWeather inside of
  //searchBar container above
  return bindActionCreators({ fetchWeather }, dispatch);
}
//by passing in null in the first argument
//we say, this container does not care about state here
//though we know redux takes care of state
export default connect(null, mapDispatchToProps)(SearchBar);
