import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
// import { styles } from '../css/stylesheet';

const { width, height } = Dimensions.get('window');

export default class Banner extends React.Component {
  render() {
    return (
      <View style={styles.banner}>
        <Image
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: height / 5, width: width }}
          // resizeMode='contain'
          // resizeMode='cover'
          // resizeMode='stretch'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'blue',
    // backgroundColor: 'gold',
  },
});
