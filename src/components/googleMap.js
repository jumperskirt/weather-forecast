import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    //ref in react allows us to get a direct reference to a html element that has been rendered to the page
    //this.refs.map gives us reference to this html element below
    return <div ref="map" />;
  }
}

export default GoogleMap;
