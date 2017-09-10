import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'chocolate',
    marginTop: 20,
  },

  header: {
    flex: 1.5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'ivory',
  },

  display: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'green',
  },

  buttonRow: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'hotpink',
    backgroundColor: 'blue',
  },

  buttons: {
    // flex: 1.5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    paddingLeft: 5,
    paddingRight: 5,
  },

  comments: {
    flex: 6,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'moccasin',
  },

  comment: {
    // flex: 1,
    alignSelf: 'flex-start',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'salmon',
    marginLeft: 5,
    marginRight: 5,
  },

  buttonText: {
    // padding: 5,
    borderWidth: 1,
    borderColor: 'purple'
  },

  commentText: {
    borderWidth: 1,
    borderColor: 'black'
  },
});
