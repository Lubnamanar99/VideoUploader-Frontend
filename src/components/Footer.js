import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className=' p-5 '>
      <hr />
      <Row className='mt-3 p-2'>
        <Col >

          <a ><b><span className='text-info fs-2'>P</span>ixel <span className='text-info fs-2'>P</span>lay</b></a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur, nemo consequatur ut atque sint suscipit ad, facere debitis praesentium modi non dolor necessitatibus aliquid alias cum quis qui aut.</p>
        </Col>
        <Col>
          <h4 className='text-white'>Quick Links</h4>
          <ul className='text-white'>

            <li ><a className='text-white' href="" style={{ textDecoration: "none" }}>About Us</a></li>
            <li ><a className='text-white' href="" style={{ textDecoration: "none" }}>Contact Us</a></li>
          </ul>
        </Col>
        <Col>
          <h4 className='text-white'>Libraries</h4>
          <ul>
            <li>
              <Link
              to={"https://react-bootstrap.netlify.app/"}
              target='_blank'
              className="text-decoration-none"
    
              >
                <h6 className="text-white">
                  react-bootstrap
                </h6>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.npmjs.com/package/react-router-dom"
                target="_blank"
                className="text-decoration-none"
              >
                <h6 className="text-light">
                  react-router-dom
                </h6>
              </Link>
            </li>
  
            <li>
              <Link
                to="https://www.npmjs.com/package/uniqid"
                target="_blank"
                className="text-decoration-none"
              >
                <h6 className="text-light">
                  uniqid
                </h6>
              </Link>
            </li>
  
            <li>
              <Link
                to="https://www.npmjs.com/package/react-toastify"
                target="_blank"
                className="text-decoration-none"
              >
                <h6 className="text-light">
                  ReactToastify
                </h6>
              </Link>
            </li>
  
           <li>
              <Link
                to="https://www.npmjs.com/package/date-fns"
                target="_blank"
                className="text-decoration-none"
              >
                <h6 className="text-light">
                  date-fns
                </h6>
              </Link>
           </li>
           <li>
              <Link
                to="https://www.npmjs.com/package/react-feather"
                target="_blank"
                className="text-decoration-none"
              >
                <h6 className="text-light">
                  react-feather
                </h6>
              </Link>
           </li>
          </ul>

        </Col>
        <Col  >
          <h4 className='text-white'>Contact Us</h4>

          <Form.Control
            type="text"
            placeholder="Enter email"
            className="mb-3"
          />
          <Button variant="secondary">Subscribe</Button>
          <div className='text-white mt-3'>
            <a className='text-white fs-4 p-3' href="" ><i class="fa-brands fa-facebook-f"></i></a>
            <a className='text-white fs-4 p-3' href="" ><i class="fa-brands fa-instagram"></i></a>
            <a className='text-white fs-4 p-3' href="" ><i class="fa-brands fa-twitter"></i></a>
            <a className='text-white fs-4 p-3' href="" ><i class="fa-brands fa-whatsapp"></i></a>


          </div>


        </Col>

      </Row>
      <div className='text-white mb-0' style={{ textAlign: 'center' }}>Copyright &copy; 2023  All Rights Reserved &reg; Website developed by: Lubna Ibrahim</div>
    </div>
  )
}

export default Footer