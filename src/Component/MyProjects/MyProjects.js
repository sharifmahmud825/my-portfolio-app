import React from 'react';
import './MyProjects.css';

const MyProjects = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-4'>Projects</h2>
        <hr />

        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col'>
            <div className='card h-100 bg-dark p-2 '>
              <img
                src='https://i.ibb.co/B22t3yg/observe-app-989af-web-app-2021-11-29.png'
                className='card-img-top  img-fluid card-image'
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
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://observe-app-989af.web.app/'>Live Site</a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3'>
                    <a href='https://github.com/sharifmahmud825/observe-app-client-interactive'>
                      Client Site
                    </a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://github.com/sharifmahmud825/observe-app-server-interactive'>
                      Server Site
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100 bg-dark p-2'>
              <img
                src='https://i.ibb.co/gP6y5pg/conveyer-app-web-app-2021-11-29.png'
                className='card-img-top img-fluid card-image'
                alt='...'
              />
              <div className='card-body'>
                <h3 className='card-title text-warning'>
                  Conveyer-app (delivery website)
                </h3>
                <p className='card-text'>
                  Technology Used : React Js, React Bootstrap, Firebase, Node
                  js, Express Js, MongoDB.
                </p>
                <p>
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://conveyer-app.web.app/'>Live Site</a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3'>
                    <a href='https://github.com/sharifmahmud825/conveyer-client-interactive'>
                      Client Site
                    </a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://github.com/sharifmahmud825/conveyer-server-interactive'>
                      Server Site
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100 bg-dark p-2'>
              <img
                src='https://i.ibb.co/3sM4T09/festive-dubinsky-6401c2-netlify-app-2021-11-29.png'
                className='card-img-top img-fluid card-image'
                alt='...'
              />
              <div className='card-body'>
                <h3 className='card-title text-warning'>
                  We Heal (health-care website)
                </h3>
                <p className='card-text'>
                  Technology Used : React Js, React Bootstrap, Firebase.
                </p>
                <p>
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://we-heal.web.app/'>Live Site</a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3'>
                    <a href='https://github.com/sharifmahmud825/we-heal-interactive'>
                      GitHub
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100 bg-dark p-2'>
              <img
                src='https://i.ibb.co/TmyrqKw/screencapture-sports-academy-netlify-app-2021-11-29-16-04-18.png'
                className='card-img-top img-fluid card-image'
                alt='...'
              />
              <div className='card-body'>
                <h3 className='card-title text-warning'>
                  Sports Academy (trainig-related website)
                </h3>
                <p className='card-text'>
                  Technology Used : React Js, React Bootstrap, React-Router.
                </p>
                <p>
                  <span className='me-4 background py-1 px-2 rounded-3 '>
                    <a href='https://sports-academy.netlify.app/'>Live Site</a>
                  </span>
                  <span className='me-4 background py-1 px-2 rounded-3'>
                    <a href='https://github.com/sharifmahmud825/sports-academy-interactive'>
                      GitHub
                    </a>
                  </span>
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
