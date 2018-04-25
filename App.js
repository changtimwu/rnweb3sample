/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
require('./globals')

const Web3 = require('web3');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { blockInfo: 'not load yet' }
  }

  testweb3() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/')
    );
    web3.eth.getBlock('latest').then((blkobj) => {
      console.log('blkobj=', blkobj)
      blkobj.transactions = null
      this.setState({ blockInfo: JSON.stringify(blkobj) })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Load latest block info' onPress={() => this.testweb3()} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          {this.state.blockInfo}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
