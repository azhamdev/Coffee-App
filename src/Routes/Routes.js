import { createStackNavigator } from '@react-navigation/stack';
import Details from '../Screens/Details/Details';
import Home from '../Screens/Home/Home';
import React from 'react';
import Splash from '../Screens/Splash/Splash';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
