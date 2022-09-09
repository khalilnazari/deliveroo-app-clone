import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

// icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import EvilIcons from 'react-native-vector-icons/EvilIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'


const ResturantScreen = () => {
    const navigation = useNavigation(); 

    // data passed vie natigation
    const {params: {id, imgUrl, title, rating, genre, address, description, dishes, long, lat}} = useRoute(); 

    // hide screen header; 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    // jsx
    return (
        <>
        <BasketIcon />
        <ScrollView>
            <View className='relative'>
                <Image source={{uri: urlFor(imgUrl).url()}} className='w-full h-64'/>
                <TouchableOpacity className='absolute top-10 left-5' onPress={() => navigation.goBack()}>
                    <FontAwesome5 
                        name='arrow-left' 
                        size={22} 
                        color='#00CCBB' 
                        style={{backgroundColor:'#f1f1f1', borderRadius:'50%', padding:5}} 
                    />
                </TouchableOpacity>
            </View>

            {/* Resturant details */}
            <View className="bg-white">
                <View className="px-4 pt-4">
                    {/* title */}
                    <Text className="text-3xl font-bold">{title}</Text>

                    {/* Rating & Genre & Location*/}
                    <View className="flex-row space-x-2 my-1">
                        {/* Rating and Genre */}
                        <View className="flex-row items-center space-x-1">
                            <FontAwesome5 name={'star'} solid color="green" style={{fontSize:12}}/>
                            <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <EvilIcons name='location' color='gray' style={{fontSize:18}}/>
                            <Text className="text-xs text-gray-500">Nearby {address}</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <Text className='py-3 text-base'>{description}</Text>
                </View>

                {/* Food alergy info */}
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <AntDesign name='infocirlceo' color="gray" opacity={0.6} size={20} />
                    <Text className="pl-1 flex-1 text-md fond-bold">Have a food alergy?</Text>
                    <MaterialIcons name="arrow-right-alt" size={25} color="#00CCBB" />
                </TouchableOpacity>

                {/* Menu & Dish Rows */}
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                    {/* Dish Rows */}
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
        </>
    )
}

export default ResturantScreen; 