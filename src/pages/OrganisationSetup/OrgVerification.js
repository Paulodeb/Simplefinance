import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const OrgVerification = () => {
    const navigate = useNavigate();

    return (
      <div className='container-fluid'>
         <nav className="navbar login navbar-expand-lg fixed-top navbar-light">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand w-50">
              <img src={logo} alt="logo" className="img-fluid" />
            </NavLink>
          </div>
        </nav>
        <div className='row reg org-container'>
          <div className='col-md-6 col-12 order-2 order-md-1 org-profile px-md-5'> 
            <div className=' bg-light py-5'>
            <h3 className='px-sm-5 px-md-3 px-lg-5 px-3 text-center'>Director(s) KYC Verification</h3>
            <p className='px-3 px-md-3 px-lg-5 px-sm-5 text-center'>Please provide the information below for the organisation Directors</p>
            <form>
              <div className='form-group px-3 px-md-3 px-lg-5 px-sm-5'>
    <div className="input-group mb-3 border">          
  <select className="form-control border-0" id="exampleSelect">
    <option>John Doe</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className='input-group-append'>
    <span className='input-group-text border-0  bg-white'><i><MdOutlineKeyboardArrowDown/></i></span>
  </div>
</div>
    <div className="input-group mb-3 border">          
  <select className="form-control border-0" id="exampleSelect">
    <option>John Doe</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className='input-group-append'>
    <span className='input-group-text border-0  bg-white'><i><MdOutlineKeyboardArrowDown/></i></span>
  </div>
</div>
    <div className="input-group mb-3 border">          
  <select className="form-control border-0" id="exampleSelect">
    <option>John Doe</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className='input-group-append'>
    <span className='input-group-text border-0  bg-white'><i><MdOutlineKeyboardArrowDown/></i></span>
  </div>
</div>
    <div className="input-group mb-3 border">          
  <select className="form-control border-0" id="exampleSelect">
    <option>John Doe</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className='input-group-append'>
    <span className='input-group-text border-0  bg-white'><i><MdOutlineKeyboardArrowDown/></i></span>
  </div>
</div>
               
                <button 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/add-org-details');
                }}
                type='submit' className='btn btn-primary mt-3 w-100'>Continue</button>
              </div>
            </form>
            </div>
          </div>
          <div className='col-md-6 col-12 order-1 order-md-2 px-3 px-sm-5 org-container details-list'>
          <div className='bg-white p-md-5 p-2 '>
            <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
            <div className='d-flex mb-2'>
              <div className='bg-light circle text-dark p-1'>1</div>
              <div className='ms-2'>Organisational Profile</div>
            </div>
            <div className='d-flex mb-2'>
              <div className='bg-light circle text-dark p-1'>2</div>
              <div className='ms-2'>Organisational Details</div>
            </div>
            <div className='d-flex'>
              <div className='bg-primary text-white circle p-1'>3</div>
              <div className='ms-2'>Director(s) KYC Verification</div>
            </div>
          </div>

          </div>
        </div>
      </div>
    )
  }
export default OrgVerification