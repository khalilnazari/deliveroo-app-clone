import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import { useNavigation } from '@react-navigation/native';


const ResturantCards = (props) => {
    const navigation = useNavigation();
    const {id, imgUrl, title, rating, genre, address, description, dishes, long, lat} = props; 
    
    return (
        <TouchableOpacity 
        
            onPress={() => navigation.navigate('Resturant', {id, imgUrl, title, rating, genre, address, description, dishes, long, lat})}
            className='bg-white mr-3 pb-3 rounded-sm shadow'>
            <Image 
                source={{uri: imgUrl}}
                className='h-36 w-64 rounded-sm'
            />
            
            <View className='px-3 bg-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                
                {/* Rating & Genre */}
                <View className='flex-row items-center space-x-1'>
                    <FontAwesome5 name={'star'} solid color="green" style={{fontSize:12}}/>
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> . {genre}
                    </Text>
                </View>

                {/* location */}
                <View className='flex-row items-center space-x-1'>
                    <EvilIcons name='location' color='gray' style={{fontSize:18}}/>
                    <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResturantCards