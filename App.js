import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View style={styles.containerMain}>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    );
}

const Cafe = () => {
    return (
        <>
            <Cat name="Munkustrap"/>
            <Cat name="Spot"/>
        </>
    );
}

export default Cafe;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
});
