import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Result from '../pages/Result'

const TheLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/result' element={<Landing />}></Route>
        <Route path='/' element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default TheLayout
