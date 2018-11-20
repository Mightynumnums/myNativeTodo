import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Hello World!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60

  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
  }
})
