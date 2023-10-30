import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from '../pages/Index';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Gym Fitness" component={Index} />
        </Stack.Navigator>
    );
}