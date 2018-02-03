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
                    style={styles.inputAddress} //changed from inputName to inputAddress
                    placeholder="Address:"
                />
                <TextInput
                    style={styles.inputEmail} //changed from inputName to inputEmail
                    placeholder="Email:"
                />
                <TextInput
                    style={styles.inputPhone} //changed from inputName to inputPhone
                    placeholder="Phone No"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder=" tba "
                />
                <TextInput
                    style={styles.inputName}
                    placeholder=" tba "
                />
                <TextInput
                    style={styles.inputName}
                    placeholder=" tba "         //deleted extra textinupt boxes
                />
                                                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'cyan',
    },
    inputName: {
        //flex: 1,
        height: 60,
        fontSize: 30,
        //backgroundColor: '#0000',
       // borderColor: 'black',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputAddress: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: 'green',  
        width: 350,
    },
    inputEmail: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: 'red',
        width: 350,
    },
    inputPhone: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: 'black',
        width: 350,

    }, 
    inputName: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: '',
        width: 350,

    },
    inputName: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputName: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#fff',
       // borderColor: 'blue',
        borderWidth: 5,
        color: 'blue',
        width: 350,             //corrected color for all boxes  removed flex and changed height from 75 to 60

    },


}
)