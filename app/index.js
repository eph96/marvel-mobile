import { useState } from 'react';

import { View, ScrollView, SafeAreaView,TouchableOpacity,Text } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';

import { SelectOption, ScreenHeaderBtn, Welcome } from '../components';
import searchCharacters from './search/[search]';
import { Router, Route } from 'expo-router';
import { COLORS,images,SIZES } from '../constants';
import { Login } from '../components';
const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
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
                    
                    {/* <TouchableOpacity onPress={()=>{
                        router.push({
                            pathname:'/Principal/Principal',
                            params: {
                                param: searchTerm
                            }
                        })
                    }} >
                            

                    </TouchableOpacity> */}
                    
                    <Login searchTerm={searchTerm} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;