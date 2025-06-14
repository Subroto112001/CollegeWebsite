import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aplication from './CommonComponent/Aplication'

const App = () => {
  return (


    <BrowserRouter>
    
      <Routes>
        <Route path='/' element= {<Aplication/>}>

        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App