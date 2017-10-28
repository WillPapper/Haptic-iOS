import React from 'react';
import { StyleSheet, Text, View, Vibration, TouchableHighlight, ScrollView, Alert } from 'react-native';

const height = '100%';
const width = '100%';
export default class App extends React.Component {

  handleScroll(event) {
    console.log("Coordinates are X: " + event.nativeEvent.contentOffset.x + "Y: " + event.nativeEvent.contentOffset.y)
    // Assume that position always starts at the top
    
  }

  render() {
      const DURATION = 10000
      const PATTERN = [1000, 2000, 3000]
      Vibration.vibrate(PATTERN)
    return (
      <ScrollView style={styles.container} onScroll = { this.handleScroll } scrollEventThrottle = {16}>
      <View style={styles.text}>
      <Text>Welcome! Skim your finger to navigate.</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: 'black',
  },
  text: {
    backgroundColor: 'white'
  }
});
