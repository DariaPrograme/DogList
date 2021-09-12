import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";
const Daria=({navigation})=>{
    let [dogImage, setDogImage] = useState({"message":"https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_2138.jpg","status":"success"})
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data=> setDogImage(data))
        ;
    },[]);
    return(
        <View>
            <Text>{dogImage.message}</Text>
            <Image
                style={styles.tinyLogo}
                source={{uri: dogImage.message}}
            />
            <Button
            title="Go to Home"
            onPress={() =>navigation.navigate('Home')}
            />

        </View>
    )
}
export default Daria;
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
