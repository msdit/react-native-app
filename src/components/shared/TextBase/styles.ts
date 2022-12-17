import theme from "const/theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    primaryColorText: {
        color: theme.primaryText
    },
    secondaryColorText: {
        color: theme.secondaryText
    },
    lightColorText: {
        color: theme.lightText
    },
    grayColorText: {
        color: theme.grayText
    },
    xLargeText: {
        fontSize: 36
    },
    largeText: {
        fontSize: 24
    },
    normalText: {
        fontSize: 18
    },
    smallText: {
        fontSize: 16
    },
    xSmallText: {
        fontSize: 12
    },
    regular: {
        fontFamily: "Roboto-Regular"
    },
    condensed: {
        fontFamily: "BarlowCondensed-Light"
    },
    persian: {
        fontFamily: "Dana-Regular"
    },
    regularBold: {
        fontFamily: "Roboto-Bold"
    },
    condensedBold: {
        fontFamily: "BarlowCondensed-SemiBold"
    },
    persianBold: {
        fontFamily: "Dana-Regular"
    },
})