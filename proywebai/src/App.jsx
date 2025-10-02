import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Graphics from './pages/Graphics'
import Profile from './pages/Profile'
import Notfound from './pages/Notfound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/graphics' element={<Graphics />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
