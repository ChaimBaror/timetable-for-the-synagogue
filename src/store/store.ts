import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'

export default configureStore({
  reducer: {
    location: usersReducer,
  }
})