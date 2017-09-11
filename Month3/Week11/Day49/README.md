# Lambda University - September 11, 2017: Day 049, Monday
## Coding Challenge #45
- "Deep Equality" available in https://repl.it/student/submissions/1539350
***
Ben Nelson
Thomson Comer
Ryan Hamblin
Ivan Mora
Sean Chen
Tai Chulikavit
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture pt1](https://youtu.be/PpRMJi2ByKU) w/Tai Chulikavit: Review Code Challenge #45: deepEquality
- [1st Lecture pt2](https://youtu.be/aPBH-Vde8BU)
- https://repl.it/student/assignments/385242/model_solution?fromSubmissionId=1539350

***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Ben Nelson: LS-Mobile-I review
- https://docs.google.com/document/d/1ruo4bEf6NVPsG1UYnSvN347uuDDbdYGQ-DTMlzAFPds/edit?usp=sharing

***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: LS-Mobile-I Solution
***
#### LUNCH
***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: LS-Mobile-II
- https://reactnavigation.org/docs/intro
- Stack Navigator & Axios
- using `react-navigation` and `axios`
- The following code was transcribed during lecture and is otherwise available in the solution branch of the project repository: https://github.com/LambdaSchool/Mobile-II/tree/example
```js
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigator';

import Content from './Content';
import Async from './Async';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  static navigationOptions = { // works with back arrow
    title: 'Home Page',
  }

  render() {
    return (
      <View style-{styles.container}>
        <Text>enter your email address:</Text>
        <TextInput
          style={ width: 50 }
          onChangeInput={(email) => this.setState({ email })}
          value={this.state.email} />
        <Button
          title={'View Content'}
          onPress={() => {
            this.props.navigation.navigate(Content);
        }} />
        <Button
          title={'View Async Content'}
          onPress={() => {
            this.props.navigation.navigate(Async);
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // boilerplate for container: {}
})

const Routes = StackNavigator({ // stackNav passes props
  Home: { screen: Home }, // component corresponds with view
  Content: { screen: Content }, // first Content matchs this.props.navigation.navigate(Content);
  Async: { screen: Async },
})

export default Routes;
```

```js
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [{ text: 'Pineapple' }, { text: 'Tomato' }]
    };
  }

  static navigationOptions = {
    title: 'Content Page',
  }
  render() {
    return (
      <View>
        <FlatList
          data={ this.state.foods}
          renderItem={({ item }) => {
            return <Text>{ item.text }</Text>;
          }} />
      </View>
    )
  }
}

```

- @~20min Q&A
- @~30m repeating out a bunch of content
  - https://facebook.github.io/react-native/docs/flatlist.html
- async display new component
```js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import axios from 'axios';

export default class Async extends React.component {
  constructor(peops) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMunt() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => { // then sends a promise!!!
      this.setState({
        posts: response,
      });
    });
  }

  render() {
    return (
      // <Text>{ this.state.posts }</Text>
      <View>
        <FlatList
          data={ this.state.posts}
          renderItem={({ item }) => {
            return <Text>{ item.title }</Text>;
          }} />
      </View>
    )
  }
}
```

- using axios
- Ben makes a server for a GET response
- TextInput

***
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: LS-Mobile-II-Mini
***
# [6th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic Q&A

Pair Programming #18: https://github.com/LambdaSchool/Mobile-II w/???

***
# fin
