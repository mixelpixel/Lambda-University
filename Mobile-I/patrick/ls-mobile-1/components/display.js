import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.display}>
        {/* <Image source={require('../media/9_8_PM_meeting.png')}
               style={{width: 300, height: 300}} />
        <Text>IMAGE DISPLAY</Text> */}
        <Image
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: 140, width: 200 }}
        />
      </View>
    );
  }
}
