

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import ArriveAlive from './ArriveAlive'
import ProfilePage from './profilePage'

const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: ProfilePage},
  
})

export default App
  
