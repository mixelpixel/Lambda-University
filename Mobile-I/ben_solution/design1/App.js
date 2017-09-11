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
        <Text style={styles.header}>Header</Text>
        <Image
          style={styles.topImage}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        <View style={styles.buttonRow}>
          <Button style={styles.button} title={'like'} onPress={console.log} />
          <Button style={styles.button} title={'share'} onPress={console.log} />
          <Button style={styles.button} title={'comment'} onPress={console.log} />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.comment}>Some User: A comment on the picture</Text>
          <Text style={styles.comment}>Another User: A comment on the picture</Text>
          <Text style={styles.comment}>And Another User: A comment on the picture</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    marginTop: 25,
    fontSize: 50,
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
});
