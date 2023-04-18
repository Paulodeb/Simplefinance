import React from 'react'
import logo from '../../assets/logo.svg'
import image2 from '../../assets/undraw.svg'
import './GetStartedStyles.css'
import { BsArrowRight } from 'react-icons/bs'
import { MdApartment } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'

const GetStarted = () => {
  return (
    <div className='container-fluid'>
        <nav className='container-fluid border py-3 d-flex justify-content-between align-items-center'>
            <div className='bg-cover w-25'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
        </nav>
        <div className=' d-flex'>
            <div className='card w-50 border-0 px-5'>
                <div className='card-body mt-4'>
                    <h3 className='card-title mb-3'>Let's get started</h3>
                    <p className=''>Create a new organisation to manage your staff or join an existing organisation</p>
                    <h4 className='card-title mb-3'>What do you want to do?</h4>
                    <div className='d-flex'>
                        <div className=' border '>
                        <MdApartment color='#3FBCFC' size={30}/>
                        </div>
                        <div className=''>
                        <h4 className='card-title fs-5 mb-1'>Onboard a new organisation</h4>
                        <p>For Business Owners & Managers</p>
                        </div>
                        <div>

                        <BsArrowRight color='#3FBCFC' size={30}/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className=' border '>
                        <MdOutlineGroups color='#3FBCFC' size={30}/>
                        </div>
                        <div className=''>
                        <h4 className='card-title fs-5 mb-1'>Join an existing organisation</h4>
                        <p>For Staff</p>
                        </div>
                        <div>

                        <BsArrowRight color='#3FBCFC' size={30}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-background  w-50 px-5'>
                <img src={image2} alt='image1' className='image1 w-100'/>
            </div>
        </div>
    </div>
  )
}

export default GetStarted