import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const[activeCategory,setCategory] = useState();
  return (
    <View className="mt-5">
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible "
        >
            {categories.map((category,index)=>{
                let isActive = category.id == activeCategory;
                let btnClass = isActive ? 'bg-gray-500':'bg-gray-300';
                let textClass = isActive ? 'font-bold' : 'text-sm';
                
                return(
                    <View key={index} className="flex justify-center items-center mr-6">
                        <TouchableOpacity onPress={()=>{
                            setCategory(category.id);
                        }} className = {"p-2 rounded-full shadow bg-gray-300 items-center "+btnClass}>
                            
                            <Image className="mb-2" source={category.image} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                        <Text className={" text-sm"+textClass}>{category.name}</Text>
                    </View>
                )
            })}
        </ScrollView>
      
    </View>
  )
}