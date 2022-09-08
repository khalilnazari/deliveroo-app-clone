import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ResturantCards from './ResturantCards'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const FeaturedRow = ({title, description, id}) => {
  const dishes = [
    {
      id: 1, 
      img: 'https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg', 
      name: 'Dish name', 
      description: 'A short description about the dish'
    }, 
    {
      id: 2, 
      img: 'https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg', 
      name: 'Dish name', 
      description: 'A short description about the dish'
    }, 
    {
      id: 3, 
      img: 'https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg', 
      name: 'Dish name', 
      description: 'A short description about the dish'
    }, 
    {
      id: 4, 
      img: 'https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg', 
      name: 'Dish name', 
      description: 'A short description about the dish'
    }
  ]

  const resturants = [
    {
      id: 1 ,
      imgUrl: "https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg",
      title: "Resturand Name",
      rating: 4.3,
      genre: "Fast Food",
      address: "Main St. 123" ,
      description: "We have tasty burgars here...",
      dishes: {dishes} ,
      long: 223 ,
      lat: 223
    }, 

    {
      id: 2 ,
      imgUrl: "https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg",
      title: "Resturand Name",
      rating: 4.3,
      genre: "Fast Food",
      address: "Main St. 123" ,
      description: "We have tasty burgars here...",
      dishes: {dishes} ,
      long: 223 ,
      lat: 223
    }, 

    {
      id: 3 ,
      imgUrl: "https://www.thestreet.com/.image/t_share/MTg3MTA5MDExOTU3NDkxMDQ0/big-king.jpg",
      title: "Resturand Name",
      rating: 4.3,
      genre: "Fast Food",
      address: "Main St. 123" ,
      description: "We have tasty burgars here...",
      dishes: {dishes} ,
      long: 223 ,
      lat: 223
    }
  ]
 
  return (
    <View>
        <View className='flex-row items-ceneter justify-between px-4 mt-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <MaterialIcons name="arrow-right-alt" color="#00C2C2" size={25}/>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        {/* Horizonal scrollview */}
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >

            {/* ResturantCards */}
            {resturants.map(resturant => (
              <ResturantCards
                id={resturant.id}
                imgUrl={resturant.imgUrl}
                title={resturant.title}
                rating={resturant.rating}
                genre={resturant.genre}
                address={resturant.address} 
                description={resturant.description}
                dishes={dishes} 
                long={resturant.long} 
                lat={resturant.lat}
              />
            ))}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow