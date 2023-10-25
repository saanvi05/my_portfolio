import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='nav_container'>
        <div className="logo">
            <h2>Saanvi</h2>
        </div>
        <div className="links"></div>
        <ul>
            <li>
            <Link to='/'className = 'link'>Home</Link>
            <Link to='/about'className = 'link'>About</Link>
            <Link to='/work'className = 'link'>Work</Link>
            <Link to='/contact'className = 'link'>Contact</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Nav