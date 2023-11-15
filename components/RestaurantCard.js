import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function RestaurantCard({item}) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restrautent',{...item})}>
        <View className="mr-6 shadow-lg rounded-3xl bg-white">
          <Image className = "h-36 w-64 rounded-t-3xl " source={item.image}/>
          <Text className = "font-bold text-lg py-2 px-1">{item.name}</Text>
          <Text className = "font-xs text-gray-500 py-2 px-1">{item.description}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}