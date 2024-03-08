import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <ul id='PageNav'>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/reservations">Reservations</Link>
      </li>
    </ul>
  )
}

export default Nav;