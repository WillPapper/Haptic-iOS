import React from 'react';
import { StyleSheet, Text, View, Vibration, TouchableHighlight, Alert } from 'react-native';

const height = '100%';
const width = '100%';
export default class App extends React.Component {
  onClick(event) {
    Alert.alert("Coordinates are X: ${event.nativeEvent.locationX} Y: ${event.nativeEvent.locationY}")
  }

  render() {
      const DURATION = 10000
      const PATTERN = [1000, 2000, 3000]
      Vibration.vibrate(PATTERN)
    return (
      <TouchableHighlight style={styles.container} onPress = { (event) => this.onClick(event) }>
      <View style={styles.text}>
      <Text>Welcome! Skim your finger to navigate.</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'white'
  }
});
