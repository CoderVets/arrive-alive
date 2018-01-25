import React, { Component } from 'react';
import { View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Header } from './src/components';

import ArriveAlive from './ArriveAlive'
import ProfilePage from './profilePage'

const App=StackNavigator({
  Home: {screen: ArriveAlive},
  Profile: {screen: ProfilePage},
  
})

export default App
  
