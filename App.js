import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import KlassesScreen from './src/screens/KlassesScreen'
import { store } from './src/store.js'

const navigator = createStackNavigator({
  Klasses: KlassesScreen
}, {
  initialRouteName: 'Klasses',
  defaultNavigationOptions: {
    title: "Your Classes"
  }
})

export default createAppContainer(navigator)
