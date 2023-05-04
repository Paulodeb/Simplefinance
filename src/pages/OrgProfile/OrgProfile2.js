import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './OrgProfileStyles.css'

const OrgProfile2 = () => {
   const navigate = useNavigate();
  return (
    <div>
       <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
      <div className='row org-container'>
        <div className='col-md-6 col-12 order-2 order-md-1 add-org px-md-5'>
        <div className=' bg-light  py-5'>
          <h1 className='px-3 px-md-3 px-lg-5 px-sm-5'>Add Organisational Details</h1>
          <form>
            <div className='form-group px-3 px-md-3 px-lg-5 px-sm-5'>
            <label>Logo</label>
              <div className='border mb-2'>
              <input type="file" accept='image/*' className='file-input' />
              </div> 
              <label htmlFor='comSize'>Company Size</label>
              <input type='' className='form-control mb-2' id='comSize' placeholder='Select company size' />
              <label htmlFor='Type'>Type</label>
              <input type='' className='form-control mb-4' id='type' placeholder='Select organisation type' />
              <button 
              onClick={(e) => {
                e.preventDefault();
                navigate('/director-details');
              }}
              type='submit' className='btn btn-primary w-100'>Continue</button>
            </div>
          </form>
        </div>
        </div>
        <div className='col-md-6 col-12 order-1 order-md-2 px-3 px-sm-5 details-list'>
          <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
          <div className='d-flex mb-2'>
            <div className='bg-light circle text-white pt-1'>1</div>
            <div className='ms-2'>Organisational Profile</div>
          </div>
          <div className='d-flex'>
            <div className='bg-primary circle text-black pt-1'>2</div>
            <div className='ms-2'>Organisational Details</div>
          </div>
          <div className='d-flex'>
            <div className='bg-light circle text-dark pt-1'>3</div>
            <div className='ms-2'>Directors Identification Number</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrgProfile2