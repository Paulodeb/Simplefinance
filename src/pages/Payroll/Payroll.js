import React from 'react'
import { BsBell } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdMoreVert } from 'react-icons/md'
import Sidebar from '../../components/Sidebar'

const Payroll = () => {
  return (
    <div className='row w-100'>
    <div className='col-3'>
    <Sidebar/>
    </div>
      <div className='col-9'>
        <div className='d-flex container justify-content-end'>
          <div className='d-flex'>
            <div className="d-flex mt-3 justify-content-center">
               <BsBell size={25}/>
             </div>
             <img
                   src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                   alt="profile"
                   className="img-fluid mt-2 me-1 cover"
                 />
                  <div className="w-100  mt-2 d-flex flex-column">
                   <span className="">Emmanuel Adebayo</span>
                   <span className="email-text">emmanuel@mail.com</span>
                 </div>
                 <div className="mt-2">
                   <MdOutlineKeyboardArrowDown color="" size={30} />
                 </div>
            </div>
        </div>
            <div className="d-flex container mt-2 justify-content-between">
                <h3>PAYROLL</h3>
                <button className="btn fs-8 btn-primary">CREATE NEW PAYROLL</button>
            </div>
            <div className='row container mt-3'>
                <div className='col-lg-4 col-sm-6 col-10 mb-3 d-flex '>
                    <div className=' d-flex rounded-3 px-3 bg-primary text-white flex-column  border py-4'>
                      <span className=''>Oct</span>
                      <span className=''>25</span>
                    </div>
                    <div className=' d-flex bg-light justify-content-between'>
                    <div className=' d-flex flex-column px-3 justify-content-center align-item-center'>
                      <span className='fs-7 font-weight-600'>Basic Salary</span>
                      <span className='fs-8'>20 Staff</span>
                    </div>
                    <div className=' d-flex mt-3 px-2 justify-content-center align-item-center pt-4'>
                      <MdMoreVert/>
                      </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 col-10 mb-3  d-flex '>
                    <div className=' d-flex rounded-3 px-3 bg-dark text-white flex-column  border py-4'>
                      <span className=''>Sep</span>
                      <span className=''>25</span>
                    </div>
                    <div className=' d-flex bg-light justify-content-between'>
                    <div className=' d-flex flex-column px-3 justify-content-center align-item-center'>
                      <span className='fs-8 font-weight-600'>Contract Staff</span>
                      <span className='fs-7'>12 Staff</span>
                    </div>
                    <div className=' d-flex mt-3 px-2 justify-content-center align-item-center pt-4'>
                      <MdMoreVert/>
                      </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 col-10 mt-md-0 mt-2 d-flex '>
                    <div className=' d-flex rounded-3 px-3 bg-warning text-white flex-column  border py-4'>
                      <span className=''>Oct</span>
                      <span className=''>20</span>
                    </div>
                    <div className=' d-flex bg-light justify-content-between'>
                    <div className=' d-flex flex-column px-3 justify-content-center align-item-center'>
                      <span className='fs-7 font-weight-600'>Temporary Staff</span>
                      <span className='fs-8'>4 Staff</span>
                    </div>
                    <div className=' d-flex mt-3 px-2 justify-content-center align-item-center pt-4'>
                      <MdMoreVert/>
                      </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Payroll