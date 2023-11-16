import { View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice'

export default function CartIcon() {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const navigation = useNavigation()

  if (!cartItems.length) return null;
  return (
    <View className="absolute bottom-5 z-50 w-full" >
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className=" flex-row flex-1 items-center justify-between bg-red-950 p-5 rounded-full mx-5 shadow-lg"
      >
        <View className='rounded-full p-1 py-2' style={{ backgroundColor: 'rgba(225,225,225,0.3)' }}>
          <Text className="font-extrabold text-white text-lg bg-gray rounded-full px-3">{cartItems.length}</Text>
        </View>
        <Text className="font-extrabold text-lg text-white">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}