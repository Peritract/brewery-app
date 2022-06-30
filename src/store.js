import { configureStore } from '@reduxjs/toolkit'
import breweryReducer from './reducers/breweryReducer';

const store = configureStore({
  reducer: {
    breweries: breweryReducer
  },
})

export default store;