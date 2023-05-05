import React from 'react'
import logo from '../../assets/logo.svg'
import passImg from '../../assets/passwordReset.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import './StaffPasswordResetStyles.css'


const ForgetPassword = () => {
    const navigate = useNavigate();
  return (
    <div className='container-fluid'>
         <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
      <div className="row pass">
        <div className="col-md-6">
          <div className=" py-5">
            <h4 className="px-sm-5 px-md-3 px-lg-5 px-3">Forget Password</h4>
            <p className='px-sm-5 px-md-3 px-lg-5 px-3'>Please enter your registered email address and a password reset link will be sent to you.</p>
            <form>
              <div className="form-group px-3 px-md-3 px-lg-5 px-sm-5">
                <input type="password" className="form-control mb-2" id="Password" placeholder="Enter email address" />
                <div className="">

              <button
                className="btn btn-primary w-100 mt-3"
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/reset-password");
                }}
                >
               Continue
              </button>
                    </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 bg-light d-none d-md-block h-100">
        <div className='img-container'>
          <img src={passImg} alt="passImg" className="img-fluid" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword