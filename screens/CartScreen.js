import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants'


export default function CartScreen() {
    const item = featured.restaurants[0];
    const navigation = useNavigation()
    return (
        <View>
            <StatusBar style='light' />
            <TouchableOpacity
            onPress={() => navigation.navigate('Restrautent')}
                className="absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2"
            >
                <Icon.ArrowLeft height="20" width="20" stroke="black" strokeWidth={3} />
            </TouchableOpacity>
            <ScrollView 
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={{
                paddingBottom: '70%'
            }}>
              <Text className = "text-center text-xl font-extrabold pt-8">Your Cart</Text>  
              <Text className = "text-center text-gray-400 font-extrabold mb-3 ">{item.name}</Text>  
              {
                item.dishes.map((dish,index)=>{
                    return(
                        <View className = "bg-white flex-row justify-between shadow-lg p-3 items-center rounded-lg mx-3 mb-2">
                            <View className = "flex-row items-center" >
                            <Text className = "text-lg font-extrabold px-2">2 X</Text>
                            <Image source={dish.image} className = "h-10 w-10 rounded-full" />
                            <Text className = "text-lg px-2">{dish.name}</Text>
                        </View>
                        <View className = "flex-row items-center">
                            <Text className = "text-lg  px-2">$ {dish.price}</Text>
                            <TouchableOpacity  
                            className = "bg-red-950 rounded-full p-1"
                            >
                                <Icon.Minus height='20' width = '20' stroke='white'/>
                            </TouchableOpacity>
                        </View>
                        </View>
                    )
                })
              }
            </ScrollView>
            <View className = "p-6 px-8 rounded-t-3xl bg-red-800 space-y-4 ">
              <View className = "flex-row items-center justify-between">
                <Text className = "text-white">Subtotal</Text>
                <Text className = "text-white text-left">$ 20</Text>
              </View>
              <View className = "flex-row items-center justify-between">
                <Text className = "text-white ">Delivery Charge</Text>
                <Text className = "text-white  text-left">$ 2</Text>
              </View>
              <View className = "flex-row items-center justify-between ">
                <Text className = "text-white font-extrabold">Order Total</Text>
                <Text className = "text-white font-extrabold">$ 22</Text>
              </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('orderPreparing')}
            className = "w-full  bg-red-950 rounded-full p-5"
            >
                <Text className="text-white text-center font-extrabold text-lg">Place Order</Text>

            </TouchableOpacity>
            </View>
        </View>
    )
}