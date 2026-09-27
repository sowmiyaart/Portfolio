import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

function RobotLeftArm() {

    const armRef = useRef()
    const elbowRef = useRef()

    useFrame((state) => {
        const t = state.clock.elapsedTime

        // Very subtle natural movement
        if (armRef.current) {
            armRef.current.rotation.z =
                Math.sin(t * 1.2) * 0.02
        }
    })

    return (
        <group ref={armRef} position={[-1, 0, 0]}>

            {/* SHOULDER */}
            <mesh position={[-7.5, -1, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    color="#9FCED2"
                    roughness={0.3}
                    metalness={0.8}
                />
            </mesh>

            {/* UPPER ARM */}
            <mesh
                position={[-10, -4, 0]}
                rotation={[0, 0, 2.5]}
            >
                <capsuleGeometry args={[1.5, 6, 8, 16]} />
                <meshStandardMaterial
                    color="#167D8D"
                    roughness={0.5}
                    metalness={0.7}
                />
            </mesh>

            {/* ELBOW */}
            <group
                ref={elbowRef}
                position={[-14, -8, 0]}
            >

                {/* FOREARM */}
                <mesh
                    position={[1.5, -2, 0]}
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
                    position={[1.5, -6, 0]}
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

export default RobotLeftArm