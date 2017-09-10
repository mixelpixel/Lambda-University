import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Comments extends React.Component {
  render() {
    return (
      <View style={styles.buttonRow}>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>
            Like
          </Text>
        </View>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>
            Share
          </Text>
        </View>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>
            Comment
          </Text>
        </View>
      </View>
    );
  }
}
