import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img from '../assest/headphone.png'

function Navbar() {

  return (
     <>

     <nav className="navbar navbar-expand-lg navbar-light bg-dark "  >
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold  text-warning" href="/">
            <img className='logo me-3'alt='logo' src={img} width={"48px"} />
            Soul Sonic</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item ul">
                <NavLink to='/headphone' className='nav-link text-white'>Headphone</NavLink>
              </li>
              <li className="nav-item ul">
                <NavLink to='/Speaker' className='nav-link text-white'>Speaker</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to='/soundbars' className='nav-link  text-white'>SoundBars</NavLink>
              </li> */}
              <li className="nav-item ul">
                <NavLink to='/about' className='nav-link  text-white'>About Us</NavLink>
              </li>
              

            </ul>
            <li className="nav-item dropdown d-flex">
              <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="text-white fs-5 fa-solid fa-user"></i>
              </a>
                <span> <Link to='/Cart'> <i className="text-white px-3 fs-5 fa-solid fa-cart-shopping" style={{ cursor: "pointer" , position:"relative" }}></i></Link>
                </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  {/* <a className="dropdown-item" href="/Login.js">Log In</a> */}
                  <NavLink to='/login' className='nav-link  text-dark ms-3'>Log In</NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                <NavLink to='/signup' className='nav-link  text-dark ms-3'>Sign up</NavLink>
                  </li>
              </ul>
            </li>

           
          </div>
        </div>
      </nav>

     
     
     
     
     </>
  )
}

export default Navbar