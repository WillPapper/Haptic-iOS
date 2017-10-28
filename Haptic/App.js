import React from 'react';
import { StyleSheet, Text, View, Vibration, TouchableHighlight, Alert } from 'react-native';

export default class App extends React.Component {
  onClick() {
    Alert.alert("Button clicked!")
  }

  render() {
      const DURATION = 10000
      const PATTERN = [1000, 2000, 3000]
      Vibration.vibrate(PATTERN)
    return (
      <TouchableHighlight onPress = { (event) => this.onClick(event) }>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
