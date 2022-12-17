import theme from 'const/theme'
import { FC } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaViewProps, SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

const DefaultLayout: FC<SafeAreaViewProps> = ({ children }) => (
    <SafeAreaView style={styles.root}>
        <StatusBar barStyle='dark-content' />
        {children}
    </SafeAreaView>
)

export default DefaultLayout
