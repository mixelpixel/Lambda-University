import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
// import { styles } from '../css/stylesheet';

const { width, height } = Dimensions.get('window');

export default class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.newsfeed}>
        <Text style={styles.newsfeedHeader}>
          Some Random Header.
        </Text>
        <View style={styles.newsfeedImageRow}>
          <Image
            source={require('../media/nyan.gif')}
            // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
            style={styles.anImage}
          />
          <Image
            // source={require('../media/9_8_PM_meeting.png')}
            source={{ uri: 'http://www.reactiongifs.com/r/2013/10/woah.gif' }}
            style={styles.anImage}
          />
        </View>
        <Text style={styles.newsfeedBody}>
          This is a bunch of smaller text that is giving
          information about the two images up above.
          You might see this kind of design on a news
          site.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsfeed: {
    // borderWidth: 1,
    // borderColor: 'green',
    // backgroundColor: 'salmon',
    backgroundColor: 'grey',
  },
  newsfeedImageRow: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'white',
  },
  anImage: {
    height: height / 8,
    width: width / 2,
  },
  newsfeedHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  newsfeedBody: {
    fontSize: 15,
  },
});
