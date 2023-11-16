import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemById, selectCartTotal } from "../slices/cartSlice";

export default function DishRow({ item }) {

  const totalItems = useSelector(state => selectCartItemById(state, item.id))
  const dispatch = useDispatch()
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }))
  }
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }))
  }

  return (
    <View className="flex-row items-center p-5 shadow bg-white rounded-lg mb-5 mt-2 ">
      <Image
        className="rounded-lg"
        source={item.image}
        style={{ height: 100, width: 100 }}
      />
      <View className="flex flex-1">
        <Text className="font-bold text-xl ml-4">{item.name}</Text>
        <Text className="text-gray-700 ml-4">{item.description}</Text>
        <Text className="text-red-950 font-semibold ml-4 pt-3">
          ${item.price}
        </Text>
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity className="bg-red-950 rounded-full p-1 mx-1 "
          onPress={handleDecrease}
          disabled={!totalItems.length}
        >
          <Icon.Minus height="20" width="20" stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View className="rounded-full p-1 mx-1 ">
          <Text className="font-bold ">{totalItems.length}</Text>
        </View>
        <TouchableOpacity className="bg-red-950 rounded-full p-1 mx-1"
          onPress={handleIncrease}
        >
          <Icon.Plus height="20" width="20" stroke="white" strokeWidth={3} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
