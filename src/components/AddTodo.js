import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { Form, Item, Input, Button, Text as NBText } from 'native-base'

export default class AddTodo extends Component {

  state = {
    text: ''
  }

  onAdd = () => {
    this.props.navigation.state.params.saveItem(this.state.task)
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>

        <Form>
          <Item>
            <Input
              placeholder="Task"
              onChange={e => this.setState({task: e.nativeEvent.text})}
              value={this.state.task}
            />
          </Item>
        </Form>

        <Button
          style={styles.button}
          onPress={this.onAdd}
        >
          <NBText>Add Task</NBText>
        </Button>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 20
  }
})