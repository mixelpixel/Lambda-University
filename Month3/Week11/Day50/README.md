# Lambda University - September 12, 2017: Day 050, Tuesday
## Coding Challenge 46
- "Telephone Words" available in https://repl.it/student/submissions/1550720
***
# [1st Lecture](https://youtu.be/iI-h7_L7Lnc) w/Sean Chen: Review Code Challenge #46: telephoneWords
- https://piazza.com/class/j63w1pdyopf7kj?cid=44

***
#### LUNCH
***
# [Brown Bag](VIDEO_RECORDED_NOT_POSTED) w/Jared Forsythe: Reason
- JavaScript flavored Ocamel
- a solid TYPE system
- compile to JS or binary
- Reason is a layer over Ocaml: https://ocaml.org/
- like Flow - an optional Type system to JS
- https://github.com/reasonml/reason-react
- https://reasonml.github.io

***
# [2nd Lecture](https://youtu.be/WE4K9E4YuvI) w/Ben Nelson: LS-Mobile-II Q&A
```js
<TextInput
  style={styles.textInput}
  onChangeText={(email) => this.setState({ email })}
  value={this.state.email}
/>
<TextInput
  style={styles.textInput}
  onChangeText={(password) => this.setState({ password })}
  value={this.state.password}
/>
```

- https://github.com/SunJieMing/LS-Mobile-III-Example/blob/master/main.js

```js
signUp() {
  axios.post('https://mobile-server-ii.herokuapp.com/users', {
    email: this.state.email,
    password: this.state.password,
  }).then((response) => {
    if (response.data.code === 11000) {
      return this.setState({
        error: 'Email already taken',
      });
    }
    AsyncStorage.setItem('token', response.data.token).then(() => {
      this.props.navigate('TodoList');
    });
  }).catch((error) => {
    console.log(error);
  });
}
```

```js
        <Button
          title={'Submit'}
          onPress={this.signUp}
        />
```

***
# fin
