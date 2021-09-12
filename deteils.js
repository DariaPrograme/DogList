import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// navigation.navigate('Details', {
//     itemId: 86,
//     otherParam: 'anything you want here',
// });
const Deteils=({ route, navigation }) =>{
    / 2. Get the param /
    const cat  = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>{cat.name}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
export default Deteils;
