import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, StackActions,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';


const Stack = createStackNavigator();


export default function App() {
 return (
 <NavigationContainer >
 <Stack.Navigator>
 <Stack.Screen name="Home" component={ZipCodeScreen}  
 options={{
          title: 'Work And Travel',
          headerStyle: {
            backgroundColor: '#69BF64',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignItems: 'center',  
            fontWeight: 'bold',
            fontSize : '40px' ,
            alignSelf: 'center' 
          },
        }} />
 <Stack.Screen name="Weather" component={WeatherScreen} 
 options={{
    title: 'Today Weather Status',
    headerStyle: {
      backgroundColor: '#45aeee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignItems: 'center',  
      fontWeight: 'bold',
      alignSelf: 'center' 
    },
  }}/>
 </Stack.Navigator>
 </NavigationContainer>
 );
}