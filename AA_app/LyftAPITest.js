import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import APICheck from './APICheck'
import base64 from './node_modules/base-64/base64'
import utf8 from './node_modules/utf8/utf8'


export default class LyftAPITest extends Component {
    constructor(props){
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.lyft.com/oauth/token',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                "Authorization":"Basic "+ base64.encode(utf8.encode("OaJiui9NK0hS:SANDBOX-VNDXMeFb-qwyMsEzZ-r5e82AzBtIg0ri"))
            },
            body:JSON.stringify({
                "grant_type":"client_credentials",
                "scope":"public"
            })
        })
        
        .then(APICheck.checkStatus)
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==
                r2});
            this.setState({
                isloading: false,
                dataSource: ds.cloneWithRows(responseJson),
            }, function() {
                Alert.alert(this.state.dataSource._dataBlob.s1.access_token);
                //AccToken = dataSource.access_token
                //console.log(AccToken)
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    

    /*renderRow(rowData){
        return (
            <View>
                <Text>{rowData.token_type}</Text>
                <Text>{rowData.access_token}</Text>
                <Text>{rowData.expires_in}</Text>
                <Text>{rowData.scope}</Text>
            </View>
        )
    }*/

    render() {
        if (this.state.isloading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        
        /*return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );*/
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FlatList
                    keyExtractor={item => access_token}
                    dataSource={this.state.dataSource}
                    renderItem={({item})=>this.renderRow(item)}
                />
                <Text>done</Text>
            </View>
        );
    }
}