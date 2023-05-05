import React from 'react'
import './RegisterStyles.css'
import logo from '../../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
  return (
    <div className=''>
          <nav className='nav-container'>
          <div className='d-flex pt-1 pt-sm-2 pt-lg-3 mx-1 mx-md-5 mx-lg-5 fixed-top justify-content-between align-items-center'>
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
        <div className='card width border-0 px-2 px-md-5 mx-auto'>
            <div className='card-body mt-4'>
                <h1 className='card-title text-center mb-5'>Create An Account</h1>
                <form>
                    <div className='form-group'>
                        <label className='mb-2' htmlFor='name'>Email Address</label>
                        <input type='email' className='form-control mb-4' id='email' placeholder='Enter your email address'/>  
                        <button className='btn btn-primary w-100 mb-3' onClick={(e) =>{ 
                            e.preventDefault();
                            navigate('/VerifyAccount')
                            }}
                            >Continue</button>
                        <p className='text-center'>Already have an account? Log in</p>                      
                    </div>
                </form>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Register