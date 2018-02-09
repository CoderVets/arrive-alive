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
                    placeholder="Name:"
                />
                <TextInput
                    style={styles.inputAddress} 
                    placeholder="Address:"
                />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email:"
                />
                <TextInput
                    style={styles.inputPhone} 
                    placeholder="Phone #"
                />
                <TextInput
                    style={styles.inputSSN}
                    placeholder=" last 4 ssn"
                />
                <TextInput
                    style={styles.inputUnit)
                    placeholder=" Unit Name"
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
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputAddress: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
		borderColor: 'black',
        borderWidth: 5,
        color: 'blue',  
        width: 350,
    },
    inputEmail: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
		borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputPhone: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
		borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,

    }, 
    inputName: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
		borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,

    },
    inputName: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
		borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputName: {
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