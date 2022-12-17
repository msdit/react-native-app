import theme from "const/theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        marginBottom: theme.spacing(4),
    },
    mainBox: {
        backgroundColor: theme.lightColor,
        borderRadius: theme.borderRadius,
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1
    },
    statusBox: {
        backgroundColor: theme.primaryColor,
        borderBottomLeftRadius: theme.borderRadius,
        borderBottomRightRadius: theme.borderRadius,
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(-2),
        marginHorizontal: theme.spacing(5),
        paddingHorizontal: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(5),
        zIndex: 0
    },
    airlineBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    airlineLogo: {
        width: 36,
        aspectRatio: 1,
        marginBottom: theme.spacing(4)
    },
    airlineLogoImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    detailBox: {
        marginLeft: theme.spacing(6),
        display: 'flex',
        flexDirection: 'row',
    },
    detailBoxItem: {
        width: '45%'
    },
    timeBox: {
        marginTop: theme.spacing(2)
    }
})