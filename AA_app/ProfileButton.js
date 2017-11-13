
'use strict';

const React = require('react');
const {
  Image,
  StyleSheet,
} = require('react-native');


class ProfileButton extends React.Component {
  render() {
    return (
      <Image
        source={{uri: `http://www.pecs.co.za/wp-content/uploads/2016/11/arrive-alive.jpg`}}
        style={styles.profilePic}
      />
    );
  }
}

var styles = StyleSheet.create({
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
});

module.exports = ProfileButton;
