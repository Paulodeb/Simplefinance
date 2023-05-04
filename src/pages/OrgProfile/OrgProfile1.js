import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import './OrgProfileStyles.css'

const OrgProfile1 = () => {
  const navigate = useNavigate();

  return (
    <div className='container-fluid'>
       <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
      <div className='row org-container'>
        <div className='col-md-6 col-12 order-2 order-md-1 org-profile px-md-5'> 
          <div className=' bg-light py-5'>
          <h3 className='px-sm-5 px-md-3 px-lg-5 px-3'>Create Organisational Profile</h3>
          <p className='px-3 px-md-3 px-lg-5 px-sm-5'>Let us get your organisational details in order to set up your profile</p>
          <form>
            <div className='form-group px-3 px-md-3 px-lg-5 px-sm-5'>
              <label htmlFor='orgName'>Organisation Name</label>
              <input type='text' className='form-control mb-3' id='orgName' placeholder='Enter your organisation name' />
              <label htmlFor='Email'>Email Address</label>
              <input type='email' className='form-control mb-3' id='Email' placeholder='Enter your email address' />
              <label htmlFor='Address'>Address</label>
              <input type='text' className='form-control mb-3' id='Address' placeholder='Enter your address' />
              <label htmlFor='Phone'>Phone Number</label>
              <input type='number' className='form-control mb-3' id='Phone' placeholder='Enter your phone number' />
              <label htmlFor='RC'>RC Number</label>
              <input type='number' className='form-control' id='RC' placeholder='Enter your RC number' />
              <button 
              onClick={(e) => {
                e.preventDefault();
                navigate('/add-org-details');
              }}
              type='submit' className='btn btn-primary mt-3 w-100'>Continue</button>
            </div>
          </form>
          </div>
        </div>
        <div className='col-md-6 col-12 order-1 order-md-2 px-3 px-sm-5 details-list'>
          <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
          <div className='d-flex mb-2'>
            <div className='bg-primary circle text-white pt-1'>1</div>
            <div className='ms-2'>Organisational Profile</div>
          </div>
          <div className='d-flex mb-2'>
            <div className='bg-light text-dark circle pt-1'>2</div>
            <div className='ms-2'>Organisational Details</div>
          </div>
          <div className='d-flex'>
            <div className='bg-light text-dark circle pt-1'>3</div>
            <div className='ms-2'>Directors Identification Number</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrgProfile1