import theme from 'const/theme'
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        paddingLeft: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        paddingRight: theme.spacing(2),
    }
})