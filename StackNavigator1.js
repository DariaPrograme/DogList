import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home";
import Daria from "./Daria";
import {NavigationContainer} from "@react-navigation/native";
import DogList from "./DogList";
import Deteils from "./deteils";
import SinglImage from "./singlImage";
const Stack = createNativeStackNavigator ( ) ;
export const StackNavigator1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Daria" component={Daria} />
            <Stack.Screen name="List" component={DogList} />
        </Stack.Navigator>
    )
}
export const StackNavigator2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Daria" component={Daria} />
<Stack.Screen name="Details" component={Deteils}/>
<Stack.Screen name="SinglImage" component={SinglImage}/>
            <Stack.Screen name="List" component={DogList} />
        </Stack.Navigator>
    )
}
