import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import FlightBox from 'comps/FlightBox'
import phrases from 'const/phrases'
import { fetchFlights, flightsListSelector } from 'data/reducers/flightSlice'
import { useAppDispatch } from 'data/store'
import DefaultLayout from 'layouts/DefaultLayout'
import { FC, useEffect } from 'react'
import { FlatList, ImageBackground, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import Loading from 'shared/Loading'
import TextBase from 'shared/TextBase'
import { IFlightCleanInfo } from 'ts/flights'
import styles from './styles'

const Airport: FC = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const route = useRoute<any>()
    const { type, domainCode } = route?.params
    const flights = useSelector(flightsListSelector)

    useEffect(() => {
        if (type && domainCode)
            dispatch(fetchFlights(type, domainCode))
    }, [type, domainCode])

    const goToFlight = (item: IFlightCleanInfo) => {
        navigation.navigate('Flight', item)
    }

    return (
        <DefaultLayout>
            <ImageBackground source={require("assets/images/p3.png")} imageStyle={styles.planeBG}>
                <TextBase style={styles.title} size='large' bold>{phrases.HomeTitle}</TextBase>
                <TextBase style={styles.subTitle} color='gray'>{phrases.HomeSubTitle}</TextBase>
            </ImageBackground>
            {
                flights.length > 0
                    ? <FlatList data={flights} renderItem={
                        ({ item }) => FlightBox({ item, goToFlight: () => goToFlight(item) })
                    } />
                    : <Loading />
            }
        </DefaultLayout>
    )
}

export default Airport
