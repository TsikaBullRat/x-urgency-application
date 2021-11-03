import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons'

class Counter extends React.Component {
  state = { count: 16 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View>

        <View>
          <TouchableOpacity onPress={this.setCount}>
            <Entypo
              name="thumbs-down"
              size={20}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ paddingTop: 3, paddingLeft: 5 }}> {count}k </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Dislikes = () => (
  <Counter />
);

export { Dislikes }