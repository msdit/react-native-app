import AirportBox from 'comps/AirportBox'
import phrases from 'const/phrases'
import { airportsSelector, fetchAirPorts } from 'data/reducers/flightSlice'
import { useAppDispatch } from 'data/store'
import DefaultLayout from 'layouts/DefaultLayout'
import { FC, useEffect } from 'react'
import { ImageBackground, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import Loading from 'shared/Loading'
import TextBase from 'shared/TextBase'
import styles from './styles'

const Home: FC = () => {
    const airports = useSelector(airportsSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAirPorts())
    }, [])

    return (
        <DefaultLayout>
            <ImageBackground source={require("assets/images/w.png")}>
                <TextBase style={styles.title} size='large' bold>{phrases.HomeTitle}</TextBase>
                <TextBase style={styles.subTitle} color='gray'>{phrases.HomeSubTitle}</TextBase>
            </ImageBackground>
            <ScrollView>
                {airports.length === 0 && <Loading />}
                {airports.map((airport) => <AirportBox key={airport.domainCode} {...airport} />)}
            </ScrollView>
        </DefaultLayout>
    )

}

export default Home
