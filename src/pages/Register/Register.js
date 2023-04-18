import React from 'react'
import './RegisterStyles.css'
import logo from '../../assets/logo.svg'


const Register = () => {
  return (
    <div className='container-fluid reg'>
        <nav className='container py-3 mb-5 d-flex justify-content-between align-items-center'>
            <div className='bg-cover w-25'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='button w-25'>
                <button className='btn btn-primary ms-4 w-75'>Log in</button>
            </div>
        </nav>
        <div className='card w-50 border-0 px-5 mx-auto'>
            <div className='card-body mt-4'>
                <h1 className='card-title text-center mb-5'>Create An Account</h1>
                <form>
                    <div className='form-group px-5'>
                        <label className='mb-2' htmlFor='name'>Email Address</label>
                        <input type='email' className='form-control mb-4' id='email' placeholder='Enter your email address'/>  
                        <button className='btn btn-primary w-100 mb-3'>Continue</button>
                        <p className='text-center'>Already have an account? Log in</p>                      
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Register