import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import './LoginStyles.css'

const NewLogin = () => {
  return (
    <>
    <div className='bg-light'
    // style={{paddingTop: '4rem'}}
    >
     <nav className="navbar login border navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
    <NavLink to='/' className='navbar-brand w-50'>
    <img src={logo} alt='logo' className='img-fluid' 
  
    />
    </NavLink>
    <div className='ml-auto'>

    <NavLink to='/CreateAccount' className='small  fs-sm-4 fs-md-3 btn btn-primary'>Create An Account</NavLink>
    </div>
    </div>
  </nav>
  <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
  <form className="pt-4 px-2 py-5  bg-white form-container">
  <h1 className='card-title text-center pt-4 pt-md-2 pt-lg-4 mb-md-2 mb-4 mb-lg-4 '>Log In</h1>
  <div className='form-group  w-100 '>
                      <div className='px-m-3 px-sm-3 px-lg-5 px-2 '>
                        <label className='mb-2 ms-1' >Email Address</label>
                        <input type='email' className='form-control mb-3' id='email' placeholder='Enter your email address'/>
                      </div>
                      <div className='px-2 px-sm-3 px-lg-5 px-m-3'>
                        <label className='mb-2 ms-1' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <NavLink  className='row justify-content-end  mb-2 px-3'>Forgot Password?</NavLink>
                        <button className='btn btn-primary w-100 mb-2'>Log In</button>
                        <p className='text-center'>Don't have an account? 
                        <NavLink className='ps-2'>Register here</NavLink></p>
                      </div>
                    </div>
  </form>
</div>

    </div>
    </>
  )
}

export default NewLogin