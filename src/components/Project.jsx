import React, {useState} from 'react'
import uno from '../assets/uno.jpg'
import sps from '../assets/sps.jpg'
import ai from '../assets/ai.jpg'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import ProCards from './ProCards'


function Project() {
  const [organized, setOrganized] = useState(false);
  const projects = [
  {
    id: 1,
    title: "UNO Website",
    image: uno,
    description: "A browser-based multiplayer-inspired UNO game developed using React. The project recreates the core gameplay mechanics, including card distribution, turn management, special action cards, and an interactive user interface. It focuses on providing an engaging user experience while demonstrating component-based architecture and state management.",
    tech:"React.js • JavaScript • HTML5 • CSS3"
  },
  {
    id: 2,
    title: "Stone Paper Scissors",
    image: sps,
    description: "A simple and interactive Stone Paper Scissors game where users compete against the computer. The application uses random move generation, score tracking, and instant result updates to create a smooth and enjoyable gameplay experience while strengthening JavaScript logic and DOM manipulation skills.",
    tech:"HTML5 • CSS3 • JavaScript"
  },
  {
    id: 3,
    // title: "Restaurant Landing Page",
    // image: "restaurant.png",
    // description: "Responsive restaurant website."
    title: "Thermography AI",
    image: ai,
    description: "An AI-powered cancer detection system developed using thermographic images and temperature matrices. The project combines image preprocessing with deep learning techniques to classify thermal images into healthy and diseased categories, aiming to support early cancer screening through non-invasive analysis.",
    tech:"Python • TensorFlow • Keras • OpenCV • NumPy • Google Colab"

  },
  {
    id: 4,
    title: "Portfolio",
    image: "portfolio.png",
    description: "An interactive 3D portfolio website built with React and React Three Fiber to showcase my projects, skills, and journey as a developer. The website combines modern UI design with 3D elements, animations, and interactive experiences to create a unique and engaging way to explore my work.",
    tech:"React.js • JavaScript • React Three Fiber • Three.js • MUI • CSS"
  }
];
  return (
    <div className='projectPage'>
      <h1 className='proh1'>Projects</h1>
      <Link to="/"><ArrowBack style={{position:"fixed"}} fontSize="large"/></Link>
      <div className={`proDiv ${organized ? "organized": ""}`}>
        {
          projects.map((project, index)=>(
            <ProCards key={project.id} image={project.image} title={project.title} description={project.description} tech={project.tech} onClick={()=> setOrganized(! organized)}/>
          ))
        }
      </div>
    </div>
  )
}

export default Project