import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">MPharma</span>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/new-product">New Product</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header
