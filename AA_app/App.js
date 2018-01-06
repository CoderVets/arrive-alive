

import React, { Component } from 'react';
// this gives us access to components created in React
import {
  StackNavigator,
} from 'react-navigation';
// this allows us to  use Reacts built in navigation interface

import ArriveAlive from './ArriveAlive'
// brings our arrive alive function into the main file
import ProfilePage from './profilePage'
// brings the profile page into the main file

const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: ProfilePage},
  // declare our screens
})

export default App
  
