import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//import Header from './Header'
import AddTodo from './containers/AddTodo'

export default class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80
  }
})