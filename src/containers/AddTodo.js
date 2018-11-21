import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
  state = {
    text: ''
  }

  //add a new todo
  addTodo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.main}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder='What needs to happen?'
          style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, height: 50, flex: 1, backgroundColor: '#eaeaea', padding: 10 }}
        />
        <TouchableOpacity
          onPress={() => this.addTodo(this.state.text)}>
          <View style={{ height: 50, width: 50, backgroundColor: '#eaeaea', alignContent: 'center', alignItems: 'center', borderRadius: 100, marginLeft: 10 }}>
            <Ionicons name='md-add' size={40} style={{ color: 'tomato', padding: 10, marginTop: -5 }} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main: { flexDirection: 'row', marginHorizontal: 20 },
})

//Connect to Redux to dispatch actions from the store
export default connect()(AddTodo)

