import {Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();  

    // when UI is loaded 
    useLayoutEffect(() => {
      // Hide screen header 
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    // jsx
    return (
        <SafeAreaView className="bg-white pt-5 mb-3 flex-1">
            {/* header */}
            <View className='flex-row items-center pb-3 mx-4 space-x-2'>
                <Image 
                    className='h-7 w-7 rounded-full bg-gray-300 p-4'
                    source={{uri: 'https://play-lh.googleusercontent.com/dLFmx6C2c0VaoNyO0zH6Fw_y81_PDvQOXHyCpIYwtV52dN6_JG2EkprL_Ih-Xak879P7'}}
                /> 

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver now!</Text>
                    <Text className='text-xl font-bold'>Current Location 8</Text>
                </View>

                <AntDesign name='user' color='#00CDBC' size={25}/>
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                    <AntDesign name='search1' color='#707070' size={20}/>
                    <TextInput placeholder='Resturants and cusins' keyboardType='default' className="flex-1" />
                </View>
                <Ionicons name='filter' color='#00CDBC' size={25}/>
            </View>

            {/* body : scrollable */}
            <ScrollView 
                showsVerticalScrollIndicator={false}
                className='bg-gray-100'
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows*/}
                <FeaturedRow  id={1} title="Resturant Aaaa" description="Resturant Aaaa Description"/>
                <FeaturedRow  id={2} title="Resturant Baaa" description="Resturant Bbbb Description"/>
                <FeaturedRow  id={3} title="Resturant Cccc" description="Resturant Ccccc Description"/>
                <FeaturedRow  id={4} title="Resturant Dddd" description="Resturant Dddddd Description"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
