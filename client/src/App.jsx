import './App.css'
import SignupPage from './component/signupPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<SignupPage/>}/>
      </Routes>
      
      
      </BrowserRouter>
  )
}

export default App
