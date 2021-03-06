import React from 'react';
import {Text, TextInput, View} from 'react-native';

// function Greeting() {
//   return <Text>Hello, world!</Text>;
// }
// const Greeting = () => <Text>Hello, world!</Text>;

// function GreetingWithFlex(props) {
//     return <Text style={{
//         flex: parseInt(props.flex),
//         backgroundColor: "#a9a9a9"
//     }}>
//         Hello, world!
//     </Text>;
// }

// const HelloWorldApp = () => {
//     // const App = () => {
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}>
//             <Greeting/>
//             <Greeting/>
//             <GreetingWithFlex flex="3"/>
//         </View>
//     )
// }

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

// const HelloWorldApp = () => {
//   return (
//     <ScrollView>
//       <Text>Some Text</Text>
//       <View>
//         <Text>Some more Text</Text>
//         <Image
//           source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// };
//
// export default HelloWorldApp;

// const getFullName = (firstName, secondName, thirdName) => {
//   return `${firstName} ${secondName} ${thirdName}`;
// };
//
// const Cat = () => {
//   return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>;
// };

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default Cat;
