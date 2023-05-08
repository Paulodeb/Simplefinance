import React from 'react'
import { BsBell } from 'react-icons/bs'
import { MdMale, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Sidebar from '../../components/Sidebar'

const InvoiceDashboard = () => {
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
                <h3>INV-00000001</h3>
                <button className="btn btn-primary">Edit Invoice</button>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <div className='container border py-4 mt-5'>
                        
                        <div className='d-flex justify-content-between'>
                        </div>
                        <div className='d-flex justify-content-between'></div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container border py-4 mt-5'>
                        <div className='d-flex flex-column'>
                            <form>
                                <label>Payment Status</label>
                                <select className='form-control'>
                                    <option>Paid</option>
                                    <option>Unpaid</option>
                                </select>
                                <button className='btn w-100 btn-primary mt-3'>Upload Payment</button>
                                <div className='d-flex'>
                                   <span>Invoice Settings </span>
                                   <span className='ms-2'> <MdMale color="" size={15} /></span>
                                </div>
                            </form>
                            <div>
                                <div className='tex-center'>
                                    <span>Congratulations</span>
                                    <p>You invoice have receipt payment</p>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default InvoiceDashboard