import React from 'react'

import { Canvas } from '@react-three/fiber'

import RobotBody from './RobotBody'

function Robot1({onRobotClick}) {
    
  return (
    <Canvas camera={{ position: [13, 0, 46], fov: 50 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 10, 10]} intensity={2}/>
        <pointLight position={[0, 5, 10]} intensity={15} distance={35} color="#43F5E5"/>
        <pointLight position={[-15, 5, -5]} intensity={8} distance={30} color="#5577FF"/>
        <RobotBody onRobotClick={onRobotClick} />
    </Canvas>
  )
}

export default Robot1