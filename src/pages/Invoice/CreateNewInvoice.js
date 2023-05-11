import React, { useState } from 'react'
import { BsBell } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Sidebar from '../../components/Sidebar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import './InvoiceStyles.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'




const CreateNewInvoice = () => {
  const [body, setBody] = useState('')

  const handleBody = (e) => {
    console.log(e)
    setBody(e)
  }

  return (
    <div className='row w-100'>
    <div className='col-3'>
    <Sidebar/>
    </div>
      <div className='col-9 container'>
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
                <h3>New Invoice</h3>
                <button className='btn btn-primary'>Add New Customer</button>
               
            </div>

            <div className="container border py-4 mt-5">
                <div className='row justify-content-between'>
                <form className='col-lg-8 col-md-7 col-12 order-2 order-md-1'>
                    <div className='row'>
                        <div className='col-md-6 d-flex'>
                        <div className='position-absolute px-1 pt-1 pb-2  bg-light '>
                        <span>#</span>
                        </div>
                        <input type='text' className='form-control ps-4' placeholder='INVOICE SUBJECT'/>
                        </div>
                        <div className='col-6 d-flex'>
                        <div className='position-absolute px-1 pt-1 pb-2  bg-light'><FaRegCalendarAlt/></div>
                        <input type='text' className='form-control ps-4' placeholder='Due Date'/>
                        </div>
                    </div>
                    <textarea type='text' className='form-control mt-3' placeholder='Add Description (e.g project name, description of invoice)'/>
                </form>
                <div className='col-md-3 col-sm-12 order-1 order-md-2  d-flex justify-content-center border align-items-center'>
                <div className='cover fs-8  bg-primary'>
                Logo
                </div>
                </div>
                </div>
                <div className='row border'>
                <div classNaame='col-12 table-respons'>
                <table className='table table-borderle mt-5'>
                    <thead>
                        <tr>
                            <th>N/A</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Discount</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><input type='text' className='w-50' placeholder=''/></td>
                            <td><input type='text' className='w-50' placeholder=''/></td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><button className='btn btn-primary'><RiDeleteBin6Line/></button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><input type='text' className=' w-50' placeholder=''/></td>
                            <td><input type='text' className=' w-50' placeholder=''/></td>
                            <td><input type='text' className='' placeholder=''/></td>
                            <td><button className='btn btn-primary'><RiDeleteBin6Line/></button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className='row border py-5 justify-content-end mt-5'>
                    <div className='col-12 col-md-7 col-lg-6 d-flex flex-column'>

                    <div className=' border-bottom justify-content-between d-flex '>
                      <span className='px-2'>Sub Total</span>
                      <span className='px-2'>N0.00</span>
                    </div>
                    <div className=' justify-content-between d-flex '>
                      <span className='px-2'>VAT</span>
                      <span className='px-2'>N0.00</span>
                    </div>
                    <div className=' border justify-content-between d-flex '>
                      <span className='bg-dark text-white px-2'>TOTAL BALANCE</span>
                      <span className='font-weight-500 px-2'>NGN 30,000</span>
                    </div>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                  <form className='row'>
                  <div className='col-12 col-sm-3'>
                    <label className='mt-2  fs-6'>Select Customer</label>
                    <select className='form-select mt-3'>
                      <option>SELECT CUSTOMER</option>
                      <option>Choose a template</option>
                      <option>Choose a template</option>
                      <option><button className='btn btn-primary'>Add New Customer</button></option>
                    </select>
                  </div>
                  <div className='col-12 col-sm-3'>
                    <label className='mt-2  fs-6'>Tax No.</label>
                    <select className='form-select mt-3'>
                      <option>INVOICE SUBJECT</option>
                      <option>Choose a template</option>
                      <option>Choose a template</option>
                    </select>
                  </div>
                  <div className='col-12 col-sm-3'>
                    <label className='mt-2  fs-6'>Payment Account</label>
                    <select className='form-select mt-3'>
                      <option>Select Account</option>
                      <option>Choose a template</option>
                      <option>Choose a template</option>
                      
                    </select>
                  </div>
                  <div className='col-12 col-sm-3'>
                    <label className='mt-2  fs-6'>Currency</label>
                    <select className='form-select mt-3'>
                      <option>Nigeria Naira NGN</option>
                      <option>Choose a template</option>
                      <option>Choose a template</option>
                    </select>
                  </div>
                <div className='d-flex flex-column'>
                <label className='mt-2  fs-6'>Invoice Note</label>
                  <div className='col-12'>
                    <ReactQuill className='mt-3' theme="snow"
                    placeholder='Add a note to your customer (optional)'
                    modules={CreateNewInvoice.modules}
                    formats={CreateNewInvoice.formats}
                    onChange={handleBody}
                    value={body}
                    />
                  </div>
                </div>
                <div className='row'>
                  <button className='btn btn-primary ms-lg-3 col-12 col-md-5 mt-3'>Save and Continue</button>
                </div>
                </form>

                </div>
            </div>
      </div>
    </div>
  )
}

export default CreateNewInvoice


CreateNewInvoice.modules = {
  toolbar: [
    [{header: '1'}, {header: '2'}, { header: [3, 4, 5, 6] }, { font: [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{list: 'ordered'}, {list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean']
    ['code-block']
  ],
};

CreateNewInvoice.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block'
];
