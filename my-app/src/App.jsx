import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
