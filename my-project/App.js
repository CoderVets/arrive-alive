import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import ProfileButton from 'ProfileButton.js'
var ProfileButton = require('./ProfileButton');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileButton/>
        <Text>Arrive-Alive</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





