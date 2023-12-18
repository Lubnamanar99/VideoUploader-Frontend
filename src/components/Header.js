import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
  <div className='header fixed-top mt-0  '>
          <nav class="navbar navbar-expand-lg bg-light p-2  "  data-bs-theme="light" >
    <div class="container-fluid">
    <a>
      <Link to={'/'}>
        <img
                    alt=""
                    src="https://i.postimg.cc/j5fKR4pZ/video-upload-1-1151374.webp"
                    width="60"
                    height="40"
                    className="d-inline-block align-top"
                  /> 
      </Link>
    </a>
      <a class="navbar-brand" href="#"><b><span className='text-info fs-1'>P</span>ixel <span className='text-info fs-1'>P</span>lay</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ms-auto">
          <Link to={'/'} style={{textDecoration:"none"}}>
            <li class="nav-item">
              <a class="nav-link active" href="#"><i class="fa-solid fa-home me-lg-1 me-sm-0"></i> Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
          </Link>
          <Link to={'/home'} style={{textDecoration:"none"}}>
            <li class="nav-item">
              <a class="nav-link active" href="#"><i class="fa-solid fa-upload me-lg-1 me-sm-0"></i>Upload</a>
            </li>
          </Link>

          <Link to={'/whistory'} style={{textDecoration:"none"}}>
            <li class="nav-item">
              <a class="nav-link active" href="#"><i class="fa-solid fa-clock me-lg-1 me-sm-0"></i>History</a>
            </li>
          </Link>
          
         
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
       
    </div>
  )
}

export default Header