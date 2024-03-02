import { createSlice } from '@reduxjs/toolkit'
const goodsSlice = createSlice({
  name: 'goods-slice',
  // 初始数据
  initialState: {
    name: '苹果',
    price: 100
  },
  //操作数据方法
  reducers: {
    //state原来的数据,action是一个对象，有type和payload，type是类型，payload是新值
    setName(state, action) {
      state.name = action.payload
    },
    setGender(state, action) {
      state.gender = actions.payload
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})
export default goodsSlice
