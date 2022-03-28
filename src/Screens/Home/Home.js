import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import KopiAren from '../../Assets/Images/KopiGulaAren.png'
import { Button } from 'react-native-elements'

export default function Home() {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={KopiAren} style={Styles.imageCoffee} />
            </View>
            <View style={Styles.containerContent}>
                <View style={Styles.descriptions}>
                    <View>
                        <Text style={{ fontSize: scale(14), color: '#3A3845', fontWeight: '600' }}>
                            Syabab Coffee
                        </Text>
                        <Text style={{ fontSize: scale(20), fontWeight: 'bold' }}>
                            Kopi Susu Gula Aren
                        </Text>
                        <Text style={{ fontSize: scale(14), color: '#3A3845', fontWeight: '600' }}>
                            250 ml
                        </Text>
                        <Text style={{ fontSize: scale(14), color: '#3A3845', fontWeight: '600', textAlign: 'justify', marginTop: scale(30), lineHeight: scale(20) }}>
                            Kopi Susu Gula Aren, terbuat dari kopi robusta pilihan, susu sapi segar dan dari gula aren terbaik
                        </Text>
                    </View>
                    <Text style={{ color: '#3A3845', fontSize: scale(20), fontWeight: "800", marginBottom: scale(20) }}>
                        Rp 12.000
                    </Text>
                </View>
                <Button
                    title="Pesan Sekarang"
                    buttonStyle={{
                        backgroundColor: '#3A3845',
                        borderRadius: 4,
                    }}
                    titleStyle={{
                        color: '#F7CCAC',
                        fontSize: scale(20)
                    }}
                />
            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        paddingBottom: scale(18)
    },
    header: {
        backgroundColor: '#3A3845',
        height: scale(300),
        borderBottomLeftRadius: scale(40),
        borderBottomEndRadius: scale(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCoffee: {
        height: scale(250),
        width: scale(250),
        resizeMode: 'contain'
    },
    containerContent: {
        paddingHorizontal: scale(30),
        marginTop: scale(30),
        // backgroundColor: 'red',
        flex: 1
    },
    descriptions: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})