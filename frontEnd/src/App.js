import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './containers/Countries';
import CountryAdd from './containers/CountryAdd';
import MyFancyComponent from './containers/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countries />
        <CountryAdd />
        <MyFancyComponent />
      </div>
    );
  }
}

export default App;
