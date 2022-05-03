import React from 'react';
import { Text, View } from 'react-native';

// function Greeting() {
//   return <Text>Hello, world!</Text>;
// }
const Greeting = () => <Text>Hello, world!</Text>;


function GreetingWithFlex(props) {
  return <Text style={{
    flex: parseInt(props.flex),
    backgroundColor: "#a9a9a9"
  }}>
    Hello, world!
  </Text>;
}

// const HelloWorldApp = () => {
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Greeting />
      <Greeting />
      <GreetingWithFlex flex="3" />
    </View>
  )
}

// function Welcome(props) {
//   return (
//     // <View>
//     // <Text>Hello, {props.name}</Text>
//     <Text>Hello, {props.name}</Text>
//     // </View>
//   )
// }

// function HelloWorldApp() {
//   return (
//     <View>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </View>
//   )
// }

export default HelloWorldApp;
