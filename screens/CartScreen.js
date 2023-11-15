import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'


export default function CartScreen() {
    const navigation = useNavigation()
  return (
    <ScrollView>
        <StatusBar style='light'/>
    <TouchableOpacity
        className= "absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2"
        onPress={()=>navigation.goBack()}
        >
          <Icon.ArrowLeft height="20" width = "20" stroke="black" strokeWidth={3}/>
        </TouchableOpacity>
    </ScrollView>
  )
}