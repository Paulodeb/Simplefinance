import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import VerifyAccount from '../pages/VerifyAccount/VerifyAccount'
import GetStarted from '../pages/GetStarted/GetStarted'

const Index = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CreateAccount />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/VerifyAccount" element={<VerifyAccount />} />
        <Route path="/GetStarted" element={<GetStarted />} />

    </Routes>
  )
}

export default Index