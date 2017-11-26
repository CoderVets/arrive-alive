import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native'
import base64 from './node_modules/base-64/base64'
import APICheck from './APICheck'

var ClientID = "OaJiui9NK0hS"
var ClientSecret = "SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri"
var AccToken = undefined
var AuthCode = "LjDTobmAqMRnOZz6"
var RideACCToken = "zk3IVWs5Wt3002psfRQ/ftUO6OOX1AefZ2fGRBn7N3Mn6j7wTWXVpviNzv0doM03EBQO4dcBYQXb1IeYA2OoLemgoBz2T+CIGQCuseLBSZnD9TvdrlGP5Zg="
var ride_id = "1724661421621973300"

export const LyftAccesToken = () => {
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
    .then((response) => response.json())
    .then((responseJason) => {
        return AccToken = responseJason.access_token,
        //Alert.alert(responseJason)
        LyftETA(AccToken)
    })
    .catch((error) => {
        console.error(error);
    });
};

export const LyftETA = () => {
    return fetch('https://api.lyft.com/v1/eta?lat=38.790163&lng=-90.532173',{
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

/*export const UsersLyftAccount = () => {
    return fetch('https://api.lyft.com/oauth/authorize?client_id=' + ClientID + '&scope=public%20profile%20rides.read%20rides.request%20offline&state=AriveAlive&response_type=code',{
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
    return fetch('https://api.lyft.com/oauth/token',{
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
        Alert.alert(responseJason)
        //LyftRideRe(RideACCToken)
    })
    .catch((error) => {
        console.error(error);
    });
}

export const LyftRideReq = () => {
    return fetch('https://api.lyft.com/v1/rides',{
        method: 'post',
        headers: {'Authorization': 'Bearer '+ RideACCToken},
        body:JSON.stringify ({
            "origin" : {"lat" : 38.790163, "lng" : -90.532173 },
            "destination" : {"lat" : 38.762333, "lng" : -90.526344},
            "ride_type" : "lyft"
        })
    })
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
