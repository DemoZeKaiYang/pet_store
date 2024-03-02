import Home from '@/pages/home'
import { Navigate } from 'react-router-dom'

export default [
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  }
]
