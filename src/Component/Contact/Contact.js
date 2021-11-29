import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-5'>Contact Me</h2>
        <hr />
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <input
              type='email'
              name=''
              id=''
              placeholder='Email'
              className='form-control bg-dark'
            />
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
