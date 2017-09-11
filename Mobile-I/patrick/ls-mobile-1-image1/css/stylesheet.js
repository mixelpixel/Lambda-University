import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // backgroundColor: 'chocolate',
    marginTop: 20,
  },

  // HEADER
  header: {
    flex: 1.5,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'ivory',
  },

  // IMAGE DISPLAY AREA
  display: {
    flex: 10,
    // borderWidth: 1,
    // borderColor: 'green',
    backgroundColor: 'yellow',
    // resizeMode: 'contain'
    // resizeMode: 'cover'
    // resizeMode:'stretch'
    alignSelf: 'stretch',
  },

  // BUTTONS
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'hotpink',
    // backgroundColor: 'blue',
  },

  buttons: {
    borderWidth: 1,
    // borderColor: 'black',
    // backgroundColor: 'green',
    paddingLeft: 5,
    paddingRight: 5,
  },

  buttonText: {
    // borderWidth: 1,
    // borderColor: 'purple',
  },

  actualButtonText: {
    borderWidth: 1,
    borderColor: 'purple',
    // height: 15,
  },

  // COMMENTS
  comments: {
    flex: 6,
    // borderWidth: 1,
    // borderColor: 'green',
    // backgroundColor: 'moccasin',
  },

  comment: {
    borderWidth: 1,
    // borderColor: 'black',
    // backgroundColor: 'salmon',
    marginLeft: 5,
    marginRight: 5,
  },

  commentText: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 5,
  },
});
