import theme from 'const/theme'
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    planeWrapper: {
        marginHorizontal: 'auto',
        width: 150,
        aspectRatio: 2
    },
    plane: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    loadingText: {
        marginBottom: theme.spacing(4)
    }
})