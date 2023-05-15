import React from 'react'
import { BsBell } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const IndexInvoice = () => {
  return (
    <>
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
    </>
  )
}

export default IndexInvoice