import theme from "const/theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        backgroundColor: theme.lightColor,
        borderRadius: theme.borderRadius,
        marginBottom: theme.spacing(4),
        paddingVertical: theme.spacing(6),
        paddingHorizontal: theme.spacing(8),
    },
    overView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    typeBoxesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: "hidden"
    },
    typeBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(4)
    },
    planeWrapper: {
        width: 40,
        aspectRatio: 2,
        marginRight: theme.spacing(2)
    },
    plane: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    ARRIVAL: {
        transform: [
            { rotateX: '15deg' },
            { rotateZ: '15deg' }
        ]
    },
    DEPARTURE: {
        transform: [
            { rotateX: '-15deg' },
            { rotateZ: '-15deg' }
        ]
    },
    divider: {
        position: 'absolute',
        top: theme.spacing(4),
        bottom: 0,
        left: '50%',
        borderLeftWidth: 1,
        borderLeftColor: theme.grayText,
    }
})