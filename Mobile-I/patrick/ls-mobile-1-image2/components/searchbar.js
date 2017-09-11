import React from 'react';
import { StyleSheet, View, TextInput, Dimensions, Button, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SearchBar extends React.Component {
  constructor() { // not using right now, but just like React
    super();
    this.state = {
      inputValue: "🔍 search"
    };
  }

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.searchbar}>
        <Button
          title="≡"
          onPress={this._handleButtonPress}
        />
        <TextInput
           value={this.state.inputValue}
           onChangeText={this._handleTextChange}
           style={styles.input}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    paddingTop: 2,
  },
  input: {
    height: 25,
    borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'pink',
    borderRadius: 20,
    // marginLeft: 30,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    width: width * .85,
    padding: 8,
  },
});
