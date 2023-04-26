import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import VerifyAccount from '../pages/VerifyAccount/VerifyAccount'
import GetStarted from '../pages/GetStarted/GetStarted'
import OrgProfile1 from '../pages/OrgProfile/OrgProfile1'
import NewLogin from '../pages/Login/NewLogin'
import OrgProfile2 from '../pages/OrgProfile/OrgProfile2'
import OrgProfile3 from '../pages/OrgProfile/OrgProfile3'

const Index = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<NewLogin />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/VerifyAccount" element={<VerifyAccount />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path='/OrgProfile' element={<OrgProfile1/>} />
        <Route path='/add-org-details' element={<OrgProfile2/>} />
        <Route path='/director-details' element={<OrgProfile3/>} />


    </Routes>
  )
}

export default Index