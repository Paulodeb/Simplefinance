import React, { useState } from "react";
import "./WalletStyles.css";
import Sidebar from "../../components/Sidebar";
import {
  MdOutlineKeyboardArrowDown,
  MdGroup,
  MdLogout,
  MdDownload, 
} from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { Modal } from 'react-bootstrap';
import Uploader from '../../components/Uploader'


 const IndexWallet = () => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [menuselect, setMenuselect] = useState(false);
  const [showModalAddWallet, setShowModalEditAccess] = useState(false);
  const [showModalBankTransfer, setShowModalBankTransfer] = useState(false);
  const [showModalBankTransferSummary, setShowModalBankTransferSummary] = useState(false);
  const [pin, setPin] = useState(new Array(4).fill(''))
  const [showModalBulkTransfer, setShowModalBulkTransfer] = useState(false);
  const [showModalBulkTransferSummary, setShowModalBulkTransferSummary] = useState(false);
  const [showModalBulkTransferUpload, setShowModalBulkTransferUpload] = useState(false);
  const [showModalRequestCard, setShowModalRequestCard] = useState(false);
  const [showModaleChangePin, setShowModaleChangePin] = useState(false);


  const handleChangePin = (element, index) => {
    if(isNaN(element.value)) return false;

    setPin([...ongotpointercapture.map((d, idx)=>(idx === index) ? element.value : d )]);

    //focus next input
    if(element.nextSibling){
      element.nextSibling.focus();
    }
  }

  const handleEditAccessClose = () => setShowModalEditAccess(false);
  const handleEditAccessShow = () => setShowModalEditAccess(true);

  const handleBankTransferClose = () => setShowModalBankTransfer(false);
  const handleBankTransferShow = () => setShowModalBankTransfer(true);

  const handleBankTransferSummaryClose = () => setShowModalBankTransferSummary(false)
  const handleBankTransferSummaryShow = () => setShowModalBankTransferSummary(true)
  
  const handleBulkTransferClose = () => setShowModalBulkTransfer(false);
  const handleBulkTransferShow = () => setShowModalBulkTransfer(true);
  const handleBulkTransferUploadClose = () => setShowModalBulkTransferUpload(false)
  const handleBulkTransferUploadShow = () => setShowModalBulkTransferUpload(true)
  const handleBulkTransferSummaryClose = () => setShowModalBulkTransferSummary(false)
  const handleBulkTransferSummaryShow = () => setShowModalBulkTransferSummary(true)




  const handleRequestCardClose = () => setShowModalRequestCard(false);
  const handleRequestCardShow = () => setShowModalRequestCard(true);

  const handleChangePinClose = () => setShowModaleChangePin(false);
  const handleChangePinShow = () => setShowModaleChangePin(true);


  return (
    <div className="row w-100" >
      <div className="col-12">
        <div className="d-flex flex-wrap justify-content-end">
          <div className=" d-flex ">
            <div className="d-flex mt-3 justify-content-center">
              <BsBell size={25} />
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
            <div className="mt-2"
             onClick={() =>{
              setShow(!show)
             }}
            >
              <MdOutlineKeyboardArrowDown color="" size={30} />
            </div>
          </div>
          
          {show && (
                <div className='d-flex p-3 dropdown-content flex-column'>
                  <div className="d-flex">
                    <MdGroup/>
                  <span className="ps-2"
                  onClick={() =>{
                    setSelect(!select)
                  }}
                  >Organisational Settings</span>
                  </div>
                  <div className="d-flex">
                    <MdLogout/>
                  <span className="ps-2">Log Out</span>
                  </div>
                </div>
              
              )}
              { select && (
                <div className="d-flex dropdown-content mt-5 me-5 p-2 flex-column">
                  <div className="d-flex"> 
                  <MdGroup/>
                  <span className="ps-2">A & B Plc</span>
                  </div>
                  <div className="d-flex border-bottom">
                  <MdGroup/>
                  <span className="ps-2">Simple Finance Plc</span>
                  </div>
                  <div className="d-flex">
                    <span
                    onClick={() =>{
                      setMenuselect(!menuselect)
                    }}
                    >Organisation Menu</span>
                  </div>
                </div>
              )}

              { menuselect && (
                <div className="d-flex dropdown-content mt-6 me-5 p-2 flex-column">
                  <div  className="d-flex flex-column">
                    <span className="btn">View Wallet</span>
                    <span className="btn" onClick={handleEditAccessShow}>Edit Wallet Access</span>
                    <span className="btn" onClick={handleBankTransferShow}>Bank Transfer</span>
                    <span className="btn" onClick={handleBulkTransferShow}>Bulk Transfer</span>
                    <span className="btn" onClick={handleRequestCardShow}>Request Card</span>
                    <span className="btn" onClick={handleChangePinShow}>Change Wallet Pin</span>
                    </div>
                  </div>
              )}
             <Modal show={showModalAddWallet} onHide={handleEditAccessClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Edit Wallet Access</h5>
            </div>
          
        </Modal.Header>
       
          <div className="d-flex px-sm-3">
          <img
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
              alt="profile"
              className="img-fluid mt-2 me-1 cover"
            />
            <div className="w-100  mt-2 d-flex flex-column">
              <span className="">Emmanuel Adebayo</span>
              <span className="email-text">emmanuel@mail.com</span>
            </div>
          </div>
          <form>
          <div className="d-flex px-sm-3 flex-column">
            <label className="mt-3">Wallet ID</label>
            <input type="text" className="form-control" placeholder="Primary account"/>
            <label className="mt-3">Access</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Access</option>
              <option value="1">Edit Access</option>
              <option value="2">Delete Access</option>
            </select>
          <div className="d-flex mt-3">
          <label className="me-2">Wallet Access</label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"/>
          </label>
          </div>
          </div>
          </form>

          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleEditAccessClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3'>Save Changes</button>
          </div>
          </Modal.Footer>
      </Modal>
      
             <Modal show={showModalBankTransfer} onHide={handleBankTransferClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Bank Transfer</h5>
            </div>
          
        </Modal.Header>
          <form>
          <div className="d-flex px-sm-3 flex-column">
            <label className="mt-3">Source Wallet</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select wallet</option>
              <option >Edit Access</option>
              <option >Delete Access</option>
            </select>
            <label className="mt-3">Bank</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select beneficiary bank</option>
              <option >Edit Access</option>
              <option >Delete Access</option>
            </select>
            <label className="mt-3">Beneficiary Account</label>
            <input type="text" className="form-control" placeholder="Enter beneficiary account"/>
            <label className="mt-3">Amount</label>
            <input type="text" className="form-control" placeholder="Enter amount"/>
            <label className="mt-3">Description</label>
            <input type="text" className="form-control" placeholder="Enter description"/>
            
          
          </div>
          </form>

          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleBankTransferClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3' onClick={handleBankTransferSummaryShow}>Continue</button>
          </div>
          </Modal.Footer>
      </Modal>

      <Modal show={showModalBankTransferSummary} onHide={handleBankTransferSummaryClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Transfer Summary</h5>
            </div>
          
        </Modal.Header>
        <div className="container">
          <div className="d-flex mb-3 py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Current Balance</span>
            <span>N200, 000</span>
            </div>
            <div className="d-flex flex-column">
            <span>Past Balance</span>
            <span>N100, 000</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Wallet</span>
            </div>
            <div className="d-flex flex-column">
            <span>Primary Wallet</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Beneficiary Account</span>
            </div>
            <div className="d-flex flex-column">
            <span>3134601077</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Beneficiary Bank</span>
            </div>
            <div className="d-flex flex-column">
            <span>First Bank</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Amount</span>
            </div>
            <div className="d-flex flex-column">
            <span>N100,000</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Date</span>
            </div>
            <div className="d-flex flex-column">
            <span>September, 20, 2022</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1 justify-content-between">
            <div className="d-flex flex-column">
            <span>Description</span>
            </div>
            <div className="d-flex flex-column">
            <span>Nill</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Comission</span>
            </div>
            <div className="d-flex flex-column">
            <span>N100</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1 justify-content-between">
            <div className="d-flex flex-column">
            <span>Total Amount</span>
            </div>
            <div className="d-flex flex-column">
            <span>N100,100</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mt-3 justify-content-center w-100">
            <div>
              <span>Enter Wallet Pin</span>
            </div>
            <div>
              {
                pin.map( (data, index)=>{
                  return <input
                  className="pin-field"
                  type="text"
                  name="pin"
                  maxLength='1'
                  key={index}
                  value={data}
                  onChange={e => handleChangePin(e.target, index)}
                  onFocus={e => e.target.select()}

                  />
                })
              }
            </div>
          </div>
        </div>
          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleBankTransferSummaryClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3'>Confirm</button>
          </div>
          </Modal.Footer>
      </Modal>

      <Modal show={showModalBulkTransfer} onHide={handleBulkTransferClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Bulk Transfer</h5>
            </div>
          
        </Modal.Header>
       <div className="d-flex container flex-column">
        <span>Download Sample Payment File</span>
        <div className="d-flex rounded-1 mt-1 py-3 ps-2 border">
          <div className=""><MdDownload/> </div>
          <span className="ms-3">Download File Template</span>
        </div>
        <span className="mt-2">Download Bank Code List</span>
        <div className="d-flex rounded-1 mt-1 py-3 ps-2 border">
          <div className=""><MdDownload/> </div>
          <span className="ms-3">Download File Template</span>
        </div>
       </div>
         
         
          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleBulkTransferClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3' onClick={handleBulkTransferUploadShow}>Continue</button>
          </div>
          </Modal.Footer>
      </Modal>

      {/* Bulk Transfer */}

      <Modal show={showModalBulkTransferUpload} onHide={handleBulkTransferUploadClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Upload Payment File</h5>
            </div>
          
        </Modal.Header>
          <form>
          <div className="d-flex px-sm-3 flex-column">
            <label className="mt-3">Source Account</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select wallet</option>
              <option value="1">Edit Access</option>
              <option value="2">Delete Access</option>
            </select>
            <label className="mt-3">Total Amount</label>
            <input type="text" className="form-control" placeholder="Enter amount"/>
            <label className="mt-3">Select Completed Payment File</label>
            <Uploader/>
            <label className="mt-3">Description</label>
            <input type="text" className="form-control" placeholder="Enter description"/>
            
          
          </div>
          </form>

          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleBulkTransferUploadClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3' onClick={handleBulkTransferSummaryShow}>Continue</button>
          </div>
          </Modal.Footer>
      </Modal>

      {/* Bulk Transfer Summary */}

      
      <Modal show={showModalBulkTransferSummary} onHide={handleBulkTransferSummaryClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Transfer Summary</h5>
            </div>
          
        </Modal.Header>
        <div className="container">
          <div className="d-flex mb-3 py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Current Balance</span>
            <span className="text-primary">N1,000,000</span>
            </div>
            <div className="d-flex flex-column">
            <span>Past Balance</span>
            <span className="text-primary">N199,800</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Wallet</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">Primary Wallet</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Beneficiary Account</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">10 Banks Account</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Beneficiary Bank</span>
            </div> 
            <div className="d-flex flex-column">
            <span className="text-primary">10 Accounts</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Amount</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">N800,000</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Date</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">September, 20, 2022</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1 justify-content-between">
            <div className="d-flex flex-column">
            <span>Description</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">Staff Salary</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1  justify-content-between">
            <div className="d-flex flex-column">
            <span>Comission</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">N200</span>
            </div>
          </div>
          <div className="d-flex border-bottom py-1 justify-content-between">
            <div className="d-flex flex-column">
            <span>Total Amount</span>
            </div>
            <div className="d-flex flex-column">
            <span className="text-primary">N800,200</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mt-3 justify-content-center w-100">
            <div>
              <span>Enter Wallet Pin</span>
            </div>
            <div>
              {
                pin.map( (data, index)=>{
                  return <input
                  className="pin-field"
                  type="text"
                  name="pin"
                  maxLength='1'
                  key={index}
                  value={data}
                  onChange={e => handleChangePin(e.target, index)}
                  onFocus={e => e.target.select()}

                  />
                })
              }
            </div>
          </div>
        </div>
          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleBulkTransferSummaryClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3'>Confirm</button>
          </div>
          </Modal.Footer>
      </Modal>

      {/* Request Card */}

      <Modal show={showModalRequestCard} onHide={handleRequestCardClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Request Card</h5>
            </div>
          
        </Modal.Header>
          <form>
          <div className="d-flex px-sm-3 flex-column">
          <label className="mt-3">Wallet ID</label>
            <input type="text" className="form-control" placeholder="Primary wallet"/>
            <label className="mt-3">Card type</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Virtual</option>
              <option value="1">Edit Access</option>
              <option value="2">Delete Access</option>
            </select>
            <label className="mt-3">Wallet Address</label>
            <input type="text" className="form-control" placeholder="Enter Address"/>
          </div>
          </form>

          <Modal.Footer className="border-0">
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className='btn btn-outline-dark' onClick={handleRequestCardClose}>Cancel</button>
            <button className='btn bg-color-1 ms-3' >Send Request</button>
          </div>
          </Modal.Footer>
      </Modal>

      {/* Change Wallet Pin */}

      
      <Modal show={showModaleChangePin} onHide={handleChangePinClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        
            <div className="d-flex w-100 justify-content-center">
            <h5>Change Wallet Pin</h5>
            </div>
          
        </Modal.Header>
          <form>
          <div className="d-flex px-sm-3 flex-column">
          <label className="mt-3">Current PIN</label>
            <input type="text" className="form-control"/>
            <label className="mt-3">New PIN</label>
            <input type="text" className="form-control"/>
          </div>
          </form>

          <Modal.Footer className="border-0">
          <div className="d-flex w-100 mt-3">
            <button className='btn w-100 bg-color-1' onClick={handleChangePinClose} >Confirm Changes</button>
          </div>
          </Modal.Footer>
      </Modal>

        </div>
        <div className="d-flex container mt-2 justify-content-between">
          <h3>Wallet</h3>
          <button className="btn btn-primary">Add New Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default IndexWallet;
