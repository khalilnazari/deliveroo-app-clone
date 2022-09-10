import { configureStore } from '@reduxjs/toolkit'
import resturantSlice from './reducers/resturantSlice';
import basketSlice from './reducers/basketSlice'

const store = configureStore({
  reducer: {
    basket: basketSlice, 
    resturant: resturantSlice
  },
})

export default store;