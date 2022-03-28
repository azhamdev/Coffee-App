import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { scale } from 'react-native-size-matters';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 3000)
    }, [navigation])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: scale(200), height: scale(200) }}>
                <LottieView source={require("../../Assets/Lottie/57944-brewing-coffee.json")} autoPlay={true} loop={true} resizeMode={'cover'} />
            </View>
            <Text>SYABAB {`\n`}COFFEE</Text>
        </View>
    )
};