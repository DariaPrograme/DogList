import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const SinglImage=({ route, navigation })=>{
    const { itemUri} = route.params;
    return(
        <View>
            <Text>{itemUri}</Text>
            <Image
                style={styles.tinyLogo}
                source={{uri: itemUri}}
            />
        </View>
    )
}
export default SinglImage;
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
