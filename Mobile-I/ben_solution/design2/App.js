import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.topImage}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        <Text style={styles.header}>Header</Text>
        <View style={styles.imagePair}>
          <Image
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
          <Image
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        </View>
        <Text style={styles.textBlock}>This is a bunch of smaller text that is giving information about the two images up above.  You might see this kind of design on a new app.</Text>
        <Text style={styles.header}>Header</Text>
        <View style={styles.imagePair}>
          <Image
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
          <Image
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        </View>
        <Text style={styles.textBlock}>This is a bunch of smaller text that is giving information about the two images up above.  You might see this kind of design on a new app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topImage: {
    height: 175,
    // alignSelf: 'stretch',
  },
  header: {
    marginTop: 15,
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 15,
  },
  imagePair: {
    flex: 1,
    flexDirection: 'row',
  },
  pageImage: {
    flex: 1,
    height: 150,
  },
  textBlock: {
    paddingLeft: 5,
  },
});
