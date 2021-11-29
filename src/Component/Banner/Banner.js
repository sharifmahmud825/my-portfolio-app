import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <div>
              <h1 className='mb-3'>Myself</h1>
              <h1 className='name'>Sharif Mahmud</h1>
              <p>I am an enthusiast learner and a Junior Front-end developer</p>
              <button className='btn btn-warning'>
                <a href='sharif-mahmud.pdf' download='sharif-mahmud.pdf'>
                  Download CV
                </a>
              </button>
              <p className='mt-4'>
                <span>
                  <a href='https://github.com/sharifmahmud825'>
                    <i class='fab fa-github text-white fs-3 me-4'></i>
                  </a>
                </span>
                <span>
                  <a href='https://www.linkedin.com/in/sharif-mahmud-a2642b190/'>
                    <i class='fab fa-linkedin text-white fs-3'></i>
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <img
              src='https://i.ibb.co/bsbL9ZR/profile.png'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
