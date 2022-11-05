import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      {/* <Text>Hello, I am {props.name}!</Text> */}
      <Text>asdbfhasbdfhabsfdhbhsdf {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={styles.containerMain}>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    width: null,
    height: null,
  },
});

export default Cafe;
