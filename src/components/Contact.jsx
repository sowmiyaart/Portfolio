import React, { useRef , useState} from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Canvas , useFrame } from '@react-three/fiber';
import { Text , RoundedBox } from '@react-three/drei';

import * as THREE from "three";

function EnvelopeFront() {
  const shape = new THREE.Shape();

  shape.moveTo(-3, 2);
  shape.lineTo(3, 2);
  shape.lineTo(0, 0);
  shape.closePath();

  return (
    <mesh position={[0, 0, 0.3]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial
        color="#1F5661"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function LeftFold() {
  const shape = new THREE.Shape();

  shape.moveTo(-3, -2);
  shape.lineTo(0, 0);
  shape.lineTo(-3, 2);
  shape.closePath();

  return (
    <mesh position={[0, 0, 0.28]}>
      <shapeGeometry args={[shape]} />

      <meshStandardMaterial
        color="#174A54"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
function RightFold() {
  const shape = new THREE.Shape();

  shape.moveTo(3, -2);
  shape.lineTo(0, 0);
  shape.lineTo(3, 2);
  shape.closePath();

  return (
    <mesh position={[0, 0, 0.28]}>
      <shapeGeometry args={[shape]} />

      <meshStandardMaterial
        color="#174A54"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Seal() {
  const sealRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const scale = 1 + Math.sin(t * 2) * 0.08;

    sealRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={sealRef} position={[0, 0, 0.5]}>
      <circleGeometry args={[0.45, 32]} />
      <meshStandardMaterial color="#4FD1C5" />
    </mesh>
  );
}

function Paper() {
  return (
    <group>
      <RoundedBox
        args={[5.5, 6, 0.12]}
        radius={0.12}
        smoothness={4}
        position={[0, 0, 0.6]}
        castShadow
      >
        <meshStandardMaterial
          color="#c9e7e4"
          roughness={0.7}
          metalness={0}
        />
      </RoundedBox>
      <Text
        position={[0, 2, 0.7]}
        fontSize={0.45}
        color="#123A43"
        anchorX="center"
        anchorY="middle"
      >
        CONTACT
      </Text>
      <Text
        position={[0, 1.45, 0.7]}
        fontSize={0.22}
        color="#174A54"
        anchorX="center"
        anchorY="middle"
      >
        Let's connect and build something meaningful.
      </Text>

      <Text
        position={[-1.9, 0.8, 0.7]}
        fontSize={0.2}
        color="#123A43"
        anchorX="left"
        anchorY="middle"
      >
        EMAIL
      </Text>

      <Text
        position={[-1.9, 0.48, 0.7]}
        fontSize={0.18}
        color="#174A54"
        anchorX="left"
        anchorY="middle"
        onClick={() =>
          window.location.href = "mailto:sowmiya.art@gmail.com"
        }
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        sowmiya.art@gmail.com
      </Text>

      <Text
        position={[-1.9, -0.05, 0.7]}
        fontSize={0.2}
        color="#123A43"
        anchorX="left"
        anchorY="middle"
      >
        GITHUB
      </Text>

      <Text
        position={[-1.9, -0.37, 0.7]}
        fontSize={0.18}
        color="#174A54"
        anchorX="left"
        anchorY="middle"
        onClick={() =>
          window.open("https://github.com/sowmiyaart", "_blank")
        }
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        github.com/sowmiyaart
      </Text>

      <Text
        position={[-1.9, -0.9, 0.7]}
        fontSize={0.2}
        color="#123A43"
        anchorX="left"
        anchorY="middle"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/sowmiya-j-art",
            "_blank"
          )
        }
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        LINKEDIN
      </Text>

      <Text
        position={[-1.9, -1.22, 0.7]}
        fontSize={0.18}
        color="#174A54"
        anchorX="left"
        anchorY="middle"
      >
        linkedin.com/in/sowmiya-j-art
      </Text>

      <Text
        position={[-1.9, -1.75, 0.7]}
        fontSize={0.2}
        color="#123A43"
        anchorX="left"
        anchorY="middle"
      >
        LOCATION
      </Text>

      <Text
        position={[-1.9, -2.07, 0.7]}
        fontSize={0.18}
        color="#174A54"
        anchorX="left"
        anchorY="middle"
      >
        2-D 102-1 Kasiraman Street,
        Kumbakonam - 612001
      </Text>
    </group>
  );
}

function Envelope({opened, onClick}) {
  const envelopeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!opened) {
      envelopeRef.current.position.y =
        Math.sin(t * 1.2) * 0.15;

      envelopeRef.current.rotation.y =
        Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <group ref={envelopeRef} scale={1} position={[0, -0.5, 0]} onClick={onClick}>
      <RoundedBox
        args={[6, 4, 0.4]}
        radius={0.08}
        smoothness={3}
        receiveShadow
      >
        <meshStandardMaterial
          color="#123A43"
          roughness={0.8}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.25]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#174A54" />
      </mesh>
      <EnvelopeFront />
        <LeftFold />
        <RightFold />
        
        <Seal/>
    </group>
  );
}

function ContactParticles() {
  const particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          -0.5,
        ]}
      >
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial
          color="#4FD1C5"
          transparent
          opacity={0.35}
        />
      </mesh>
    );
  }

  return <group>{particles}</group>;
}

function Contact() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="contactPage">
        <Link to="/" style={{position: "absolute",top: "25px",left: "25px",zIndex: 10,color: "#4FD1C5",}}><ArrowBack style={{position:"fixed"}} fontSize="large"/></Link>

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>

        <mesh position={[0, 0, -1]}>
          <planeGeometry args={[30, 20]} />
          <meshBasicMaterial color="#081C24" />
        </mesh>

        <mesh position={[0, 0, -0.8]}>
          <circleGeometry args={[5, 64]} />
          <meshBasicMaterial
            color="#4FD1C5"
            transparent
            opacity={0.04}
          />
        </mesh>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 8]}
          intensity={2}
          castShadow
        />

        <ContactParticles/>

        <Envelope
          opened={opened}
          onClick={() => setOpened(true)}
        />

        {opened && <Paper />}

      </Canvas>

    </div>
  )
}

export default Contact