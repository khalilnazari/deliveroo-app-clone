import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsById } from '../redux/reducers/basketSlice';

const DishRow = (props) => {
    const [isPressed, setIsPressed] = useState(); 
    const { id, name, description, price, image } = props;
    
    const items = useSelector((state) => selectBasketItemsById(state, id));
    const dispatch = useDispatch(); 

    const removeDishFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}));
    }

    // addtoBasketItems
    const addDishToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

  return (
    <View>
      <TouchableOpacity
          className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}
          onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
              <Text className="text-lg mb-1">{name}</Text>
              <Text className="text-gray-400">{description}</Text>
              <Text className="text-gray-400 mt-2">
                <Currency quantity={price} currency="USD" />
              </Text>
          </View>

          <View>
              <Image
                style={{ borderWidth: 1, borderColor: "#f3f3f3" }}
                source={{ uri: urlFor(image).url() }}
                className="w-20 h-20 bg-gray-300 p-4"
              />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 flex-row items-center space-x-3 pb-2 mb-2">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              onPress={removeDishFromBasket}
            >
            <AntDesign
              name='minuscircleo'
              color="#00CCBB" 
              size={30}
            />
            </TouchableOpacity>
          </View>
          <Text className="text-xl">{items.length}</Text>
          <View>
            <TouchableOpacity onPress={addDishToBasket}>
              <AntDesign 
                name='pluscircleo' 
                color="#00CCBB" 
                size={30} 
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default DishRow