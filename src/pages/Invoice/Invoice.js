import React from 'react'
import { BsBell, } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Sidebar from '../../components/Sidebar'
import { BiDownload, BiFilter } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Invoice = () => {
  return (
    <div className='row w-100'>
    <div className='col-2'>
    <Sidebar/>
    </div>
      <div className='col-10'>
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
                <h3>INVOICE</h3>
                <NavLink to='/create-invoice'>
                <button className="btn btn-primary">Create New Invoice </button>
                </NavLink>
            </div>
            <div className='d-flex flex-wrap w-100 mt-5 justify-content-between'>
            <div className='col-md-5 d-flex mb-3 col-12'>
              <input type='text' placeholder= 'Search transactions' className='w-100 ps-5 form-control' />
            </div>
            <div className=' '>
              <div className=' d-flex flex-wrap'>
                <div className="d-flex justify-content-center me-3 pe-3">
                  <div><BiDownload/></div>
                  <div>Export As</div>
                  <div className=''><RiArrowDropDownLine/></div>
                  </div>
                <div className='border bg-light rounded-2 px-3 btn-primary'>
                  <BiFilter/>
                  Filter
                  <RiArrowDropDownLine/>
                </div>
              </div>
            </div>
            </div> 
            <div className='table-responsive mt-4'>

<table className='table'>
  <thead className='fs-md-7 bg-light'>
    <tr>
      <th>Invoice No</th>
      <th>Recipient</th>
      <th>Amount</th>
      <th>Due Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>INV-000001</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    <tr>
      <td>SF 10002</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    <tr>
      <td>SF 10003</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    <tr>
      <td>SF 10004</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    <tr>
      <td>SF 10005</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    <tr>
      <td>SF 10006</td>
      <td>Emmanuel Adebayo</td>
      <td className="">N10,000</td>
      <td>Oct 10, 2022</td>
      <td className="">Pending</td>
      <td className="">Actions <RiArrowDropDownLine/> </td>
    </tr>
    
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}

export default Invoice