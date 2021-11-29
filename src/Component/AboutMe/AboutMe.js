import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='text-center my-4'>About Myself</h1>
        <hr />
        <div className='row'>
          <div className='col-md-4 border-end-3 border-warning'>
            <img
              src='https://i.ibb.co/bsbL9ZR/profile.png'
              alt=''
              className='img-fluid w-75'
            />
            <div className='my-4'>
              <h3 className='text-warning'>Skill</h3>
              <hr />
              <p>
                <span className='fw-bold'>Comfortable</span> : HTML, CSS,
                Bootstrap, JavaScript, React JS
              </p>
              <p>
                <span className='fw-bold'>Familiar</span> : Tailwind CSS,
                Material UI, Node JS, Express JS
              </p>
              <p>
                <span className='fw-bold'>Tools</span> : VS Code, GitHub, Chrome
                dev-tool, Firebase, Heroku, Netlify.
              </p>
            </div>
          </div>
          <div className='col-md-8 border-start border-warning vertical-line'>
            <div className='p-3'>
              <h3 className='text-warning'>Personal Information</h3>
              <hr />
              <p className='my-2'>
                Hey, Myself Sharif Mahmud from Khulna, Bangladesh. I am an
                undergraduate student pursuing my degree on Bachelor of Arts.
                <p className='my-2'>
                  I have Knowledge of efficiently coding user-friendly websites
                  and applications using modern HTML, CSS, and JavaScript,
                  React, NodeJS, MongoDB. Always seeking out new features and
                  technologies to gather knowledge and learn new technologies to
                  make myself updated.
                </p>
              </p>
              <h3 className='text-warning mt-4  '>Educational Information</h3>
              <hr />
              <p>Bachelor of Arts in B.A (History)</p>
              <small>Session: 2017-2018</small>
              <p>
                Bangabandhu Sheikh Mujibur Rahman Science & Technology
                University, Gopalgonj
              </p>
              <h3 className='text-warning mt-5'>Professional Courses</h3>
              <hr />
              <p>Complete Web development course with Jhankar Mahbub</p>
              <small>Batch-4</small>
              <p>Programming Hero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
