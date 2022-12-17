import { FC } from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'
import TextBase from 'shared/TextBase'
import { IFlightCleanInfo } from 'ts/flights'
import styles from './styles'

type IFlightBoxProps = {
    item: IFlightCleanInfo,
    goToFlight: () => void
}

const FlightBox: FC<IFlightBoxProps> = (props) => {
    const { item, goToFlight } = props

    return (
        <View style={styles.root}>
            <TouchableWithoutFeedback onPress={goToFlight}>
                <View style={styles.mainBox}>
                    <View style={styles.airlineBox}>
                        <View style={styles.airlineLogo}>
                            <Image source={{ uri: item.logo }} style={styles.airlineLogoImage} />
                        </View>
                        <TextBase type='condensed' size='small' color='gray'>FLIGHT#</TextBase>
                        <TextBase bold>{item.flightNumber}</TextBase>
                    </View>
                    <View>
                        <View style={styles.detailBox}>
                            <View style={styles.detailBoxItem}>
                                <TextBase type='condensed' size='small' color='gray'>{item.toFromLabel}</TextBase>
                                <TextBase type='persian'>{item.toFromValue}</TextBase>
                            </View>
                            <View style={styles.detailBoxItem}>
                                <TextBase type='condensed' size='small' color='gray'>AIRLINE</TextBase>
                                <TextBase type='persian'>{item.airlineName}</TextBase>
                            </View>
                        </View>
                        <View style={[styles.detailBox, styles.timeBox]}>
                            <View style={styles.detailBoxItem}>
                                <TextBase type='condensed' size='small' color='gray'>SCHEDULED</TextBase>
                                <TextBase size='small'>{item.scheduledTime}</TextBase>
                            </View>
                            {item.actualTime && <View style={styles.detailBoxItem}>
                                <TextBase type='condensed' size='small' color='gray'>ACTUAL</TextBase>
                                <TextBase size='small'>{item.actualTime}</TextBase>
                            </View>}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.statusBox}>
                <TextBase type='condensed' color='secondary' bold>{item.status}</TextBase>
            </View>
        </View>
    )
}

export default FlightBox
