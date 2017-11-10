

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import ArriveAlive from './ArriveAlive'
import ProfilePage from './profilePage'
import LyftAPITest from './LyftAPITest'

const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: LyftAPITest}
  //Profile: {screen: ProfilePage},
  
})

export default App
  
