import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"

export default function Explore() {
  return (
    <View style={tw`flex-1 justify-center`}>
      <Text style={tw`text-center font-bold text-4xl text-red-500`}>Explore</Text>
    </View>
  )
}