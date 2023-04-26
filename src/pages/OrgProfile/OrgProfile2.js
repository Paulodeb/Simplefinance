import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const OrgProfile2 = () => {
   const navigate = useNavigate();
  return (
    <div>
       <nav className="navbar login border navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Add Organisational Details</h1>
          <form>
            <div className='form-group'>
              <div>
              <input type="file" accept='image/*' className='file-input' />
              </div> 
              <label htmlFor='comSize'>Company Size</label>
              <input type='' className='form-control' id='comSize' placeholder='Select company size' />
              <label htmlFor='Type'>Type</label>
              <input type='' className='form-control' id='type' placeholder='Select organisation type' />
              <button 
              onClick={(e) => {
                e.preventDefault();
                navigate('/director-details');
              }}
              type='submit' className='btn btn-primary'>Continue</button>
            </div>
          </form>
        </div>
        <div className='col-md-6'>
          <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
          <div className='d-flex'>
            <div className='bg-light rounded-circle text-white p-2'>1</div>
            <div className='ms-2'>Organisational Profile</div>
          </div>
          <div className='d-flex'>
            <div className='bg-primary rounded-circle text-white p-2'>2</div>
            <div className='ms-2'>Organisational Details</div>
          </div>
          <div className='d-flex'>
            <div className='bg-light rounded-circle text-dark p-2'>3</div>
            <div className='ms-2'>Directors Identification Number</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrgProfile2