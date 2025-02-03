import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './page/Home'
import {Productform} from './Components/Productform'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Productform" element={<Productform/>} />
    </Routes>
    </>
  )
}

export default App
