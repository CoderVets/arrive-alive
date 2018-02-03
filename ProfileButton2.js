

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class ProfileButton2 extends Component {
  render() {
    const{ navigate } = this.props.navigation;
    return (
        <TouchableHighlight onPress={() => navigate('ProfilePage')}>
            <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                style={styles.profilePic}
            />
        </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  profilePic: {
    width: 450,
    height: 450,
    borderRadius: 30,
  },
});


