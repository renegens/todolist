import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { TabNavigator, StackNavigator } from 'react-navigation'

import TodoList from './src/components/TodoList'
import AddTodo from './src/components/AddTodo'
import About from './src/components/About'

const TodoNav = StackNavigator({
  TodoList: {screen: TodoList},
  AddTodo: {screen: AddTodo}
}, {
  mode: 'modal'
})

const TabNav = TabNavigator({
  TodoNav: {screen: TodoNav},
  About: {screen: About}
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#0066cc'
  },
  ...TabNavigator.Presets.iOSBottomTabs
})

export default class App extends Component<{}> {
  render () {
    return (
      <TabNav/>
    )
  }
}

const styles = StyleSheet.create({})
