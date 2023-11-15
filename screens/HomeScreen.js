import { View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import Categories from '../components/Categories'
import RestaurantCard from '../components/RestaurantCard'
import { featured } from '../constants'
import FeaturedRow from '../components/FeaturedRow'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      {/* Search Bar */}
      <View className = "flex-row items-center space-x-1 px-4 pb-2">
        <View className = "flex-row flex-1 items-center p-3 rounded-full border border-gray -300">
        <Icon.Search height="20" width="20" stroke="gray" />
        <TextInput placeholder='Canteen' className="flex-1 ml-2" />
        </View>
        <View className = "flex-item bg-gray-300 p-3   rounded-full item-center">
        <Icon.Sliders stroke="white" />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={
        {
          paddingBottom: 20
        }
      }>
        {/* categories */}
        <Categories/>
      </ScrollView>
      {/* featured */}
      <View className="mt-5">
        {
          [featured,featured,featured].map((item,index)=>{
            return(
              <FeaturedRow key={index} title={item.title} restaurants = {item.restaurants} description = {item.description}/>
            )
          })
        }

      </View>
    </SafeAreaView>
  )
}


