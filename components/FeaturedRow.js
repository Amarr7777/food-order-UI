import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title,restaurants,description}) {
  return (
    <>
    <View className="flex-row justify-between items-center px-4 ">
      <View >
        <Image source={restaurants.Image}/>
        <Text className = "font-bold text-lg">{title}</Text>
        <Text className = "text-xs text-gray-500">{description}</Text>
      </View>
      <Text className="font-bold">See All</Text>
    </View>

    <ScrollView
    horizontal
    showsHorizontalScrollIndicator= {false}
    contentContainerStyle = {{
        paddingHorizontal: 15
    }}
    className="overflow-visible py-5"
    >
       {
       restaurants.map((restaurants,index)=>{
        return(
            <RestaurantCard item={restaurants} key={index}/>
        )
       })
       }

    </ScrollView>
    </>
  )
}