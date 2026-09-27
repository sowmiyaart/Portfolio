import React , {useRef,useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import RobotArm from './RobotArm'
import RobotLeftArm from './RobotLeftArm'

function RobotBody({onRobotClick}) {
    const [hovered, setHovered] = useState(false)
    const robotRef = useRef()
    const headRef= useRef()
    useFrame((state) => {
        const t = state.clock.elapsedTime

        robotRef.current.position.y =
            Math.sin(t * 1.5) * 0.15

        if (headRef.current) {
            headRef.current.rotation.z =
                Math.sin(t * 0.8) * 0.08
        }
        if (robotRef.current) {
            const targetScale = hovered ? 1.03 : 1

            robotRef.current.scale.x +=
            (targetScale - robotRef.current.scale.x) * 0.08

            robotRef.current.scale.y +=
            (targetScale - robotRef.current.scale.y) * 0.08

            robotRef.current.scale.z +=
            (targetScale - robotRef.current.scale.z) * 0.08
        }
    })

  return (
    <group ref={robotRef} position={[20, 0, 0]} rotation={[0, 0, 0]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onRobotClick} >
        <mesh position={[0,-5,0]}>
            {/* <boxGeometry args={[18,13,13]}/> */}
            <RoundedBox args={[14,10,9]} radius={2.5} smoothness={6}/>
            <meshStandardMaterial color="#AFCFD2" roughness={0.28} metalness={0.8}/>
        </mesh>
        <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[2.2, 2.4, 2, 32]} />
            <meshStandardMaterial
                color="#55777C"
                roughness={0.3}
                metalness={0.85}
            />
        </mesh>
        {/* head  */}
        <group ref={headRef} position={[0,6.5,0]}>
            <mesh position={[0,0,0]}>
                <RoundedBox args={[13,9,9]} radius={2.2} smoothness={6}/>
                <meshStandardMaterial color="#B8DDE0" roughness={0.25} metalness={0.75}/>
            </mesh>
            <mesh position={[-3,0.5,5]}>
                <sphereGeometry args={[1.2, 32, 32]}/>
                <meshStandardMaterial color="#03181D" emissive="#43F5E5" emissiveIntensity={2.5} roughness={0.2} metalness={0.4}/>
            </mesh>
            <mesh position={[3,0.5,5]}>
                <sphereGeometry args={[1.2, 32, 32]}/>
                <meshStandardMaterial color="#03181D" emissive="#43F5E5" emissiveIntensity={2.5} roughness={0.2} metalness={0.4}/>
            </mesh>
            <mesh position={[0,-2.5,5]}>
                <boxGeometry args={[5, 0.7, 0.5]}/>
                <meshStandardMaterial color="#06141B" emissive="#167D8D" emissiveIntensity={0.4}/>
            </mesh>
        </group>
        <mesh position={[8.5, -1, 0]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color="#9FCED2" roughness={0.3} metalness={0.8} />
        </mesh>
        <RobotArm/>
        <RobotLeftArm/>
    </group>
  )
}

export default RobotBody