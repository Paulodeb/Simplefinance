import React from 'react'
import { BiDownload, BiFilter } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Invoice = () => {
  return (
    <div className='row w-100'>
      <div className='col-12'>
            <div className="d-flex container mt-2 justify-content-between">
                <h3>INVOICE</h3>
                <NavLink to='/invoice/create-invoice'>
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