import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  }
}
