import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Comments extends React.Component {

  // _handleButtonPress = () => {
  //   Alert.alert(
  //     'Button pressed!',
  //     'You did it!',
  //   );
  // };

  render() {
    return (
      <View style={styles.buttonRow}>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>
            Like
          </Text>
          {/* <Button
            title="Like"
            onPress={this._handleButtonPress}
            style={styles.actualButtonText}
          /> */}
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
