import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
// import { styles } from '../css/stylesheet';

const { width, height } = Dimensions.get('window');

export default class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.newsfeed}>
        <Text style={styles.newsfeedText}>
          Header text from the NEWSFEED component.
        </Text>
        <Image
          source={require('../media/9_8_PM_meeting.png')}
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: height / 5, width: width }}
          // resizeMode='contain'
          // resizeMode='cover'
        />
        <Text>smaller text from the NEWSFEED component.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsfeed: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'salmon',
  },
  newsfeedText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
