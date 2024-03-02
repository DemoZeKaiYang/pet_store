import { useState } from 'react'
import './App.css'
import 'normalize.css'
import routes from './routes/index'
import { useRoutes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes)
  return <>{element}</>
}

export default App
