import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { styles } from '../css/stylesheet';

const { width, height } = Dimensions.get('window');

export default class Display extends React.Component {
  render() {
    return (
      <View style={styles.display}>
        <Image
          source={require('../media/9_8_PM_meeting.png')}
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: height / 2, width: width }}
          // resizeMode='contain'
          // resizeMode='cover'
        />
      </View>
    );
  }
}
