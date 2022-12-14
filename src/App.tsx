/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import TextBase from 'shared/TextBase'
import React, { type PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <TextBase>HI Fucking World!</TextBase>
          <TextBase type='condensed' size='xLarge'>SUB</TextBase>
          <TextBase color='secondary' type='condensed' size='large'>FN098</TextBase>
          <TextBase type='condensed' size='large' bold>GET STARTED!</TextBase>
          <TextBase color='light' type='condensed' size='normal'>HI Fucking World!</TextBase>
          <TextBase color='primary' size='small'>HI Fucking World!</TextBase>
          <TextBase color='secondary' type='condensed' size='xSmall' bold>HI Fucking World!</TextBase>
          <TextBase color='secondary' type='condensed' size='xLarge' bold>HI Fucking World!</TextBase>
          <TextBase color='gray' size='large' bold>HI Fucking World!</TextBase>
          <TextBase color='primary' type='condensed' size='normal' bold>HI Fucking World!</TextBase>
          <TextBase color='primary' size='small' bold>HI Fucking World!</TextBase>
          <TextBase color='secondary' type='condensed' size='xSmall' bold>HI Fucking World!</TextBase>

          <TextBase>HI Fucking World!</TextBase>
          <TextBase color='secondary'>HI Fucking World!</TextBase>
          <TextBase color='gray'>HI Fucking World!</TextBase>
          <TextBase color='light'>HI Fucking World!</TextBase>

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
