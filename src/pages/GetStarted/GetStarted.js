import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import image2 from '../../assets/undraw.svg'
import './GetStartedStyles.css'
import { BsArrowRight } from 'react-icons/bs'
import { MdApartment } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom'


const GetStarted = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  return (
    <div className='getstarted'>
        <nav className="navbar login border navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
      </nav>

        <div className=' h-100 row '>
            <div className='container-fluid col-md-6 col-12 get-text  px-4 px-sm-5'>
                <div className='card-body ps-xl-5 ms-xl-4'>
                    <h3 className='card-title mb-3'>Let's get started</h3>
                    <p className=''>Create a new organisation to manage your staff or join an existing organisation</p>
                    <h4 className='card-title mb-3'>What do you want to do?</h4>
                    <div className='d-flex'>
                        <div className=' me-3 me-xl-4 icon '>
                        <MdApartment color='#3FBCFC' size={30}/>
                        </div>
                        <div className=''>
                        <h4 className='card-title fs-5 mb-1'>Onboard a new organisation</h4>
                        <p>For Business Owners & Managers</p>
                        </div>
                        <div className='ms-3 ms-xl-5 arrow' onClick={
                            () => {
                                navigate('/OrgProfile')
                            }
                        }>
                        <BsArrowRight color='#3FBCFC' size={30}/>
                        </div>
                        {/* Modal */}
                       
                    </div>
                    <div className='d-flex'>
                        <div className=' icon me-3 me-xl-4 '>
                        <MdOutlineGroups color='#3FBCFC' size={30}/>
                        </div>
                        <div className=''>
                        <h4 className='card-title fs-5 mb-1'>Join an existing organisation</h4>
                        <p>For Staff</p>
                        </div>
                        <div className='ms-3 ms-xl-5 arrow' onClick={handleShow}>
                        <BsArrowRight color='#3FBCFC' size={30}/>
                        </div>
                    </div>
                    <Modal className='mod' show={show} onHide={handleClose}>
        <Modal.Body className='py-5'>
            <h4 className='card-title text-center mb-3'>Join an existing organisation</h4>
          <p className=' text-center '>Send a request to the organisation's manager to be added as a staff.</p>
          <div className='px-4'>
          <label className='mb-1' for="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter organisation email address" />
            <Button variant="primary" className='mt-3 w-100'>Send Request To Join</Button>
          </div>
        </Modal.Body>
      </Modal>
                </div>
            </div>
            <div className='image-background col-6 d-md-block d-none '>
                <img src={image2} alt='image1' className='me-2 image1'/>
            </div>
        </div>
    </div>
  )
}

export default GetStarted