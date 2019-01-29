import React, {Component} from 'react';
import '../components/style/App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



import MainMenu from './MainMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainMenu />
          <h1>Hello World</h1>

      </div>
    );
  }
}

export default App;
