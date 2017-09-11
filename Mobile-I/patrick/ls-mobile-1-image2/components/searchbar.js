import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SearchBar extends React.Component {
  state = {
    inputValue: "🔍 search"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.searchbar}>
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
    borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'pink',
    height: 25,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
  },
  input: {
    width: width * .9,
    padding: 8,
  },
});
