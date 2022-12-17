import theme from 'const/theme'
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    container: {
        marginHorizontal: theme.spacing(6)
    },
    flightNameBox: {
        backgroundColor: theme.primaryColor,
        borderTopLeftRadius: theme.borderRadius,
        borderTopRightRadius: theme.borderRadius,
        marginTop: theme.spacing(10),
        marginHorizontal: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(10),
        paddingHorizontal: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flightLogoWrapper: {
        width: 64,
        aspectRatio: 1
    },
    flightLogoImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    flightInfoBox: {
        backgroundColor: theme.lightColor,
        borderRadius: theme.borderRadius,
        marginTop: theme.spacing(-8),
        padding: theme.spacing(6),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flightInfoLocation: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    flightInfoLocationDist: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    planeIcon: {
        color: theme.grayText,
        margin: theme.spacing(4)
    },
    plainInfoWrapper: {
        position: 'relative',
        marginTop: theme.spacing(2),
        height: theme.spacing(45),
    },
    plainInfoWrapperBG: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        opacity: .75
    },
    plainInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing(4),
    },
    plainInfoText: {
        margin: theme.spacing(1)
    },
    planeWrapper: {
        position: 'absolute',
        width: '100%',
        left: 0,
        top: theme.spacing(10),
        aspectRatio: 2
    },
    plane: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})