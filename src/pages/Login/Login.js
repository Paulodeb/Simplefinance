import React from 'react'
import logo from '../../assets/logo.svg'
import './LoginStyles.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-100 login'>
        <nav className='w-100 bg-white align-items-center h-20'>
          <div className='d-flex mx-sm-1 mx-md-5 mx-lg-5 justify-content-between'>
            <div className='logo my-3'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='button my-3'>
                <button className='btn btn-primary '>
                <NavLink to='/create-account' className='fs-5'>
                Create An Account
                </NavLink>
                </button>
            </div>
          </div>
        </nav>
        <div className='card mt-5 w-50  w-md-25 w-lg-10 border-0  mx-auto'>
            <div className='card-body mt-4'>
                <h1 className='card-title text-center mb-5'>Log In</h1>
                <form >
                    <div className='form-group px-5'>
                        <label className='mb-2' htmlFor='name'>Email Address</label>
                        <input type='email' className='form-control mb-4' id='email' placeholder='Enter your email address'/>
                        <label className='mb-2' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <p className='text-end'>Forgot Password?</p>
                        <button className='btn btn-primary w-100 mb-3'>Log In</button>
                        <p className='text-center'>Don't have an account? Register here</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login