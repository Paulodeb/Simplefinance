import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { BiPencil } from 'react-icons/bi'
import './StaffPasswordResetStyles.css'


const CompleteProfile = () => {
  return (
    <div className='container-fluid'>
     <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>

        <div className="row mx-auto comp">
        <div className="card px-5 py-5">
            <div className="card-body px-5 py-5">
                <h4 className="card-title text-center">Complete User Profile</h4>
                <p className='card-text'>Profile Picture</p>
                <div className='d-flex align-items-center'>
                    <div className='bg-light rounded-circle p-3 '>
                        <h2>EA</h2>
                    </div>
                    <div className='ms-3'>
                        <p className='card-text'>Upload Profile Photo</p>
                    </div>
                    <div className='ms-2'>
                        <BiPencil className='text-primary' color='' />
                    </div>
                </div>
                <div className='mt-4'>
                    <label htmlFor="name" className="form-label">Display Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                    <button className='btn btn-primary mt-4 w-100'>Continue</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CompleteProfile