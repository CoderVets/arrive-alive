

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import ArriveAlive from './ArriveAlive'
import ProfilePage from './profilePage'
import LyftAPITest from './LyftAPITest'
import APITest1 from './APITest1'

const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: APITest1}
  //Profile: {screen: LyftAccesToken}
  //Profile: {screen: LyftAPITest}
  //Profile: {screen: ProfilePage},
  
})

export default App
  
