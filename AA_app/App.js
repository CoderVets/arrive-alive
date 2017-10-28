/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import ProfileButton from 'ProfileButton.js'
var ProfileButton = require('./ProfileButton');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileButton/>
        <Text style={{fontSize: 30, fontStyle: "italic"}} > Arrive</Text>
        <Text style={{fontSize: 30, fontStyle: "italic"}}>Alive</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',

    alignItems: 'center',
    justifyContent: 'center',
  },
});