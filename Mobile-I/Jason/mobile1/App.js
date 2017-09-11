import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    console.log('Well, hello there!')
    return (
      <View style={styles.container}>
        <Image style={{ height: height, width: width }}
        source={{uri: 'https://media.tenor.com/images/7f7f2882899755a705a2953b6fcfc263/tenor.gif'}}>
            
          <View style={styles.child1}>
              <Text style={styles.textHeader}>Header</Text>
          </View>


          <View style={styles.child2}>
            <Image
            style={{ height: height / 2, width: width }}
            source={{uri: 'https://static.giantbomb.com/uploads/original/15/155745/2179153-18079_26016.gif'}}
            />
          </View>


          <View style={styles.child3}>
            <View style={styles.child3Box1}>
              <Text style={styles.text1}>LIKE</Text>
            </View>
            <View style={styles.child3Box2}>
              <Text style={styles.text1}>SHARE</Text>
            </View>
            <View style={styles.child3Box3}>
              <Text style={styles.text1}>COMMENT</Text>
            </View>
          </View>


          <View style={styles.child4}>
            <View style={[styles.child4Box1, styles.marginsLR]}>
              <Text style={styles.text2}>Some User: A comment on the picture</Text>
            </View>
            <View style={[styles.child4Box2, styles.marginsLR]}>
              <Text style={styles.text2}>Another User: A comment on the picture</Text>
            </View>
            <View style={[styles.child4Box3, styles.marginsLR]}>
              <Text style={styles.text2}>And Another User: A comment on the picture</Text>
            </View>
          </View>
        </Image>
      </View>

// uri:'https://static.giantbomb.com/uploads/original/15/155745/2179153-18079_26016.gif'

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // backgroundColor: 'salmon',
    // alignItems: 'center',
    marginTop: 20,
    // zIndex: 'auto',
    // display: 'flex',
    // backfaceVisibility: 'visible'
    // imageBackground: uri:'https://media.tenor.com/images/7f7f2882899755a705a2953b6fcfc263/tenor.gif' ,
  },
  // imageBackground: {
    
  // },

  child1: {
    flex: 12,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    marginLeft: 110,
    marginRight: 110,
  },
  textHeader: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',

  },

  child2: {
    flex: 50,
    // borderWidth: 1,
    // borderColor: 'green',
    // resizeMode: 'stretch',
    paddingBottom: 25,
  },

  child3: {
    flex: 10,
    // height: 10,
    // width: 140,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    height: 15,
  },
  child3Box1: {
    flex: 1,
    borderWidth: 1,
    marginLeft: 50,
    backgroundColor: 'rgb(138, 180, 240)',
  },
  child3Box2: {
    flex: 1,
    borderWidth: 1,
  },
  child3Box3: {
    flex: 1,
    borderWidth: 1,
    marginRight: 50,
  },
  text1: {
    textAlign: 'center',
    borderColor: 'yellow',
    fontSize: 10,
  },

  child4: {
    flex: 27,
    // height: 25,
    // width: 300,
    // borderWidth: 1,
    // borderColor: 'black',
    justifyContent: 'center',
    // marginBottom: 75,
    // bottom: 25,
    marginBottom: 60,
    // position: 'absolute',
  },
  marginsLR: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3,
  },
  child4Box1: {
    flex: 1,
    borderWidth: 1,
  },
  child4Box2: {
    flex: 1,
    borderWidth: 1,
  },
  child4Box3: {
    flex: 1,
    borderWidth: 1,
  },
  text2: {
    textAlign: 'left',
    paddingLeft: 3,
    paddingTop: 8,
    fontSize: 12,
  }
});
