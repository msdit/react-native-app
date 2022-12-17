import theme from 'const/theme'
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    airlineBox: {
        backgroundColor: theme.primaryColor,
        borderTopLeftRadius: theme.borderRadius,
        borderTopRightRadius: theme.borderRadius,
        marginHorizontal: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(10),
        paddingHorizontal: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    airlineLogoWrapper: {
        width: 64,
        aspectRatio: 1
    },
    airlineLogoImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    airlineTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    flightInfoBox: {
        backgroundColor: theme.lightColor,
        borderRadius: theme.borderRadius,
        marginTop: theme.spacing(-8),
        padding: theme.spacing(6),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
    },
    planeIcon: {
        color: theme.grayText,
        margin: theme.spacing(4)
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
    planeInfoWrapper: {
        position: 'relative',
        marginTop: theme.spacing(2),
        height: theme.spacing(45),
    },
    planeInfoWrapperBG: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        opacity: .75
    },
    planeInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing(4),
    },
    planeInfoText: {
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