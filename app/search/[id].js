import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import { ScreenHeaderBtn } from '../../components'
import { COLORS, icons } from '../../constants'

const JobSearch = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <Text>Agregar código de APIs</Text>
        </SafeAreaView>
    )
}

export default JobSearch