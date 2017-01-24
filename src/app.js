import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyKzZy57UHSDPZjMZFdVcHlsN_ivwImD8',
      authDomain: 'authentication-ce886.firebaseapp.com',
      databaseURL: 'https://authentication-ce886.firebaseio.com',
      storageBucket: 'authentication-ce886.appspot.com',
      messagingSenderId: '229468524327'
    });

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My App</Text>
      </View>
    );
  }
}

export default App;
