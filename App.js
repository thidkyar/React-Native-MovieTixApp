import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from "./src/home.js"
import AboutMe from "./src/aboutme.js"

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Now Playing',
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'black',
          borderTopColor: "transparent"
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-options" size={24}/>
        )
      }
    }
  },
  AboutMe: {screen: AboutMe}
},
);

export default createAppContainer(TabNavigator);