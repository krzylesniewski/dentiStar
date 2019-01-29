import React, {Component} from 'react';
import '../components/style/App.css';
import PageContainer from './PageContainer'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";



import MainMenu from './MainMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <PageContainer />
      </div>
    );
  }
}

export default App;
