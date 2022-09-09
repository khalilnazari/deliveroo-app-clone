import { configureStore } from '@reduxjs/toolkit'
import resturantSlice from './reducers/resturantSlice';

const store = configureStore({
  reducer: {
    basket: basketSlice, 
    resturant: resturantSlice
  },
})

export default store;