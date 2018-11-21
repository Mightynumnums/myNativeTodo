import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Octicons } from '@expo/vector-icons'

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{ padding: 25}}>
    {todos.map(todo =>
      <TouchableOpacity key={todo.id}
        onPress={() => toggleTodo(todo.id)}>
        <Text style={{ fontSize: 24, backgroundColor: todo.completed ? 'white' : '#BBDDDB', padding: 15, margin:5,textDecorationLine:todo.completed ? 'line-through' : 'none',}}>
        {todo.text}
        </Text>
        <Octicons name='trashcan' size={40} style={{ color: 'tomato', padding: 10, marginTop: -5 }}/>
        </TouchableOpacity>
        )}
      
  </View>
)

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})