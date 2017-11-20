import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native'
import base64 from './node_modules/base-64/base64'
import APICheck from './APICheck'

export const LyftAccesToken = () => {
    return fetch('https://api.lyft.com/oauth/token',{
        method: 'Post',
        headers: {
            'Content-Type':'application/json',
            "Authorization":"Basic "+ base64.encode("OaJiui9NK0hS:SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri")
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

