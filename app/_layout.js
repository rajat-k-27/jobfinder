const { Stack } = require("expo-router");
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react'
import * as  SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log('fonts loaded')
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    console.log('fonts loading')
    return null;
  }
  return <Stack onLayout={onLayoutRootView} />
}

export default Layout