import React from 'react';
import { View } from 'react-native';
// import { View, Text } from 'react-native';
import { styles } from './css/stylesheet';

import Header from './components/header';
import Display from './components/display';
import Buttons from './components/buttons';
import Comments from './components/comments';

export default class App extends React.Component {
  // constructor() { // not using right now, but just like React
  //   super();
  //   this.state = {
  //
  //   };
  // }
  render() {
    console.log('Well, hello there!');
    return ( // the JSX is different than in React
      <View style={styles.container}>
        {/* <Text>This TEXT is from App.js</Text> */}
        <Header />
        <Display />
        <Buttons />
        <Comments />
      </View>
    );
  }
}
