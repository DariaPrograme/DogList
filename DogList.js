import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {FlatList} from "react-native-web";
import Item from "./item";

const DogList=()=>{
    const[list, setList]= useState([])//состояние компонента
    useEffect(()=>{//юс эфект отработает после первоначального запуска компонента
        fetch("https://dog.ceo/api/breeds/image/random/5")//делаем запрос
            .then(response=>response.json())//получаем ответ и создаем асенхронный поток
            .then(data=> setList(data.message))//когда поток придет достаем поле мэседж и записываем его в поле
    },[])
    // list=["https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_10367.jpg","https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_1541.jpg","https:\/\/images.dog.ceo\/breeds\/schipperke\/n02104365_9712.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_806.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_13007.jpg"]
    const renderItem = ({ item }) => (
        // item="https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_219.jpg"
        <Item uri={item} />
    );
    return(
        <View>
<Text>{list.length}</Text>
            <FlatList
            data={list}
            renderItem={renderItem}
            // renderItem={({item}) =>   <Image
            //     style={styles.tinyLogo}
            //     source={{uri: item}}
            // />}

            keyExtractor={(item,key)=>''+key}
            />
        </View>
    )
}

export default DogList;
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
