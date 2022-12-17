import { NavigationContainer } from '@react-navigation/native'
import store from 'data/store'
import { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import MainRouter from './routes/MainRouter'

const App: FC = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
)

export default App
