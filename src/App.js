import React, { Component } from 'react';
import './App.css';
import PointList from './PointList/PointList'

class App extends Component {

  state = {
    points:[], lastKey: -1
  }
 
  addPoint = e => {
    if (e.keyCode === 13)
      {
        const points = [...this.state.points];
        let key = this.state.lastKey+1;
        points.push({pointName: e.target.value, key: key})
        this.setState({points:points, lastKey: key});
        e.target.value = "";
      }
  }
 
  render() {
    return (
      <div className="App">
        <div className="map">Map</div>
        <input type = 'text'
          placeholder = "Новая точка маршрута"
          onKeyDown = {this.addPoint}
        ></input>
        <PointList 
          points = {this.state.points}
        />
      </div>
    );
  }
}

export default App;
