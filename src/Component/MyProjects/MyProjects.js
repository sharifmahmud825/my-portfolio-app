import React from 'react';

const MyProjects = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-4'>Projects</h2>
        <hr />

        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col'>
            <div className='card h-100 bg-dark p-2'>
              <img
                src='https://i.ibb.co/B22t3yg/observe-app-989af-web-app-2021-11-29.png'
                className='card-img-top  img-fluid'
                alt='...'
              />
              <div className='card-body'>
                <h3 className='card-title text-warning'>
                  Observe-app (watch website)
                </h3>
                <p className='card-text'>
                  Technology Used : React Js, React Bootstrap, Firebase, Node
                  js, Express Js, MongoDB.
                </p>
                <p>
                  <a href='https://observe-app-989af.web.app/'>Live Site</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src='...' className='card-img-top img-fluid' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src='...' className='card-img-top img-fluid' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src='...' className='card-img-top img-fluid' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
