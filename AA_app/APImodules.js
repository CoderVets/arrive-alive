import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native'
import base64 from './node_modules/base-64/base64'
import APICheck from './APICheck'

var ClientID = "OaJiui9NK0hS" //undefined //
var ClientSecret = "SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri" //undefined //
var AccToken = undefined
var AuthCode = "K8pkci60QGmRr89v"
//var RideACCToken = "ljTv+G7rSEWY3u4jS9QAnRbpt+aQq+WegCybkRUzoA4P7XHt3uheFGf16V4ho9Zg2zwWFsGFJoqePu8zsQ15Brb0/je1l0PmDYeaQKqxHt7YBDAdOLtmhe8="
var ride_id = "1724661421621973300"

export const LyftAccesToken = (ClientID,ClientSecret) => {
    return fetch('https://api.lyft.com/oauth/token',{
        method: 'Post',
        headers: {
            'Content-Type':'application/json',
            "Authorization":"Basic "+ base64.encode(ClientID + ":" + ClientSecret)
        },
        body:JSON.stringify ({
            "grant_type":"client_credentials",
            "scope":"public"
        })
    })
    /*.then((response) => response.json())
    .then((responseJason) => {
        return AccToken = responseJason.access_token
        //Alert.alert(responseJason)
        //LyftETA(AccToken)
    })
    .catch((error) => {
        console.error(error);
    });*/
};

export const LyftETA = (AccToken) => {
    return fetch('https://api.lyft.com/v1/eta?lat=38.790163&lng=-90.532173',{
        method: 'get',
        headers: {'Authorization': 'Bearer '+AccToken}
    })
    //.then(APICheck.checkStatus)
    /*.then((response) => response.json())
    .then((responseJason) => {
        return responseJason,
        Alert.alert(responseJason.eta_estimates)
    })
    .catch((error) => {
        console.error(error);
    });*/
};

/*export const UsersLyftAccount = () => {
    fetch('https://api.lyft.com/oauth/authorize?client_id=' + ClientID + '&scope=public%20profile%20rides.read%20rides.request%20offline&state=AriveAlive&response_type=code',{
        method: 'get'
    })
    .then((response) => response.json())
    .then((responseJason) => {
        return AuthCode = responseJason.code,
        Alert.alert('UsersLyftAccount :' + AuthCode)
        //LyftRideToken(AuthCode)
    })
    .catch((error) => {
        console.error(error);
    });
}*/

export const LyftRideToken = () => {
    fetch('https://api.lyft.com/oauth/token',{
        method: 'Post',
        headers: {
            'Content-Type':'application/json',
            "Authorization":"Basic "+ base64.encode(ClientID + ":" + ClientSecret)
        },
        body:JSON.stringify ({
            "grant_type": "authorization_code",
            "code": AuthCode
        })
    })
    //.then(APICheck.checkStatus)
    .then((response) => response.json())
    .then((responseJason) => {
        return RideACCToken = responseJason.access_token,
        //Alert.alert(responseJason)
        LyftRideReq(RideACCToken)
    })
    .catch((error) => {
        console.error(error);
    });
}

export const LyftRideReq = () => {
    console.log(RideACCToken);
    fetch('https://api.lyft.com/v1/rides',{
        method: 'Post',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer '+ RideACCToken
        },
        body: JSON.stringify ({
            "ride_type": "lyft",
            "origin.lat": 38.79016,
            "origin.lng": -90.53217,
            "destination.lat": 38.76233,
            "destination.lng": -90.52634
        })
    })
    //"origin" : {"lat" : 38.790163, "lng" : -90.532173 },
    //"destination" : {"lat" : 38.762333, "lng" : -90.526344},
    //.then(APICheck.checkStatus)
    .then((response) => response.json())
    .then((responseJason) => {
        return responseJason,
        Alert.alert(responseJason)
    })
    .catch((error) => {
        console.error(error);
    });
};
