import React from 'react';
import logo from '../../assets/logo.svg'
import errorpage from '../../assets/ErrorPage.svg';
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
    <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>
        <div className='container-fluid'>
            <div className='d-flex align-items-center justify-content-center org-container'>
                <div className='ms-5'>
                    <p>THAT'S NOT RIGHT !</p>
                    <h2 className='text-primary'>
                        We apologize for the error, please refresh page and try again
                    </h2>
                </div>
                <div>
                    <img src={errorpage} alt="error404" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage