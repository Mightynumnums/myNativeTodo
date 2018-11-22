import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Octicons } from '@expo/vector-icons'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ScrollView>
    <View style={{ padding: 25 }}>
      {todos.map(todo =>
        <TouchableOpacity key={todo.id} style={{flex:1, flexDirection:'row'}}
          onPress={() => toggleTodo(todo.id)}>
          <Text style={{ fontSize: 24, backgroundColor: todo.completed ? 'white' : '#BBDDDB', padding: 15, margin: 5, textDecorationLine: todo.completed ? 'line-through' : 'none', width: 300 }}>
            {todo.text}
          </Text>
          <TouchableOpacity
            onPress={() => deleteTodo(todo.id)}>
            <View>
              <Octicons name='trashcan' size={20}   />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </View>
  </ScrollView>
)

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})