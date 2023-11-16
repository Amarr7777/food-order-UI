import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather"


export default function OrderPreparingScreen() {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },3000)
    },[])
  return (

    <View className = "flex-1 items-center justify-center">
        <StatusBar barStyle='dark'/>
        <Image source={require('../assets/images/delivery.gif')}
        className = "h-48 w-48"
        />
    </View>
  )
}