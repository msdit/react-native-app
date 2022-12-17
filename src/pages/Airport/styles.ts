import theme from "const/theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    planeBG: {
        width: '120%',
        transform: [
            { translateX: -80 },
            { translateY: -60 }
        ],
        opacity: .2
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    subTitle: {
        marginBottom: theme.spacing(8)
    }
})