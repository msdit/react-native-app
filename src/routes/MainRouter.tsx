import { FC } from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Home from 'pages/Home'
import Airport from 'pages/Airport'
import Flight from 'pages/Flight'
import theme from 'const/theme'
import BackButton from 'comps/BackButton'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerMode: 'screen',
  headerTintColor: theme.primaryText,
  headerStyle: {
    backgroundColor: theme.backgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerLeft: BackButton,
  title: '',
}

const MainRouter: FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={screenOptions}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Airport"
      component={Airport}
    />
    <Stack.Screen
      name="Flight"
      component={Flight}
    />
  </Stack.Navigator>
)

export default MainRouter