import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';


const OrgProfile3 = () => {
    const navigate = useNavigate()
  return (
    <div>
    <nav className="navbar login border navbar-expand-lg navbar-light bg-white">
     <div className="container-fluid">
       <NavLink to="/" className="navbar-brand w-50">
         <img src={logo} alt="logo" className="img-fluid" />
       </NavLink>
     </div>
   </nav>
   <div className='row'>
     <div className='col-md-6'>
       <h1>Director(s) KYC</h1>
       <form>
         <div className='form-group'>
           <label htmlFor='Director1'>Director 1</label>
           <input type='text' className='form-control' id='Director1' placeholder='Emmanuel Adebayo' />
           <label htmlFor='BVN'>BVN</label>
           <input type='BVN' className='form-control' id='BVN' placeholder='Enter BVN' />
           <label htmlFor='NIN'>NIN</label>
           <input type='text' className='form-control' id='Address' placeholder='Enter NIN' />
           <label htmlFor='Director2'>Director 2</label>
           <input type='text' className='form-control' id='Director2' placeholder='Emmanuel Adebayo' />
           <label htmlFor='BVN'>BVN</label>
           <input type='BVN' className='form-control' id='BVN' placeholder='Enter BVN' />
           <label htmlFor='NIN'>NIN</label>
           <input type='text' className='form-control' id='Address' placeholder='Enter NIN' />
           <button 
           onClick={(e) => {
             e.preventDefault();
             navigate('/add-org-details');
           }}
           type='submit' className='btn btn-primary'>Continue</button>
         </div>
       </form>
     </div>
     <div className='col-md-6'>
       <h3>Let us get your organisational details in order to set up your profile in this quick and easy three steps</h3>
       <div className='d-flex'>
         <div className='bg-light rounded-circle text-dark p-2'>1</div>
         <div className='ms-2'>Organisational Profile</div>
       </div>
       <div className='d-flex'>
         <div className='bg-light rounded-circle text-dark p-2'>2</div>
         <div className='ms-2'>Organisational Details</div>
       </div>
       <div className='d-flex'>
         <div className='bg-primary rounded-circle text-white p-2'>3</div>
         <div className='ms-2'>Directors Identification Number</div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default OrgProfile3