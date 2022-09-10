import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import {selectResturant} from '../redux/reducers/resturantSlice'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps'; 

const DevliveryScreen = () => {
  const navigation = useNavigation(); 
  const resturant = useSelector(selectResturant); 

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        {/* close and help */}
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <AntDesign name='close' color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        {/* delivery info */}
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between items-center space-x-2'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image 
              source={require("../assets/delivery-bike.png")}
              className='h-12 w-12'
            />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} className='mt-2'/>

          <Text className='mt-3 text-gray-500 text-xs'>
              Your order at {resturant.title} is bering prepared
          </Text>
        </View>
      </SafeAreaView>

      {/* Map */}
      <MapView
        initialRegion={{
          latitude:resturant.lat,
          longitude:resturant.long,
          latitudeDelta: 0.005, 
          longitudeDelta: 0.005,
        }}  
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker 
          coordinate={{
              latitude:resturant.lat,
              longitude:resturant.long,
          }}
          title={resturant.title}
          description={resturant.description}
          identifier="origin"
          pinColor='#00CCBB'
        />
      </MapView>
        <View className='bg-white flex-row items-center space-x-5 py-4 shadow-md'>
          <Image 
            source={{
                uri: 'https://www.zehnservices.com/wp-content/uploads/2020/02/driver-kolkata.jpg'
            }}
            className='h-12 w-12 bg-gray-300 rounded-full ml-5 border border-gray-300'
          />
          <View className='flex-1'>
            <Text className='text-lg'>Khalil 123</Text>
            <Text className='text-gray-400'>You Ride</Text>
          </View>
          <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
        </View>
    </View>
  )
}

export default DevliveryScreen; 


// Need to install react-native map 
// https://docs.expo.dev/versions/latest/sdk/map-view/
