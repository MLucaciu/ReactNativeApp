import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LogIn from './components/LogIn';
import Register from './components/Register';
import OrasDetail from './components/OrasDetail';
import Home from './components/Home';
import OrasList from './components/OrasList';
import Grafic from './components/Grafic';
const Application = StackNavigator({
  LogIn : {screen : LogIn },
  Register : {screen : Register},
  Home : {screen : Home},
  Grafic : {screen : Grafic},
  OrasList : {screen : OrasList},
  OrasDetail : {screen : OrasDetail}
  },
    {
      navigationOptions : {
        header : false,
      }

});

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}
