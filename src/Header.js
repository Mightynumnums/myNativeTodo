import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>HEADER</Text>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'lightblue'
//   }
// })