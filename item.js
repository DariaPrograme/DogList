import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {FlatList} from "react-native-web";
import {useNavigation} from "@react-navigation/core";

const Item=({uri}) =>  {
    // uri="https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_219.jpg"
    const navigation = useNavigation();
    const OnPress=()=>{
        navigation.navigate('SinglImage', {
            itemUri: uri,
        })
    }
    return(
        <View>
            <TouchableOpacity onPress={OnPress}>
               <Image
                style={styles.tinyLogo}
                source={{uri: uri}}
            />
            </TouchableOpacity>
        </View>

)
}
export default Item;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
});
