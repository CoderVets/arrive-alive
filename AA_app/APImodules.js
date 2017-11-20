import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native'
import base64 from './node_modules/base-64/base64'

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
        Alert.alert(AccToken)
    })  
};

