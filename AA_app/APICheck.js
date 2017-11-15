import React, { Component } from 'react';

var APICheck = {
    checkStatus: function(response){
        if (response.status >= 200 && response.stattus < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};

export default APICheck