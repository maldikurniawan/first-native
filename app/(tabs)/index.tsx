import { View, Image, StatusBar, useColorScheme } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router'; // Adjust if using React Navigation instead
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

export default function Index() {
  const navigation = useRouter(); // or useNavigation if using React Navigation
  const colorScheme = useColorScheme();

  const offset1 = useSharedValue(0);
  const offset2 = useSharedValue(0);

  // Define animated styles
  const animatedStyles1 = useAnimatedStyle(() => ({
    transform: [{ translateY: offset1.value }],
  }));

  const animatedStyles2 = useAnimatedStyle(() => ({
    transform: [{ translateY: offset2.value }],
  }));

  // Check token for navigation
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setTimeout(() => {
          if (token) {
            navigation.replace('/(tabs)/home/');
          } else {
            navigation.replace('/(tabs)/login/');
          }
        }, 3000);
      } catch (error) {
        console.error('Error fetching token', error);
      }
    };

    checkToken();
  }, [navigation]);

  // Run animations
  useEffect(() => {
    offset1.value = withTiming(500, { duration: 3000, easing: Easing.elastic(1) });
    offset2.value = withTiming(-500, { duration: 3000, easing: Easing.elastic(1) });
  }, [offset1, offset2]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={tw`h-full bg-white dark:bg-dark-base`}>
        <Animated.View
          style={[tw`absolute -top-[20px] -left-20 rounded-full`, animatedStyles1]}
        >
          <Image
            style={{ width: 250, height: 250 }}
            source={require('@/assets/images/ellipse.png')}
          />
        </Animated.View>
        <Animated.View
          style={[tw`absolute -bottom-[20px] -right-28 rounded-full`, animatedStyles2]}
        >
          <Image
            style={{ width: 250, height: 250 }}
            source={require('@/assets/images/ellipse.png')}
          />
        </Animated.View>
        {/* Content */}
        <View style={tw`min-h-full z-20`}>
          <View style={tw`flex flex-1 justify-center items-center`}>
            <Image
              style={{ width: '100%', height: 112 }}
              source={require('@/assets/images/warunqu.png')}
              resizeMode='contain'
            />
          </View>
        </View>
      </View>
    </>
  );
}
