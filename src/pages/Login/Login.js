import React from 'react'
import logo from '../../assets/logo.svg'
import './LoginStyles.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
         <nav className='nav-container border-0'>
          <div className='d-flex pt-1 pt-sm-2 pt-lg-3 mx-1 mx-md-5 mx-lg-5 fixed-top justify-content-between align-items-center'>
            <div className=' my-0'>
                <img src={logo} alt='logo' className='w-75 w-md-100'/>
            </div>
            <div className=' my-1 '>
                <button className='btn btn-primary btn-lg btn-block btn-sm '>
                <NavLink to='/CreateAccount' className='small'>
                Create An Account
                </NavLink>
                </button>
            </div>
          </div>
        </nav>
        <div className='d-flex reg align-items-center justify-content-center'>
        <div className='card margin width border-0 px-2 px-md-5 mx-auto'>
            <div className='card-body'>
                <form className="pt-sm-4 px-2 py-3 py-sm-4  bg-white">
  <h1 className='card-title text-center pt-4 pt-md-2 pt-lg-4 mb-md-2 mb-4 mb-lg-4 '>Log In</h1>
  <div className='form-group  w-100 '>
                      <div className='px-m-3 px-sm-3 px-lg-5 px-2 '>
                        <label className='mb-2 ms-1' >Email Address</label>
                        <input type='email' className='form-control mb-3' id='email' placeholder='Enter your email address'/>
                      </div>
                      <div className='px-2 px-sm-3 px-lg-5 px-m-3'>
                        <label className='mb-2 ms-1' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <NavLink  className='row justify-content-end  mb-2 px-3'
                        onClick={(e) => {
                          e.preventDefault()
                          navigate('/forget-password')
                        }}
                        >Forgot Password?</NavLink>
                        <button className='btn btn-primary w-100 mb-2'>Log In</button>
                        <p className='text-center'>Don't have an account? 
                        <NavLink className='ps-2'>Register here</NavLink></p>
                      </div>
                    </div>
  </form>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Login