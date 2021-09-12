import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Home=({navigation})=>{
    useEffect(() => {
        console.log('Home');
    });
    let cat={
        name:'Batsic',
        age:10
    }
    return(
        <View>
            <Text>Home</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    / 1. Navigate to the Details route with params /
                    navigation.navigate('Details', cat);
                }}
            />
            <Button
                title="Go to Daria"
                onPress={() => navigation.navigate('Daria')}
            /><Button
                title="Go to List"
                onPress={() => navigation.navigate('List')}
            />

        </View>

    )
}
export default Home;
