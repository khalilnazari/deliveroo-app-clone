import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    // horizonal scollar 
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15, 
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
      <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg" title="Burger" />
    </ScrollView>
  )
}

export default Categories