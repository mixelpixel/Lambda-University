import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    console.log('Well, hello there!')
    return ( 
      <View style={styles.container}>
        <View style={styles.child1}>
          <Text style={styles.text1}>Carrier Info</Text>
        </View>
        <View style={styles.child2}>
          <View>
            <Text style={styles.text1}>Header</Text>
          </View>
        </View>
        <View style={styles.child3}>
          <Text style={styles.text1}>IMAGE</Text>
        </View>
        <View style={styles.child4}>
          <View>
            <Text style={styles.text1}>LIKE</Text>
          </View>
          <View>
            <Text style={styles.text1}>SHARE</Text>
          </View>
          <View>
            <Text style={styles.text1}>COMMENT</Text>
          </View>
        </View>
        <View style={styles.child5}>
          <View style={styles.child5box1}>
          < Text style={styles.text2}>USER A</Text>
          </View>
          <View style={styles.child5box2}>
            <Text style={styles.text2}>USER B</Text>
          </View>
          <View style={styles.child5box3}>
            <Text style={styles.text2}>USER C</Text>
          </View>
        </View>
      </View>
    //   <View style={styles.container}>
    //   <View>
    //     <View style={styles.child}>
    //       <Text style={styles.text1}>
    //         Like
    //       </Text>
    //     </View>
    //     <View style={styles.child}>
          
    //     </View>
    //     <View style={styles.child}>
          
    //     </View>
    //   </View>
    //   <View>
    //   <View style={styles.child1}>
    //     <Text style={styles.text2}>
    //       Some User: A comment on the picture
    //     </Text>
    //   </View>
    //   <View style={styles.child1}>
    //     <Text style={styles.text2}>
    //       Another User: A comment on the picture
    //     </Text>
    //   </View>
    //   <View style={styles.child1}>
    //     <Text style={styles.text2}>
    //       And Another User: A comment on the picture
    //     </Text>
    //   </View>
    // </View>
    // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  child1: {
    flex: 1,
  },
  child2: {
    flex: 1,
  },
  child3: {
    flex: 1,
  },
  child4: {
    flex: 1,
    height: 25,
    width: 75,
    borderWidth: 1,
  },
  text1: {
    textAlign: 'center',
  },
  child5: {
    flex: 1,
    height: 25,
    width: 300,
    borderWidth: 1,
    justifyContent: 'center',
  },
  child5box1: {
    flex: 1,
    borderWidth: 1,
  },
  child5box2: {
    flex: 1,
    borderWidth: 1,
  },
  child5box3: {
    flex: 1,
    borderWidth: 1,
  },
  text2: {
    textAlign: 'center',
    fontSize: 12,
  }
});
