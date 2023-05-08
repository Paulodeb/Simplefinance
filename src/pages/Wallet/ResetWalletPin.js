import React from 'react'

const ResetWalletPin = () => {
  return (
    <div>
      
        <form className='row'>
          <div className='col-md-5 col-sm-8  col-12'>
            <label>Current Pin</label>
            <input type='text' className='mb-2 form-control '/>
            <label>New Pin</label>
            <input type='text' className='mb-2 form-control '/>
            <label>Confirm Pin</label>
            <input type='text' className='form-control '/>
            <button className='btn mt-4 btn-primary w-100 '>CONFIRM PIN</button>
          </div>
        </form>
    </div>
  )
}

export default ResetWalletPin