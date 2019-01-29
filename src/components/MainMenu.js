import React, {Component} from 'react';

import './style/MainMenu.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Computer from '@material-ui/icons/Computer';
import FolderOpen from '@material-ui/icons/FolderOpen';
import Bookmark from '@material-ui/icons/Bookmark';
import AddComment from '@material-ui/icons/AddComment'


class MainMenu extends Component {
  render() {
    return (

        <BottomNavigation
          value="Test"
          onChange={this.handleChange}
          showLabels
          id="MainMenu"
        >
          <BottomNavigationAction label="Pulpit" icon={<Computer />} classes="selected"/>
          <BottomNavigationAction label="Kalendarz" icon={<Bookmark />} />
          <BottomNavigationAction label="Pacienci" icon={<FolderOpen />} />
          <BottomNavigationAction label="Zadania" icon={<AddComment />} />
        </BottomNavigation>

    );

  }
}

export default MainMenu;
