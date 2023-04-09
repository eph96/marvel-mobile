import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS, images, SIZES } from '../constants';
import { SelectOption, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={
                    {
                        headerStyle: { backgroundColor: COLORS.darkblue },
                        headerShadowVisible: false,
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.marvel}/>
                        ),
                        headerTitle: "Marvel app",
                        headerTintColor: COLORS.lightWhite
                    }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {}}
                    />
                    <SelectOption />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;