import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CatApp = () => {
    return (
        <View>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 200, height: 200}}
            />
            <Text>Hello, I am your cat!</Text>
        </View>
    );
}

export default CatApp;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
});
