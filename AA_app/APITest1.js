import React, { Component } from 'react';
import {
  Alert,
  Text,
  View
} from 'react-native'
import base64 from './node_modules/base-64/base64'
import APICheck from './APICheck'
import * as API from './APImodules'

class APITest1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          startLng: undefined,
          startLat: undefined,
          endLng: undefined,
          endLat: undefined,
          ClientID: "OaJiui9NK0hS",
          ClientSecret: "SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri",
          AccToken: undefined,
          AuthCode: undefined,
          //AuthCode: "z1VXu4Yqx8puGUpt",
          RideACCToken: undefined,
          RefreshToken: undefined,
          ExpiresIn: undefined,
        };
        this.setState.bind(this);
    }

    componentDidMount(){
        API.LyftAccesToken(this.state.ClientID,this.state.ClientSecret)
        /*fetch('https://api.lyft.com/oauth/token',{
            method: 'Post',
            headers: {
                'Content-Type':'application/json',
                "Authorization":"Basic "+ base64.encode(`${this.state.ClientID}` + ":" + `${this.state.ClientSecret}`)
            },
            body:JSON.stringify ({
                "grant_type":"client_credentials",
                "scope":"public"
            })
        })*/
        .then((response) => response.json())
        .then((json) => {
            this.setState({ AccToken: `${json.access_token}`})
            this.setState({ ExpiresIn: `${json.expires_in}`})
            //return AccToken = json.access_token,
            //Alert.alert(json)
            console.log(json.access_token,json.expires_in)
            //this.LyftETA(`${this.state.AccToken}`)
        })
        .catch((error) => {
            console.error(error);
        });
    };

    LyftETA(AccToken) {
        fetch('https://api.lyft.com/v1/eta?lat=38.790163&lng=-90.532173',{
            method: 'get',
            headers: {'Authorization': 'Bearer '+AccToken}
        })
        //.then(APICheck.checkStatus)
        .then((response) => response.json())
        .then((responseJason) => {
            return responseJason,
            Alert.alert(responseJason.eta_estimates)
        })
        .catch((error) => {
            console.error(error);
        });
    };

    render(){
        return (
            <View>
                <Text>Access Token: {this.state.AccToken}</Text>
                <Text> </Text>
                <Text>Access Token Expires in {this.state.ExpiresIn} seconds</Text>
            </View>
        )
    }
}
export default APITest1;