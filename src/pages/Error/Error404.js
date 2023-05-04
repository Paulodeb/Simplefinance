import React from 'react';
import logo from '../../assets/logo.svg'
import error404 from '../../assets/Error404.svg'
import { NavLink } from 'react-router-dom';

const Error404 = () => {
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
                    <p className='text-primary'>THAT'S NOT RIGHT !</p>
                    <h2>
                        We apologize for the error, please refresh page and try again
                    </h2>
                </div>
                <div>
                    <img src={error404} alt="error404" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error404