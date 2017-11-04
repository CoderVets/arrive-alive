import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,

} from 'react-native'

class layoutTest extends Component {
    render (){
        return (
          <View style={{flex: 2,
                        flexDirection: 'column',
                        backgroundColor: 'pink',
                        alignItems: 'stretch',
                        }}>
            <View style={{flex: 1,
                         backgroundColor: 'blue',
                         }}>
                <Text style={{color: 'red',
                              fontSize: 20,
                              textAlign: 'center',
                              textAlignVertical: 'center',
                            }}>
                    this is a text test
                </Text>
            </View>
            <View style={{flex: 1,
                          backgroundColor: 'steelblue',
                         }}>
                <Text style={{color: 'green',
                              fontSize: 30,
                              textAlign: 'center',
                            }}>
                    another text test
                </Text>
            </View>
            <View style={{flex: 1,
                          backgroundColor: 'skyblue',
                        }}>
                <Text style={{color: 'black',
                              fontSize: 40,
                              textAlign: 'center',
                             }}>
                    one last text text
                </Text>
            </View>
          </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'pink',
            alignItems: 'stretch'
         },
        viewOne: {
            flex: 1,
            backgroundColor: 'blue',
        },
        viewTwo: {
            flex: 1,
            backgroundColor: 'skyblue',
        },
        viewThree: {
            flex: 1,
            backgroundColor: 'steelblue',
        },
        textOne: {
            color: 'red',
            fontSize: 20,
        },
        textTwo: {
            color: 'green',
            fontSize: 30,
        },
        textThree: {
            color: 'pink',
            fontSize: 40,
        },
    }
    )

export default layoutTest