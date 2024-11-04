import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import HeaderImage from '@/components/HeaderImage';
import MenuButton from '@/components/MenuButton';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

type DummyData = {
  label: string;
  value: string;
};

type MenuItem = {
  name: string;
  icon: JSX.Element;
  onPress: () => void;
};

const Home = () => {
  const colorScheme = useColorScheme();
  const navigation = useRouter();

  const dummyData: DummyData[] = [
    { label: 'Pilih Toko Anda', value: '' },
    { label: 'Toko ABC', value: '1' },
    { label: 'Toko DEF', value: '2' },
    { label: 'Toko GHI', value: '3' },
  ];

  const menu: MenuItem[] = [
    {
      name: 'Kasir',
      icon: <FontAwesome5 name="cash-register" size={35} color="white" />,
      onPress: () => navigation.push('/(tabs)/home'),
    },
    {
      name: 'Pesanan Online',
      icon: <FontAwesome5 name="store" size={35} color="white" />,
      onPress: () => navigation.push('/(tabs)/home'),
    },
  ];

  const onPressLihatSemua = () => {
    navigation.push('/(tabs)/home');
  };

  return (
    <ScrollView style={tw`${colorScheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={colorScheme === 'dark' ? '#B22222' : '#FF4500'}
      />
      <View>
        <HeaderImage />
        <View style={tw`flex-1 px-5 mt-48`}>
          <View style={tw`border ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'} rounded-lg overflow-hidden`}>
            <Picker>
              {dummyData.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
          <View style={tw`flex pt-5 ${colorScheme === 'dark' ? 'bg-black text-gray-400' : 'bg-white text-gray-700'}`}>
            <View style={tw`flex flex-row flex-wrap`}>
              {menu.map((item, index) => (
                <MenuButton key={index} name={item.name} icon={item.icon} onPress={item.onPress} />
              ))}
            </View>
          </View>
          <View style={tw`flex-1 pb-15`}>
            <View style={tw`flex flex-row justify-between py-5`}>
              <Text style={tw`${colorScheme === 'dark' ? 'text-white' : 'text-black'} font-bold text-base`}>Transaksi Terakhir</Text>
              <TouchableOpacity onPress={onPressLihatSemua}>
                <Text style={tw`${colorScheme === 'dark' ? 'text-red-700' : 'text-black'} font-bold text-base underline`}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            {[...Array(5)].map((_, i) => (
              <View key={i} style={tw`flex flex-col`}>
                <View style={tw`flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-col`}>
                    <Text style={tw`${colorScheme === 'dark' ? 'text-white' : 'text-black'} font-bold text-base`}>Invoice 1234</Text>
                    <Text style={tw`${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-sm`}>20 Oktober 2023</Text>
                  </View>
                  <Text style={tw`${colorScheme === 'dark' ? 'text-green-400' : 'text-green-700'} font-bold text-base`}>Rp. 380.000</Text>
                </View>
                <View style={tw`border-t ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'} my-3`} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
