import React from 'react'
import logo from '../../assets/logo.svg'
import reload from '../../assets/Reload.svg'
import image1 from '../../assets/Enter otp 1.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import './VerifyAccountStyles.css';


const VerifyAccount = () => {
    const navigate = useNavigate()
  return (
    <div className=''>
         <nav className="navbar create border mb-3 navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
        <div className='row container-fluid verify justify-content-center'>
            <div className=' d-flex justify-content-center align-items-center col-md-5 col-sm-8 col-10 px-xl-5 px-2'>
                <div className='card-body  px-xl-3'>
                    <h3 className='card-title mb-3'>Verify Your Email Address</h3>
                    <p className=''>You are almost there. Please enter verification code sent to your registered email address</p>
                    <form className=''>
                        <div className='form-group px-xl-3'>
                            <input className='form-control' id='email' placeholder='Enter your verification code'/>
                            <div className='d-flex justify-content-center align-items-center'>
                            <img src={reload} alt='reload' className='image-fluid'/>
                            <p className='mt-3 ms-2 me-2'>Didn't get the code? <NavLink>Click here to resend</NavLink></p>
                            </div>
                            <button className='btn btn-primary w-100 mt-3'
                            onClick={(e) =>{
                                e.preventDefault();
                                navigate('/GetStarted')
                            }}
                            >Continue</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=' col-md-6 px-md-5 px-1'>
                <div className='card-body  mt-5'>
                    <img src={image1} alt='image1' className='d-none otp-image d-md-block'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyAccount