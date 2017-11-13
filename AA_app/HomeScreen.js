import React, { Component } from 'react';
import ArriveAlive from './ArriveAlive'
import {
    Button,
} from 'react-native'
import {
    StackNavigator,
  } from 'react-navigation'

export default class HomeScreen extends React.Component{
   /* static navigationOptions = {
        title: 'Welcome'
    };*/
    render(){
        //const{ navigate } = this.props.navigation;
        return (
            /*<Button
                title = 'press me'
                onPress={() =>
                navigate('ProfilePage')
                }
            />*/
            <ArriveAlive />
        );
    }
}