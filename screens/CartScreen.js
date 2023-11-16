import { View, Text, TouchableOpacity, ScrollView, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather"
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice'


export default function CartScreen() {
 
  const item = useSelector(selectRestaurant)
  const [groupedItems, setGroupedItems] = useState({})
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const deliveryFee = 2;

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {})
    setGroupedItems(items);
  }, [cartItems])

  return (
    <View className = "bg-red-300">
      <StatusBar style='light' />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        
        className="absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2 z-50"
      >
        <Icon.ArrowLeft height="20" width="20" stroke="black" strokeWidth={3} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className = "bg-red-300 h-full"
        >
        <Text className="text-center text-xl font-extrabold pt-8">Your Cart</Text>
        <Text className="text-center text-white-400 font-extrabold mb-3 ">{item.name}</Text>
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
        return(
        <View key={key} className="bg-white flex-row justify-between shadow-lg p-3 items-center rounded-lg mx-3 mt-2">
          <View key={key} className="flex-row items-center" >
            <Text className="text-lg font-extrabold px-2">{items.length} X</Text>
            <Image source={dish.image} className="h-10 w-10 rounded-full" />
            <Text className="text-lg px-2">{dish.name}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-lg  px-2">$ {dish.price}</Text>
            <TouchableOpacity
              className="bg-red-950 rounded-full p-1 z-10"
              onPress={()=>dispatch(removeFromCart({id: dish.id }))}
            >
              <Icon.Minus height='20' width='20' stroke='white' />
            </TouchableOpacity>
          </View>
        </View>
        )
        })
        }
      </ScrollView>
      <View className="absolute w-full bottom-0 p-6 pb-12 px-8 rounded-t-3xl bg-red-800 space-y-4 ">
        <View className="flex-row items-center justify-between">
          <Text className="text-white">Subtotal</Text>
          <Text className="text-white text-left">$ {cartTotal}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-white ">Delivery Charge</Text>
          <Text className="text-white  text-left">$ {deliveryFee}</Text>
        </View>
        <View className="flex-row items-center justify-between ">
          <Text className="text-white font-extrabold">Order Total</Text>
          <Text className="text-white font-extrabold">$ {cartTotal+deliveryFee}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('orderPreparing')}
          className="w-full  bg-red-950 rounded-full p-5"
        >
          <Text className="text-white text-center font-extrabold text-lg">Place Order</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}