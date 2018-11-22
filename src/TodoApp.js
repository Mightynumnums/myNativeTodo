import React, { Component } from 'react'
import { View } from 'react-native'
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

export default class Todo extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <AddTodo />
        <VisibleTodos />
      </View>
    )
  }
}
