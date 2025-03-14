import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './page/Home'
import {Productform} from './Components/Productform'
import {Singlecard} from './Components/Singlecard'
import Cart from './page/cart'
import CreateAddress from './Components/Address'
import SelectAddress from './page/Selectaddress'
import OrderConfirmation from './page/orderConfirmation'

function App() {

  return (
    <>
    <div>
      <Login/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/Productform" element={<Productform/>} />
      <Route path='/product/:id' element={<Singlecard/>}/>
      <Route path='/address' element={<CreateAddress/>}/>
      <Route path='/select-address' element={<SelectAddress/>}/>
      <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
   </Routes>
    </>
  )
}

export default App
