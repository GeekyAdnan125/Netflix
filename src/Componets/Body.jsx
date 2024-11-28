import React from 'react'
import Login from './login'
import Browse from './Browse'
import { Route, Router, Routes } from 'react-router-dom'

function Body() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={< Browse/>}/>
      </Routes>
    </div>
  )
}

export default Body