import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

function RobotArm() {

    const armRef = useRef()
    const elbowRef = useRef()
    const handRef = useRef()

    useFrame((state) => {
        const t = state.clock.elapsedTime

        // Elbow movement
        if (elbowRef.current) {
            elbowRef.current.rotation.z =
                Math.sin(t * 2.5) * 0.25
        }

        // Hand wave
        if (handRef.current) {
            handRef.current.rotation.x =
                Math.sin(t * 3) * 0.8
        }
    })

    return (
        <group ref={armRef} position={[1, 0, 0]}>

            {/* UPPER ARM */}
            <mesh
                position={[10, -4, 0]}
                rotation={[0, 0, -2.5]}
            >
                <capsuleGeometry args={[1.5, 6, 8, 16]} />
                <meshStandardMaterial
                    color="#167D8D"
                    roughness={0.5}
                    metalness={0.7}
                />
            </mesh>


            {/* ELBOW PIVOT */}
            <group
                ref={elbowRef}
                position={[14, -8, 0]}
            >

                {/* LOWER ARM */}
                <mesh
                    position={[-1.5, 4, 0]}
                    
                >
                    <capsuleGeometry args={[1.4, 5, 8, 16]} />
                    <meshStandardMaterial
                        color="#167D8D"
                        roughness={0.5}
                        metalness={0.7}
                    />
                </mesh>


                {/* HAND */}
                <mesh
                    ref={handRef}
                    position={[-1.5, 8, 0]}
                >
                    <RoundedBox
                        args={[3.2, 3.5, 2.8]}
                        radius={0.8}
                        smoothness={5}
                    />
                    <meshStandardMaterial
                        color="#9FCED2"
                        roughness={0.3}
                        metalness={0.8}
                    />
                </mesh>

            </group>

        </group>
    )
}

export default RobotArm