import React, { Component } from 'react';
import { Alert } from 'react-native';

var APICheck = {
    checkStatus: function(response){
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};

export default APICheck