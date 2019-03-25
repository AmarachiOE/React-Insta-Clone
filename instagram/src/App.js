import React, { Component } from 'react'; // instead of class App extends React.Component
import './App.css';
import dummyData from "./dummy-data"; // don't us { dummyData } because not JSON object?
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Hi</h2>
        <SearchBar />
      </div>
    );
  }
}

export default App;
