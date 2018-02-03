//test

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
//we need a confirm button after the request a ride button is clicked
const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: profilePage},
  // declare our screens
})

export default App
  
