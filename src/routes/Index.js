import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateAccount from '../pages/CreateAccount/CreateAccount'

const Index = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/" element={<CreateAccount />} />

    </Routes>
  )
}

export default Index