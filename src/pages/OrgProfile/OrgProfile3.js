import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './OrgProfileStyles.css';

const OrgProfile3 = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid'>
    <nav className="navbar login border navbar-expand-lg navbar-light fixed-top bg-white">
     <div className="container-fluid">
       <NavLink to="/" className="navbar-brand w-50">
         <img src={logo} alt="logo" className="img-fluid" />
       </NavLink>
     </div>
   </nav>
   <div className='row org-container'>
     <div className='col-md-6 col-12 order-2 order-md-1 org-profile px-md-5'>
     <div className=' bg-light py-3'>

       <h1 className='px-sm-5 px-md-3 px-lg-5 px-3'>Director(s) KYC</h1>
       <form>
         <div className='form-group px-3 px-md-3 px-lg-5 px-sm-5'>
           <label htmlFor='Director1'>Director 1</label>
           <input type='text' className='form-control mb-2' id='Director1' placeholder='Emmanuel Adebayo' />
           <label htmlFor='BVN'>BVN</label>
           <input type='BVN' className='form-control mb-2' id='BVN' placeholder='Enter BVN' />
           <label htmlFor='NIN'>NIN</label>
           <input type='text' className='form-control mb-2' id='Address' placeholder='Enter NIN' />
           <label htmlFor='Director2'>Director 2</label>
           <input type='text' className='form-control mb-2' id='Director2' placeholder='Emmanuel Adebayo' />
           <label htmlFor='BVN'>BVN</label>
           <input type='BVN' className='form-control mb-2' id='BVN' placeholder='Enter BVN' />
           <label htmlFor='NIN'>NIN</label>
           <input type='text' className='form-control' id='Address' placeholder='Enter NIN' />
           <button 
           onClick={(e) => {
             e.preventDefault();
             navigate('/add-org-details');
           }}
           type='submit' className='btn btn-primary w-100 mt-4'>Continue</button>
         </div>
       </form>
     </div>
     </div>
     <div className='col-md-6 col-12 order-1 order-md-2 px-3 px-sm-5 details-list'>
       <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
       <div className='d-flex mb-2'>
         <div className='bg-light circle text-dark pt-1'>1</div>
         <div className='ms-2'>Organisational Profile</div>
       </div>
       <div className='d-flex mb-2'>
         <div className='bg-light circle text-dark pt-1'>2</div>
         <div className='ms-2'>Organisational Details</div>
       </div>
       <div className='d-flex mb-2'>
         <div className='bg-primary circle text-white pt-1'>3</div>
         <div className='ms-2'>Directors Identification Number</div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default OrgProfile3