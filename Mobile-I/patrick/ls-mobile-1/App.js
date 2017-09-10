import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() { // not using right now, but just like React
    super();
    this.state = {

    };
  }
  render() {
    console.log('Well, hello there!')
    return ( // the JSX is different than in React
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>This is totally cool!</Text>
        <View style={styles.child}>
          <Text style={styles.text1}>
            First
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text2}>
            Second
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text3}>
            Third
          </Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>This is totally cool!</Text>
        <View style={styles.child2}>
          <Text style={styles.text1}>
            First
          </Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.text2}>
            Second
          </Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.text3}>
            Third
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: 50,
    width: 150,
    marginBottom: 10,
    backgroundColor: 'salmon',
    // alignItems: 'center',
    justifyContent: 'center', // <~~~~ that's how.
  },
  child2: {
    height: 50,
    width: 150,
    marginBottom: 10,
    backgroundColor: 'salmon',
    // alignItems: 'center',
    justifyContent: 'center', // <~~~~ that's how.
  },
  text1: {
    // alignSelf: 'center',
    textAlign: 'center',
    // textAlignVertical: 'center', // <~~~~ HOW?????
  },
  text2: {
    textAlign: 'auto',
  },
  text3: {
    textAlign: 'justify',
  }
});
