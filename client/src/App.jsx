import './App.css'
import SignupPage from './component/signupPage'
import LoginPage from './component/loginpage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      
      </BrowserRouter>
  )
}

export default App
