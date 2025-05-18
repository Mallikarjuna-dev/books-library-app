import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBooks from './pages/MyBooks'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMyBooks } from './redux/actions/bookActions'
import NotFound from './pages/NotFount'

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchMyBooks());
    }
  }, [user, dispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mybooks' element={<MyBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
