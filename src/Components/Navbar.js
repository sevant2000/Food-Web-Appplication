import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className='container p-1'>

<nav className="navbar ">
  <div className="container-fluid">
    <a className="brand" href="#">Food Restaurent</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
   
  </div>
</nav>

    </div>
  )
}

export default Navbar