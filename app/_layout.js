import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS, icons, images } from '../constants';
import { ScreenHeaderBtn } from '../components';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async() => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayoutRootView={onLayoutRootView}
            screenOptions={{
                headerStyle:{
                    backgroundColor: COLORS.darkblue,
                },
                headerTintColor: COLORS.lightWhite,
                headerShadowVisible: false,
                headerRight: () => <ScreenHeaderBtn iconUrl={images.marvel}/>,
            }}
    />;
}

export default Layout;