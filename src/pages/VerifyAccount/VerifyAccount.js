import React from 'react'
import logo from '../../assets/logo.svg'
import image1 from '../../assets/Enter otp 1.svg'
import { useNavigate } from 'react-router-dom'

const VerifyAccount = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid'>
         <nav className='container-fluid border py-3 mb-5 d-flex justify-content-between align-items-center'>
            <div className='bg-cover w-25'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
        </nav>
        <div className='container d-flex'>
            <div className='card w-50 border-0 px-5'>
                <div className='card-body mt-4'>
                    <h3 className='card-title mb-3'>Verify Your Email Address</h3>
                    <p className=''>You are almost there. Please enter verification code sent to your registered email address</p>
                    <form className=''>
                        <div className='form-group'>
                            <input className='form-control mb-4' id='email' placeholder='Enter your verification code'/>
                            <p className='text-center'>Didn't get the code? <a href='#'>Click here to esend</a></p>
                            <button className='btn btn-primary w-100 mb-3'
                            onClick={(e) =>{
                                e.preventDefault();
                                navigate('/GetStarted')
                            }}
                            >Continue</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='card w-50 border-0 px-5'>
                <div className='card-body mt-4'>
                    <img src={image1} alt='image1' className='image1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyAccount