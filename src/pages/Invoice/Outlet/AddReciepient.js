import React from 'react'

const AddReciepient = () => {
  return (
    <div className='row'>
        <form className='col-12 col-md-5 '>
            <label htmlFor="name" className="form-label">Recipient Name</label>
            <input type="text" className="form-control" required id="name" placeholder="Full Name" />
            <label htmlFor="phone-number" className="form-label">Recipient Phone Number</label>
            <input type="text" className="form-control" id="phone-number" placeholder="Phone Number" />
            <label htmlFor="email" className="form-label">Recipient Email Address*</label>
            <input type="email" className="form-control" required id="email" placeholder="Email Address" />
            <label htmlFor="address" className="form-label">Recipient Address</label>
            <input type="text" className="form-control" id="address" placeholder="Address" />
            <button className="btn btn-primary text-center w-100 mt-3">Save and Continue</button>
        </form>
    </div>
  )
}

export default AddReciepient