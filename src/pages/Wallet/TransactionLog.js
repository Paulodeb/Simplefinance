import React from 'react'
import { BiDownload, BiFilter } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineCallMade, MdOutlineCallReceived } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './WalletStyles.css'
const TransactionLog = () => {
  return (
    <div>
        <div className='d-flex flex-column'> 
          <div className='d-flex flex-wrap w-100 justify-content-between'>
            <div className='col-md-5 d-flex mb-3 col-12'>
              <div className='position-absolute ms-3 mt-1'><BsSearch/></div>
              <input type='text' placeholder= 'Search transactions' className='w-100 ps-5 form-control' />
            </div>
            <div className=' '>
              <div className=' d-flex flex-wrap'>
                <div className="d-flex justify-content-center me-3 pe-3">
                  <div><BiDownload/></div>
                  <div>Export As</div>
                  <div className=''><RiArrowDropDownLine/></div>
                  </div>
                <div className='btn btn-primary'>
                  <BiFilter/>
                  Filter transactions
                  <RiArrowDropDownLine/>
                </div>
              </div>
            </div>
            </div> 
            <div className='row'>
              <div className='col-md-12 col-12'>
                Last 10 transactions only
              </div>
            </div>
            <div className='table-responsive'>

            <table className='table'>
              <thead className='fs-md-7 bg-light'>
                <tr>
                  <th>Transaction ID</th>
                  <th>Initiated by</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234567890</td>
                  <td>Emmanuel Adebayo</td>
                  <td className=""><MdOutlineCallMade color="red"/>Debit Alert</td>
                  <td>N50,000</td>
                  <td>Oct 10, 2022</td>
                  <td className="warning rounded-2 text-center">Pending</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>Emmanuel Adebayo</td>
                  <td><MdOutlineCallMade color="red"/>Airtime Top up</td>
                  <td>N3,000</td>
                  <td>Oct 10, 2022</td>
                  <td className='success rounded-2 text-center'>Success</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>Jane Doe</td>
                  <td><MdOutlineCallReceived color="green"/>Credit Alert</td>
                  <td>N50,000</td>
                  <td>Oct 10, 2022</td>
                  <td className='danger rounded-2 text-center'>Failed</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>Emmanuel Adebayo</td>
                  <td><MdOutlineCallMade color="red"/>Data Subscription</td>
                  <td>N20,100</td>
                  <td>Oct 10, 2022</td>
                  <td className="success rounded-2 text-center">Success</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>John Doe</td>
                  <td><MdOutlineCallMade color="red"/>Debit Alert</td>
                  <td>N50,000</td>
                  <td>Oct 10, 2022</td>
                  <td className=' success rounded-2 text-center'>Success</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>Emmanuel Adebayo</td>
                  <td><MdOutlineCallMade color="red"/>Staff Payroll</td>
                  <td>N900,000</td>
                  <td>Oct 10, 2022</td>
                  <td className="success rounded-2 text-center">Success</td>
                </tr>
                <tr>
                <td>1234567890</td>
                  <td>John Doe</td>
                  <td><MdOutlineCallMade color="red"/>Airtime Top up</td>
                  <td>N20,000</td>
                  <td>Oct 10, 2022</td>
                  <td className="success rounded-2 text-center">Success</td>
                </tr>
              </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default TransactionLog