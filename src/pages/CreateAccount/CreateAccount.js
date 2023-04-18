import React from 'react'
import logo from '../../assets/logo.svg'
import './CreateAccountStyles.css'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
    const navigate = useNavigate()
  return (
    <div className='w-100 create'>
     <nav className='w-100 bg-white'>
          <div className=' container d-flex justify-content-between border'>

            <div className='logo  '>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='button'>
                <button className='btn btn-primary '>Login</button>
            </div>
          </div>
        </nav>
        <div className='card mt-5 w-50 border-0 px-5 mx-auto'>
            <div className='card-body mt-4'>
                <h3 className='card-title text-center mb-5'>Craete An Account For Your Business</h3>
                <form >
                    <div className='form-group px-5'>
                        <label className='mb-2' htmlFor='name'>Email Address</label>
                        <input type='email' className='form-control mb-4' id='email' placeholder='Enter your email address'/>
                        <label className='mb-2' htmlFor='name'>Phone Number</label>
                        <input type='number' className='form-control mb-4' id='phone' placeholder='Enter your phone number'/>
                        <label className='mb-2' htmlFor='name'>Password</label>
                        <input type='password' className='form-control mb-1' id='password' placeholder='Enter your password'/>
                        <label className='mb-2' htmlFor='name'>NIN</label>
                        <input type='number' className='form-control mb-1' id='nin' placeholder='Enter your NIN'/>
                        <label className='mb-2' htmlFor='name'>BVN</label>
                        <input type='number' className='form-control mb-1' id='bvn' placeholder='Enter your BVN'/>
                        <input className='form-check-input me-1 mb-3 border' type='checkbox' value='' id='flexCheckDefault'/>
                        <label className='form-check-label' for='flexCheckDefault'>
                            I've read and agreed to the Terms of Service
                        </label>
                        <button className='btn btn-primary w-100 mb-3'
                        onClick={(e) =>{
                            e.preventDefault();
                            navigate('/VerifyAccount')
                        }}
                        >Create An Account</button>
                        <p className='text-center'>Already have an account? Log in</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount