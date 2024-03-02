import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import goodsSlice from './good'
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    goods: goodsSlice.reducer
  }
})
export default store
