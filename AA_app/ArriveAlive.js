

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native'
import {StackNavigator} from 'react-navigation'
import * as API from './APImodules'
//import * as API from './APITest1'

export default class ArriveAlive extends React.Component {
  render() {
    const{ navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => API.LyftRideToken()}>
          <Image 
            source={require('./assets/bananaVar1.jpg')}
            style={styles.profilePic}
          />
      </TouchableHighlight>
      <Text style={{fontSize: 30, fontStyle: "italic"}} >Arrive</Text>
        <Text style={{fontSize: 30, fontStyle: "italic"}}>      Alive </Text>
    </View>
      /*<View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Profile')}>
            <Image
                
                source={require('./assets/bananaVar1.jpg')}
                style={styles.profilePic}
            />
        </TouchableHighlight>
        <Text style={{fontSize: 30, fontStyle: "italic"}} >Arrive</Text>
          <Text style={{fontSize: 30, fontStyle: "italic"}}>      Alive </Text>
      </View>*/
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
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },

});
