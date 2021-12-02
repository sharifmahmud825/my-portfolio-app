import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wbm5ssg',
        'template_4zjpyn3',
        e.target,
        'user_sRHGAv3B9nNDzBqdMy9tT'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-5'>Contact Me</h2>
        <hr />
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                type='text'
                name='name'
                className='form-control bg-dark text-white my-2 '
              />
              <label>Email</label>
              <input
                type='email'
                name='email'
                className='form-control bg-dark text-white my-2 '
              />
              <label>Message</label>
              <textarea
                name='message'
                className='form-control bg-dark text-white my-2 '
              />
              <input
                type='submit'
                value='Send'
                className='btn btn-warning my-2 w-100'
              />
            </form>
            {/* <p className='text-center'>
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
            </p> */}
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
