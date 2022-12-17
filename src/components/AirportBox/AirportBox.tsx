import { useNavigation } from '@react-navigation/native'
import { resetFlightList } from 'data/reducers/flightSlice'
import { useAppDispatch } from 'data/store'
import { FC, useRef, useState } from 'react'
import { TouchableOpacity, View, Image, Animated, TouchableWithoutFeedback } from 'react-native'
import TextBase from 'shared/TextBase'
import { IAirportInfo } from 'ts/airports'
import { flightListTypes } from 'ts/general'
import styles from './styles'

const flightListType: flightListTypes[] = ['ARRIVAL', 'DEPARTURE']

const AirportBox: FC<IAirportInfo> = (props) => {
    const { displayName, domainCode } = props
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)


    const animated = useRef(new Animated.Value(0)).current

    const toggleTypeBoxes = () => {
        Animated.timing(animated, {
            toValue: isOpen ? 0 : 48,
            duration: 200,
            useNativeDriver: false
        }).start()
        setIsOpen(prev => !prev)
    }

    const englishName = displayName.find(name => name.language === 'en-US')

    const goToAirport = (type: flightListTypes) => {
        dispatch(resetFlightList())
        navigation.navigate('Airport', { type, domainCode })
    }

    return (
        <View style={styles.root}>
            <TouchableWithoutFeedback onPress={toggleTypeBoxes} style={styles.overView}>
                <View style={styles.overView}>
                    <TextBase type='condensed' size='large' bold>{domainCode}</TextBase>
                    <TextBase color='gray' bold>{englishName?.value}</TextBase>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.typeBoxesWrapper, { height: animated }]}>
                {flightListType.map((type) => (
                    <TouchableOpacity key={type} onPress={() => goToAirport(type)} style={styles.typeBox}>
                        <View style={styles.planeWrapper}>
                            <Image source={require("assets/images/ps.png")} style={[styles.plane, styles[type]]} />
                        </View>
                        <TextBase type='condensed'>{type}</TextBase>
                    </TouchableOpacity>
                ))}
                <View style={styles.divider} />
            </Animated.View>
        </View>
    )
}

export default AirportBox
