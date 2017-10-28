import React from 'react';
import { StyleSheet, Text, View, Vibration, TouchableHighlight, ScrollView, Alert } from 'react-native';

const height = '100%';
const width = '100%';

export default class App extends React.Component {

  handleScroll(event) {
    // Assume that position always starts at the top
    // Starting point for Y is 0, ending point for Y is -200
    var yCoordinate = event.nativeEvent.contentOffset.y
    var yCoordinatePercentage = yCoordinate / 200
    const DURATION = 10000
    const PATTERN_FAST = [100, 100, 100]
    const PATTERN_MEDIUM = [100, 400, 400]
    const PATTERN_SLOW = [100, 700, 700]
    const PATTERN_VERY_SLOW = [100, 1000, 1000]

    console.log("Coordinates are X: " + event.nativeEvent.contentOffset.x + "Y: " + event.nativeEvent.contentOffset.y)
    console.log("Percentage is " + yCoordinatePercentage)
    if (yCoordinatePercentage <= .2 ) {
      Vibration.vibrate(PATTERN_FAST)

    }
    else if (yCoordinatePercentage <= .4 && yCoordinatePercentage > .2 ) {
      Vibration.vibrate(PATTERN_MEDIUM)

    }
    else if (yCoordinatePercentage <= .6 && yCoordinatePercentage > .8 ) {
      Vibration.vibrate(PATTERN_SLOW)

    }
    else if (yCoordinatePercentage <= .8 && yCoordinatePercentage > 1 ) {
      Vibration.vibrate(PATTERN_VERY_SLOW)

    }
  }

  render() {
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
