import { SECOND } from "const/general"
import { FC, useEffect, useRef } from "react"
import { Animated, Image, View } from "react-native"
import TextBase from "shared/TextBase"
import styles from './styles'

const Loading: FC = () => {
    const animated = useRef(new Animated.Value(0)).current
    const duration = 2 * SECOND

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animated, {
                    toValue: -15,
                    duration: duration,
                    useNativeDriver: true
                }),
                Animated.timing(animated, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true
                }),
            ]),
        ).start()
    }, [])

    return (
        <View style={styles.root}>
            <Animated.View style={[styles.planeWrapper, { transform: [{ translateY: animated }] }]}>
                <Image source={require("assets/images/pf.png")} style={styles.plane} />
            </Animated.View>
            <TextBase type="condensed" style={styles.loadingText}>Fetching data ...</TextBase>
        </View>
    )
}

export default Loading