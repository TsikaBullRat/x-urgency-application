import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons'

class Counter extends React.Component {
  state = { count: 106 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View>

        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={this.setCount}>
            <Entypo
              name="thumbs-up"
              size={20}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ paddingTop: 6 }}> {count}k </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Likes = () => (
  <Counter />
);

export { Likes }