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
            <form
              action='malito:sharifmahmud825@gmail.com'
              method='post'
              enctype='text/plain'
            >
              <input
                type='text'
                name='name'
                id=''
                placeholder='Name '
                className='form-control bg-dark text-white my-3'
              />
              <input
                type='email'
                name='email'
                id=''
                placeholder='Email'
                className='form-control bg-dark text-white'
              />
              <br />
              <textarea
                className='form-control bg-dark text-white'
                rows='3'
                placeholder='Comments'
              ></textarea>

              <input
                type='submit'
                name=''
                id=''
                className='btn btn-warning w-100 my-2'
              />
            </form>
            <p className='text-center'>
              <span>
                <a href='https://web.whatsapp.com/'>
                  <i className='mt-5 me-4 fs-3 text-white fab fa-whatsapp'></i>
                </a>
              </span>
              <span>
                <a href='https://www.facebook.com/sharif.mahmud.825/'>
                  <i className='mt-5 fs-3 text-white fab fa-facebook'></i>
                </a>
              </span>
            </p>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
