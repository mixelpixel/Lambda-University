import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
// import { styles } from '../css/stylesheet';

const { width, height } = Dimensions.get('window');

export default class Banner extends React.Component {
  render() {
    return (
      <View style={styles.banner}>
        {/* <Text>Text from the BANNER component.</Text> */}
        <Image
          // source={require('../media/9_8_PM_meeting.png')}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: height / 5, width: width / 2 }}
          // resizeMode='contain'
          // resizeMode='cover'
        />
        <Image
          source={require('../media/9_8_PM_meeting.png')}
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          // style={{ height: height / 5, width: width / 2 }}
          // resizeMode='contain'
          // resizeMode='cover'
          // resizeMode='stretch'
          style={styles.stretch}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    height: height / 5,
    width: width / 2
  },
  banner: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'gold',
    flexDirection: 'row',
  },
});
