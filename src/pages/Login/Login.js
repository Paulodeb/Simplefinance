import React from 'react'
import logo from '../../assets/logo.svg'
import './LoginStyles.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
        <nav className='nav-container'>
          <div className='d-flex pt-1 pt-sm-2 pt-lg-3 mx-1 mx-md-5 mx-lg-5 justify-content-between align-items-center'>
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
    <div className='card-container'>
        <div className='inner-container px-2  pt-4  px-sm-3' >
            <div className='card-body pt-3'>
                <h1 className='card-title text-center mb-4 '>Log In</h1>
                <form className='form-container w-100 px-2 px-sm-3 px-md-5 ' >
                    <div className='form-group w-100 px-2 px-sm-3 px-md-5'>
                      <div className='px-0 px-sm-3 px-md-5'>
                        <label className='mb-2 ms-1' >Email Address</label>
                        <input type='email' className='form-control mb-3' id='email' placeholder='Enter your email address'/>
                      </div>
                      <div className='px-0 px-sm-3 px-md-5'>
                        <label className='mb-2 ms-1' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <NavLink  className='text-end mb-3'>Forgot Password?</NavLink>
                        <button className='btn btn-primary w-100 mt-3 mb-2'>Log In</button>
                      </div>
                        <p className='text-center'>Don't have an account? 
                        <NavLink>Register here</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login