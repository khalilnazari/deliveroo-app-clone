import { SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PrepareOrderScreen = () => {
    const navigation = useNavigation(); 

    useEffect(() => {
        // navigate to deliver screen 
        setTimeout(() => {
            navigation.navigate("DevliveryScreen")
        }, 4000);
    })

    // jsx
    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Animatable.Image 
                source={require("../assets/WaitForOrder.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-content"
            >
                Wating for Resturant to accept your order
            </Animatable.Text>

            <ActivityIndicator size="small" color="white" />
        </SafeAreaView>
    )
}

export default PrepareOrderScreen


// for this page install react-native-animatable 
// yarn add react-native-animatable --save 
// yarn add react-native-progress 