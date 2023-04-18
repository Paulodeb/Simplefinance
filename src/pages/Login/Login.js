import React from 'react'
import logo from '../../assets/logo.svg'
import './LoginStyles.css'

const Login = () => {
  return (
    <div className='w-100 login'>
        <nav className='w-100 bg-white'>
          <div className=' container d-flex justify-content-between border'>

            <div className='logo  '>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='button'>
                <button className='btn btn-primary '>Create An Account</button>
            </div>
          </div>
        </nav>
        <div className='card mt-5 w-50 border-0 px-5 mx-auto'>
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