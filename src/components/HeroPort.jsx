import React from 'react'
import { useState ,useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Robot from './Robot'
import Robot1 from './Robot1'
import NavigationCard from './NavigationCard'
import { div } from 'three/src/nodes/TSL.js'

function HeroPort() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='heroPort'>
      <div className='introText'>
        <h1 className="nameTitle">
          <span>H</span>
          <span>i</span>
          <span>,</span>
          <span>&nbsp;</span>
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>o</span>
          <span>w</span>
          <span>m</span>
          <span>i</span>
          <span>y</span>
          <span>a</span>
        </h1>
        <h3>Let's explore about me a bit more here</h3>
        <h4>Just Click the Robot and Explore</h4>
      </div>
      <div className='robotArea'>
        <Robot1 onRobotClick={() => setShowNav(prev => !prev)}/>
        {showNav && <NavigationCard />}
      </div>
    </div>
  )
}

export default HeroPort