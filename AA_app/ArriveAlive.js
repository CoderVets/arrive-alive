

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

export default class ArriveAlive extends React.Component {
  render() {
    const{ navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Profile')}>
            <Image
                
                source={require('./assets/bananaVar1.jpg')}
                style={styles.profilePic}
            />
        </TouchableHighlight>
        <Text style={{fontSize: 30, fontStyle: "italic"}} >Arrive</Text>
        <Text style={{fontSize: 30, fontStyle: "italic"}}>      Alive</Text>
        <Button
            onPress={requestUberRide}
            title="Request Ride"
            color="#841584"/>
      </View>
    );
  }
}

async function requestUberRide() {
  var fare_id = await getFareId();
  try {
    let response = await fetch('https://sandbox-api.uber.com/v1.2/requests', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer KA.eyJ2ZXJzaW9uIjoyLCJpZCI6InY5VjlCUUtsUi82Y1JIYVRYS2x2QkE9PSIsImV4cGlyZXNfYXQiOjE1MTMwMjg4MTYsInBpcGVsaW5lX2tleV9pZCI6Ik1RPT0iLCJwaXBlbGluZV9pZCI6MX0.PEN3TwRiXVQhmyU0omFZX28jyVuWR7KMoSkoN7L15Ow',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "fare_id": fare_id,
        "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d",
        "start_latitude": 37.761492,
        "start_longitude": -122.423941,
        "end_latitude": 37.775393,
        "end_longitude": -122.417546
      })
    });
    let responseJson = await response.json();
    console.error(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}
  
async function getFareId() {
  try {
    let response = await fetch('https://sandbox-api.uber.com/v1.2/requests/estimate', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer KA.eyJ2ZXJzaW9uIjoyLCJpZCI6InY5VjlCUUtsUi82Y1JIYVRYS2x2QkE9PSIsImV4cGlyZXNfYXQiOjE1MTMwMjg4MTYsInBpcGVsaW5lX2tleV9pZCI6Ik1RPT0iLCJwaXBlbGluZV9pZCI6MX0.PEN3TwRiXVQhmyU0omFZX28jyVuWR7KMoSkoN7L15Ow',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d",
        "start_latitude": 37.761492,
        "start_longitude": -122.423941,
        "end_latitude": 37.775393,
        "end_longitude": -122.417546
      })
    });
    let responseJson = await response.json();
    return responseJson.fare.fare_id;
  } catch(error) {
    console.error(error);
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
