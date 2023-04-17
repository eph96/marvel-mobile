import { useState } from 'react';

import { View, ScrollView, SafeAreaView } from 'react-native';
import { Link, Stack, useRouter,useSearchParams } from 'expo-router';

import { SelectOption, ScreenHeaderBtn, Welcome } from '../../components';

import { COLORS,images,SIZES } from '../../constants';
const Principal = (search) => {
    
    const [searchTerm, setSearchTerm] = useState(search);
    const router = useRouter();
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
                        handleClick={() => {
                            }}
                    />
                    <SelectOption />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Principal;