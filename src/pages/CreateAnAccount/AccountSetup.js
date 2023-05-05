import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import './AccountSetupStyles.css'


const AccountSetup = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
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
  <div className='d-flex reg align-items-center justify-content-center'>
  <div className='card container width margin py-2 border-0 px-2 px-md-5 mx-auto'>
      <div className='card-body mt-1'>
          <h3 className='card-title text-center mb-3'>Complete Your Account Setup</h3>
            <p>Hey Emmanuel! You are almost there. Please fill the details below.</p>
          <form>
              <div className='form-group'>
                  <label className='mb-2' htmlFor='phone'>Phone Number</label>
                  <input type='phone' className='form-control mb-4' id='phone' placeholder='Enter your phone number'/>  
                  <label className='mb-2' htmlFor='pwd'>Password</label>
                  <input type='password' className='form-control mb-4' id='password' placeholder='Enter your password'/>  
                    <label className='mb-2' htmlFor='pwd'>Profile Photo</label>
                    <div className='border mb-2'>
              <input type="file" accept='image/*' className='file-input' />
              </div> 
                    <input type='checkbox' className='form-check-input mb-4' id='checkbox' />
                    <label className='form-check-label mb-4' htmlFor='checkbox'>I've read and agreed to the 
                    <NavLink>Terms of Service</NavLink>
                    </label>
                  <button className='btn btn-primary w-100 mb-3' onClick={(e) =>{ 
                      e.preventDefault();
                      navigate('/GetStarted')
                      }}
                      >Create An Account</button>
                                    
              </div>
          </form>
      </div>

  </div>
  </div>
</div>
  )
}

export default AccountSetup