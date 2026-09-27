import React from 'react'
import { Link } from 'react-router-dom'
function NavigationCard() {
  return (
    <div className="navigationCard">

            <div className="navTitle">
                SYSTEM MENU
            </div>

            <div className="navOptions">
                <Link to="/about"><div>ABOUT</div></Link>
                <Link to="/skills"><div>SKILLS</div></Link>
                <Link to="/project"><div>PROJECTS</div></Link>
                <Link to="/resume"><div>RESUME</div></Link>
                <Link to="/contact"><div>CONTACT</div></Link>
            </div>

        </div>
  )
}

export default NavigationCard