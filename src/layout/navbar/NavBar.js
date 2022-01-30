
import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg sty-navb">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FoodSte</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse pos-styl" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active sty-home" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sty-about" to="/menu">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link sty-about" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link sty-princ" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
    <div>
       <a href="" className="sty-icon-favorie"><i className="fa fa-heart"></i></a>
    </div>
    <div>
       <a href="" className="sty-icon-shop"><i className="fa fa-shopping-bag"></i></a>
    </div>
    <div>
       <h6>items:150.00</h6>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar
