import React from 'react'
import logo from '../../assets/logo.svg'
import invite from '../../assets/Invite.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import './StaffPasswordResetStyles.css'


const Invite = () => {
    const navigate = useNavigate();
  return (
    <div>
   <nav className='nav-container border-0'>
    <div className='d-flex pt-1 pt-sm-2 fixed-top pt-lg-3 mx-1 mx-md-5 mx-lg-5 justify-content-between align-items-center'>
      <div className=' my-0'>
          <img src={logo} alt='logo' className='w-75 w-md-100'/>
      </div>
      <div className=' my-1 '>
          <button className='btn btn-primary btn-lg btn-block btn-sm '>
          <NavLink to='/CreateAccount' className='small'>
          Login
          </NavLink>
          </button>
      </div>
    </div>
  </nav>
    <div className='d-flex align-items-center justify-content-center'>
    <div className=' container width margin py-2 border-0 px-2 px-md-5 mx-auto'>
        <div className='card-body mt-1'>
            <h3 className='card-title text-center mb-3'>You have been invited to join A & B Plc</h3>
            <p className='text-center'> Accept the invite to join the organization in Simple Finance</p>
            <div className='d-flex px-sm-5 px-2  justify-content-center'>
            <button className='btn btn-primary px-3 px-sm-5 mb-3 me-3'
            onClick={(e) => {
                e.preventDefault();
                navigate('/invite-verify');
            }}
            >Accept</button>
            <button className=' btn-outline-primary px-3 px-sm-5 mb-3 ms-3'>Decline</button>
            </div>
        </div>
        <div className='container h-50 w-75'>
            <img src={invite} alt='invite' className='img-fluid'/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Invite