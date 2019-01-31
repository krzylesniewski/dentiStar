import React, {Component} from 'react';
import '../components/style/App.css';
import PageContainer from './PageContainer'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './views/Home'
import Calendar from './views/Calendar'
import Patient from './views/Patient'
import PatientDetail from './views/PatientDetail'


import MainMenu from './MainMenu'

class App extends Component {
    state = {
        users: [
            {
                id: 1,
                firstName: 'Krzysztof',
                lastName: 'Lesniewski',
                phoneNumber: '75245825',
                email: 'testowy@gmail.com',
            },
            {
                id: 2,
                firstName: 'Krzysztof2',
                lastName: 'Lesniewski2',
                phoneNumber: '71235825',
                email: 'testowy2@gmail.com',
            },
            {
                id: 3,
                firstName: 'Krzysztof3',
                lastName: 'Lesniewski3',
                phoneNumber: '3333335825',
                email: 'testowy3@gmail.com',
            },
        ]
    };
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="container"  >
                        <MainMenu />
                        <Route
                            exact path='/patient/:id'
                            // component={PatientDetail}
                            render={()=><Patient data={this.state.users}/>}
                        />
                        <Route
                            path='/new-patient'
                            component={PageContainer}/>
                        <Route
                            path='/calendar'
                            component={Calendar}/>
                        <Route
                            exact path='/patient'
                            render={()=><Patient data={this.state.users}/>}
                            // component={Patient}
                            // data={this.state.users}
                            />
                        <Route
                            exact path='/'
                            component={Home}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
