import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'


const NavBar = (props) => (
  <nav className={`nav--${props.theme}`}>
    <div className="nav-wrapper">
      <span className="nav-wrapper__title">Where in the world?</span>
      <div className="nav-wrapper__theme" onClick={() => props.toggleTheme(props.theme)}>
        <FontAwesomeIcon icon={props.theme === 'light' ? faMoonRegular : faMoonSolid} size="lg" transform={{ rotate: -25 }} />
        <span className="nav-wrapper__theme--text">{props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
  </nav>
)

export default NavBar
