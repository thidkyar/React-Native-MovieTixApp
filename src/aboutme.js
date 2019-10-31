import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar } from 'react-native';

class AboutMe extends Component {
  static navigationOptions = {
    tabBarLabel: 'About'
  }
render() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}
}

export default AboutMe;
