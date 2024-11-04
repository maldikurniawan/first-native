import { View, Text, useColorScheme } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router'; // Adjust if using React Navigation instead
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

export default function Index() {
  const navigation = useRouter(); // or useNavigation if using React Navigation
  const colorScheme = useColorScheme();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // If token exists, navigate to /home
          navigation.replace('/(tabs)/home/');
        } else {
          // If token does not exist, navigate to /login
          navigation.replace('/(tabs)/login/');
        }
      } catch (error) {
        console.error('Error fetching token', error);
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <View style={tw`${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex-1 justify-center items-center`}>
      <Text style={tw`${colorScheme === 'dark' ? 'text-white' : 'text-black'} text-lg`}>
        Ini Index
      </Text>
    </View>
  );
}
