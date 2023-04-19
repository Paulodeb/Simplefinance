import React from 'react'
import logo from '../../assets/logo.svg'
import './LoginStyles.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
        <nav className='nav-container'>
          <div className='d-flex pt-lg-2 mx-1 mx-md-5 mx-lg-5 justify-content-between align-items-center'>
            <div className=' my-0'>
                <img src={logo} alt='logo' className='w-75 w-md-100'/>
            </div>
            <div className='d-flex  my-1 '>
                <button className='btn btn-primary btn-lg btn-block btn-sm '>
                <NavLink to='/create-account' className='small'>
                Create An Account
                </NavLink>
                </button>
            </div>
          </div>
        </nav>
    <div className='card-container'>
        <div className='inner-container'>
            <div className='card-body mt-4'>
                <h1 className='card-title text-center mb-5'>Log In</h1>
                <form >
                    <div className='form-group px-md-5 px-2'>
                        <label className='mb-2' htmlFor='name'>Email Address</label>
                        <input type='email' className='form-control mb-4' id='email' placeholder='Enter your email address'/>
                        <label className='mb-2' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <NavLink  className='text-end'>Forgot Password?</NavLink>
                        <button className='btn btn-primary w-100 mb-3'>Log In</button>
                        <p className='text-center'>Don't have an account? Register here</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login