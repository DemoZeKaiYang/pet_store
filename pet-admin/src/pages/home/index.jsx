import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '@/stores/user'
//setAge返回{ type: 'user-slice/setAge', payload: user.age + 1 }这样的对象，可以替换下面

const { setAge } = userSlice.actions
export default function Index() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
      <div>home{user.age}</div>
      <button onClick={() => dispatch(setAge(user.age + 1))}>加</button>
    </>
  )
}
