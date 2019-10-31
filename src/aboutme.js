import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar } from 'react-native';

class AboutMe extends Component {
  static navigationOptions = {
    tabBarLabel: 'About'
  }
render() {
    return (
        <View style={styles.container}>
            <Text>PAGE INCOMPLETE</Text>
        </View>
    )
}
}

export default AboutMe;

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      paddingTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap', 
      flexDirection: 'row',
    },
  });
  