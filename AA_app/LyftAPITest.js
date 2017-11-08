import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View
} from 'react-native';

export default class LyftAPITest extends Component {
    constructor(props){
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.lyft.com/oauth/token',{
            method: 'Post',
            headers:{
                'Content-Type':'application/json',
                'OaJiui9NK0hS':'SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri'
            },
            body:JSON.stringigy({
                "grant_type":"client_credentials",
                "scope":"public"
            })
        });
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==
                r2});
            this.setState({
                isloading: false,
                dataSource: ds.cloneWithRows(responseJson.token),
            }, function() {
                // do somthing with new stat
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        if (this.state.isloading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title},{rowData.type}
                        </Text>}
                />
            </View>
        );
    }
}