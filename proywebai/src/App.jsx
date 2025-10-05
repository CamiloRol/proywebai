import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Graphics from './pages/Graphics'
import Profile from './pages/Profile'
import Notfound from './pages/Notfound'
import ProtectedRoute from './components/Protectedroutes.jsx'
import Navbar from './header/Navbar.jsx'
import Footer from './footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute allowedRoles={[1, 3]} />}>
          <Route path="/graphics" element={<Graphics />} />
        </Route>
         <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
