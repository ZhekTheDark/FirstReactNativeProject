import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cat = props => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
};

const Cafe = () => {
    return (
        <View style={styles.containerMain}>
            {/*<View>*/}
            <Cat name="Maru"/>
            <Cat name="Jellylorum"/>
            <Cat name="Spot"/>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0CFF00',
        width: null,
        height: null,
    },
});

export default Cafe;
