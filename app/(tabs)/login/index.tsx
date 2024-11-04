import React from 'react';
import { Image, KeyboardAvoidingView, StatusBar, Text, TextInput, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CLDarkMerahPrimary, CLLightMerahPrimary } from '@/utils/colors';
import tw from "twrnc";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <KeyboardAvoidingView style={tw`flex-1`}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={colorScheme === 'light' ? CLLightMerahPrimary : CLDarkMerahPrimary}
        />
        <View style={tw`w-full absolute`}>
          <View style={tw`absolute w-full h-full`}>
            <Image
              source={require('@/assets/images/bg-utama.png')}
              style={tw`w-full h-full justify-center absolute`}
            />
          </View>
          <View style={tw`w-full left-5 top-10`}>
            <Image
              source={require('@/assets/images/logo-warunqu.png')}
              style={tw`w-40`}
            />
          </View>
          <View style={tw`ml-5 top-20`}>
            <Text style={tw`text-black text-2xl font-bold tracking-widest`}>Selamat Datang Kembali,</Text>
            <Text style={tw`text-black text-md font-light tracking-widest pt-1`}>Masukan akun untuk bergabung</Text>
          </View>
        </View>
        <View style={tw`top-1/4`}>
          <View style={tw`mt-8 mx-5`}>
            <Text style={tw`font-semibold text-xl`}>Username</Text>
            <TextInput
              style={tw`border-2 border-gray-200 rounded-md pl-2 text-xl`}
              placeholder='Masukan Username'
              placeholderTextColor='#A9A9A9'
            />
            <Text style={tw`font-semibold text-xl mt-5`}>Password</Text>
            <TextInput
              style={tw`border-2 border-gray-200 rounded-md pl-2 text-xl`}
              placeholder='Masukan Password'
              placeholderTextColor='#A9A9A9'
              secureTextEntry
            />
            <TouchableOpacity
              style={tw`bg-red-500 p-2 rounded-xl justify-center items-center mt-6`}
            >
              <Text style={tw`text-white font-bold text-lg`}>Login</Text>
            </TouchableOpacity>

            <View style={tw`mt-5 flex-row items-center justify-center mb-10`}>
              <Text style={tw`text-gray-600 font-semibold`}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={tw`text-red-500 font-semibold`}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
