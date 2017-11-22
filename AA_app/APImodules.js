import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native'
import base64 from './node_modules/base-64/base64'
import APICheck from './APICheck'

var ClientID = 'OaJiui9NK0hS'
var ClientSecret = 'SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri'
var AccToken = undefined
var AuthCode = undefined
var RideACCToken = undefined

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
    .then((response) => response.json())
    .then((responseJason) => {
        return AccToken = responseJason.access_token,
        LyftETA(AccToken)
    })
    .catch((error) => {
        console.error(error);
    });
};

export const LyftETA = (AccToken) => {
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

export const UsersLyftAccount = (ClientID) => {
    return fetch('https://api.lyft.com/oauth/authorize?client_id=' + ClientID + '&scope=public%20profile%20rides.read%20rides.request%20offline&state=AriveAlive&response_type=code',{
        method: 'get'
    })
    .then((response) => response.json())
    .then((responseJason) => {
        return AuthCode = responseJason.code,
        Alert.alert('UsersLyftAccount :' + AuthCode)
        LyftRideToken(AuthCode)
    })
    .catch((error) => {
        console.error(error);
    });
}

export const LyftRideToken = (AuthCode,ClientID,ClientSecret) => {
    return fetch('https://api.lyft.com/oauth/token',{
        method: 'Post',
        headers: {
            'Content-Type':'applicaton/json;charset=UTF-8',
            "Autherization":"Basic "+ base64.encode(ClientID + ":" + ClientSecret)
        },
        body:JSON.stringify({
            "grant_type":"authorization_code",
            "code":AuthCode
        })
    })
    .then((response) => response.json())
    .then((responseJason) => {
        return RideACCToken = responseJason.access_token,
        Alert.alert(RideACCToken)
        LyftRideReq (RideACCToken)
    })
    .catch((error) => {
        console.error(error);
    });
}

export const LyftRideReq = (RideACCToken) => {
    //return fetch('https://api.lyft.com/v1/****?lat=38.790163&lng=-90.532173',{
        method: 'get',
        headers: {'Authorization': 'Bearer '+ RideACCToken}
    })
    //.then(APICheck.checkStatus)
    .then((response) => response.json())
    .then((responseJason) => {
        return responseJason,
        //Alert.alert(responseJason.****)
    })
    .catch((error) => {
        console.error(error);
    });
};
