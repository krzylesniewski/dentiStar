import React, {Component} from 'react';
import '../components/style/App.css';
import PageContainer from './PageContainer'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './views/Home'
import Calendar from './views/Calendar'
import Patient from './views/Patient'


import MainMenu from './MainMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <MainMenu/>
            <Route path='/new-patient' component={PageContainer}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/patient' component={Patient}/>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
