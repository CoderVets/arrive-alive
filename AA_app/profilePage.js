import React, {Component} from 'react';
import { View,
    StyleSheet,
    TextInput,
    ScrollView,
    ViewStylePropTypes,
    ScrollViewStyle,
    ContentContainerStyle,
    StyleSheetProperties,
} from 'react-native' 

export default class ProfilePage extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.inputName}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.inputAddress}
                    placeholder="Address"
                />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.inputPhone}
                    placeholder="Phone#"
                />
                <TextInput
                    style={styles.inputSSN}
                    placeholder="Last 4 of SSN"
                />
                <TextInput
                    style={styles.inputUnit}
                    placeholder="Unit"
                />
               
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    inputName: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    
    inputAddress: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputEmail: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputPhone: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputSSN: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputUnit: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
}
)