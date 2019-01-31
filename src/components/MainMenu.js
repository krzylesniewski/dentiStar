import React, {Component} from 'react';

import './style/MainMenu.css'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Computer from '@material-ui/icons/Computer';
import FolderOpen from '@material-ui/icons/FolderOpen';
import Bookmark from '@material-ui/icons/Bookmark';
import AddComment from '@material-ui/icons/AddComment'
import {Link} from 'react-router-dom'


class MainMenu extends Component {

    render() {
        return (
            <div className="mainMenuBackground">
                <h1>LOGO</h1>
                <BottomNavigation
                    value="Test"
                    id="MainMenu"
                >
                    <Link to="/">
                        <BottomNavigationAction
                            label="Home"
                            value="Home"
                            icon={<Computer/>}/>
                    </Link>
                    <Link to="/calendar">
                        <BottomNavigationAction
                            label="Calendar"
                            value="Calendar"
                            icon={<Bookmark/>}/>
                    </Link>
                    <Link to="/patient">
                        <BottomNavigationAction
                            label="patient"
                            value="patient"
                            icon={<FolderOpen/>}/>
                    </Link>
                    <Link to="/new-patient">
                        <BottomNavigationAction
                            label="new-patient"
                            value="new-patient"
                            icon={<AddComment/>}/>
                    </Link>
                </BottomNavigation>
            </div>
        );
    }
}

export default MainMenu;
