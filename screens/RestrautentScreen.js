import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'


export default function RestrautentScreen() {
  const {params} = useRoute()
  let item = params;

  const navigation = useNavigation()
  // console.log(item);
  return (
    <View>
      <CartIcon/>
      <StatusBar style='light'/>
    <ScrollView>
      <View className = "relative ">
        <Image className = 'w-full h-72' source={item.image}/>
        <TouchableOpacity
        className= "absolute top-14 left-4 bg-gray-50 rounded-full shadow p-2"
        onPress={()=>navigation.goBack()}
        >
          <Icon.ArrowLeft height="20" width = "20" stroke="black" strokeWidth={3}/>
        </TouchableOpacity>
        <View className = "-mt-10 bg-white px-5 pt-5" style={{borderTopLeftRadius:'50',borderTopRightRadius:'50'}}>
            <Text className = "font-bold text-3xl" > {item.name}</Text>
            <Text className = "px-1 text-sm" > {item.description}</Text>
        </View>
        <View className = "py-10 px-5 bg-white">
            <Text className = "font-bold text-3xl">Menu</Text>
            {
              item.dishes.map((dish,index)=><DishRow item = {{...dish}} key = {index}/>)
            }
        </View>
      </View>
    </ScrollView>
    </View>
  )
}