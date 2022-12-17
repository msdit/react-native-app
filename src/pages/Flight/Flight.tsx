import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRoute } from '@react-navigation/native'
import { SECOND } from 'const/general'
import DefaultLayout from 'layouts/DefaultLayout'
import { FC, useEffect, useRef } from 'react'
import { Animated, Image, ImageBackground, ScrollView, View } from 'react-native'
import TextBase from 'shared/TextBase'
import { IFlightCleanInfo } from 'ts/flights'
import styles from './styles'

const Flight: FC = () => {
    const route = useRoute<any>()
    const item: IFlightCleanInfo = route?.params
    const animated = useRef(new Animated.Value(0)).current
    const duration = 1.5 * SECOND

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animated, {
                    toValue: -10,
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
        <DefaultLayout>
            <ScrollView>
                <View style={styles.airlineBox}>
                    <View style={styles.airlineLogoWrapper}>
                        <Image source={{ uri: item.logo }} style={styles.airlineLogoImage} />
                    </View>
                    <View style={styles.airlineTextWrapper}>
                        <TextBase type='condensed' size='large' color='secondary'>{item.flightNumber} <TextBase type='persian' size='large' color='secondary'>{item.airlineName}</TextBase></TextBase>
                        <TextBase type='condensed' color='secondary'>{item.terminal}</TextBase>
                    </View>
                </View>
                <View style={styles.flightInfoBox}>
                    <TextBase
                        type={item.type === 'ARRIVAL' ? 'persian' : 'condensed'}
                        size={item.type === 'ARRIVAL' ? 'large' : 'xLarge'}>
                        {item.type === 'ARRIVAL' ? item.toFromValue : item.airport}
                    </TextBase>
                    <FontAwesomeIcon icon={faPlane} size={24} style={styles.planeIcon} />
                    <TextBase
                        type={item.type === 'DEPARTURE' ? 'persian' : 'condensed'}
                        size={item.type === 'DEPARTURE' ? 'large' : 'xLarge'}>
                        {item.type === 'DEPARTURE' ? item.toFromValue : item.airport}
                    </TextBase>
                </View>
                <View style={styles.statusBox}>
                    <TextBase type='condensed' color='secondary' bold>{item.status}</TextBase>
                </View>
                <ImageBackground source={require("assets/images/w.png")} style={styles.planeInfoWrapper} imageStyle={styles.planeInfoWrapperBG}>
                    <View style={styles.planeInfo}>
                        <View>
                            <TextBase style={styles.planeInfoText} type='condensed' size='small' color='gray'>AIRCRAFT</TextBase>
                            <TextBase style={styles.planeInfoText} bold>{item.airplaneType}</TextBase>
                        </View>
                        <View>
                            <TextBase style={styles.planeInfoText} type='condensed' size='small' color='gray'>SCHEDULED</TextBase>
                            <TextBase style={styles.planeInfoText} bold>{item.scheduledTime}</TextBase>
                        </View>
                        {item.actualTime && <View>
                            <TextBase style={styles.planeInfoText} type='condensed' size='small' color='gray'>ACTUAL</TextBase>
                            <TextBase style={styles.planeInfoText} bold>{item.actualTime}</TextBase>
                        </View>}
                    </View>
                    <Animated.View style={[styles.planeWrapper, { transform: [{ translateY: animated }] }]}>
                        <Image source={require("assets/images/ps.png")} style={styles.plane} />
                    </Animated.View>
                </ImageBackground>
            </ScrollView>
        </DefaultLayout>
    )
}

export default Flight
