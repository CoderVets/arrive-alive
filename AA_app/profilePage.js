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
                    style={styles.inputName}
                    placeholder="Address"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 4"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 5"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 6"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 7"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 8"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 9"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 10"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 11"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 12"
                />
                <TextInput
                    style={styles.inputName}
                    placeholder="input 13"
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
    },
    inputName: {
        //flex: 1,
        height: 75,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 5,
        color: 'blue',
        width: 350,
    },
    inputAddress: {
        flex: 2,
        backgroundColor: '#040',
        borderColor: 'blue',
        borderWidth: 10,
    },
    inputEmail: {
        flex: 3,
        backgroundColor: 'green',
        borderWidth: 1,
    },
    input4: {
        flex: 1,
        backgroundColor: '#000',


    } 
}
)