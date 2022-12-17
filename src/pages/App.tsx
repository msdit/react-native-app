import { FC, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons/faPlane'

import TextBase from 'shared/TextBase'
import styles from './styles'
import { SECOND } from 'const/general'

const App: FC = () => {
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

  return <SafeAreaView style={styles.root}>
    <StatusBar
      barStyle='light-content'
    />
    <ScrollView
      style={styles.container}>
      <View style={styles.flightNameBox}>
        <View style={styles.flightLogoWrapper}>
          <Image source={require("assets/images/logos/logo6.png")} style={styles.flightLogoImage} />
        </View>
        <TextBase type='condensed' size='large' color='secondary'>FN098</TextBase>
      </View>
      <View style={styles.flightInfoBox}>
        <View style={styles.flightInfoLocation}>
          <TextBase type='condensed' size='xLarge'>DXB</TextBase>
          <TextBase size='small' color='gray'>Dubai</TextBase>
        </View>
        <View style={styles.flightInfoLocationDist}>
          <FontAwesomeIcon icon={faPlane} size={24} style={styles.planeIcon} />
          <TextBase size='xSmall' color='gray'>1h25min, 11:15 AM</TextBase>
        </View>
        <View style={styles.flightInfoLocation}>
          <TextBase type='condensed' size='xLarge'>FRA</TextBase>
          <TextBase size='small' color='gray'>FrankFurt</TextBase>
        </View>
      </View>
      <ImageBackground source={require("assets/images/w.png")} style={styles.plainInfoWrapper} imageStyle={styles.plainInfoWrapperBG}>
        <View style={styles.plainInfo}>
          <View>
            <TextBase style={styles.plainInfoText} type='condensed' size='small' color='gray'>AIRCRAFT</TextBase>
            <TextBase style={styles.plainInfoText} bold>Boeing737</TextBase>
          </View>
          <View>
            <TextBase style={styles.plainInfoText} type='condensed' size='small' color='gray'>SERIAL NUMBER</TextBase>
            <TextBase style={styles.plainInfoText} bold>44029</TextBase>
          </View>
          <View>
            <TextBase style={styles.plainInfoText} type='condensed' size='small' color='gray'>REGISTRATION</TextBase>
            <TextBase style={styles.plainInfoText} bold>KO-REF</TextBase>
          </View>
        </View>
        <Animated.View style={[styles.planeWrapper, { transform: [{ translateY: animated }] }]}>
          <Image source={require("assets/images/ps.png")} style={styles.plane} />
        </Animated.View>
      </ImageBackground>
    </ScrollView>
  </SafeAreaView>
}

export default App
