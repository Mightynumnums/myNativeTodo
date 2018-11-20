import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class AddTodo extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <TextInput
          placeholder='What needs to happen?'
          style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, height: 50, flex: 1, backgroundColor: '#eaeaea', padding: 10 }}
        />
        <TouchableOpacity
          onPress={() => alert('added todo!')}>
          <View style={{ height: 50, width: 50, backgroundColor: '#eaeaea', alignContent: 'center', alignItems: 'center', borderRadius: 100, marginLeft: 10 }}>
            <Ionicons name='md-add' size={40} style={{ color: 'tomato', padding: 10, marginTop:-5 }} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

