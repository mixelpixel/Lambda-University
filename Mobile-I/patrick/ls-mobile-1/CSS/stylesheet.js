import { StyleSheet } from 'react-native';

/*
vvvvvv HOW TO EXPORT THE StyleSheet object */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: 50,
    width: 150,
    marginBottom: 10,
    backgroundColor: 'salmon',
    // alignItems: 'center',
    justifyContent: 'center', // <~~~~ that's how.
  },
  child2: {
    height: 50,
    width: 150,
    marginBottom: 10,
    backgroundColor: 'salmon',
    // alignItems: 'center',
    justifyContent: 'center', // <~~~~ that's how.
  },
  text1: {
    // alignSelf: 'center',
    textAlign: 'center',
    // textAlignVertical: 'center', // <~~~~ HOW?????
  },
  text2: {
    textAlign: 'auto',
  },
  text3: {
    textAlign: 'justify',
  }
});
