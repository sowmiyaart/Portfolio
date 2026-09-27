import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Card, CardContent, Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';
import { Button } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import web from '../assets/fullStack.jpg'
import ai from '../assets/ai.jpg'
import art from '../assets/art.jpg'

function About() {
  return (
    <div>
        <Link to="/"><ArrowBack style={{position:"fixed"}} fontSize="large"/></Link>
        
        <div className='abtPage'>
            <h1>ABOUT ME</h1>
            
            <div className='shortIntro'>
                <div className='profile'></div>
                <h1> Sowmiya Jayakumar</h1>
                <h4>I'm currently exploring the intersection of AI, software development, and creative web experiences. I enjoy learning by building, experimenting with new technologies, and turning ideas into projects that feel both functional and unique.</h4>
            </div>
            <div className='abtDiv'>
                <h2>Who I am</h2>
                <h4>I've always been curious about how things work and what I can create with them. That curiosity led me to Computer Science, where I found a space to combine problem-solving with creativity. Today, I’m exploring AI, software development, and interactive web experiences while building projects that reflect what I learn along the way.</h4>

            </div>
            <div className='abtDiv'>
                <h2>What I'm exploring</h2>
                <div className="exploringButtons">
                    <Button variant="outlined">React</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">AI / ML</Button>
                    <Button variant="outlined">3D Web</Button>
                    <Button variant="outlined">Python</Button>
                </div>
            </div>
            <div className='abtDiv'>
                <h2>What I like building</h2>
                <h4>This is my recent work I've done</h4>
            </div>
            <div className="abtDiv learnSection">
                <h2>How I learn</h2>

                <div className="learningFlow">

                    <div className="learnNode">
                        <div className="nodeCircle">01</div>
                        <div className="nodeContent">
                            <h3>Learn</h3>
                            <p>Understand the concept and explore how it works.</p>
                        </div>
                    </div>

                    <div className="flowLine"></div>

                    <div className="learnNode">
                        <div className="nodeCircle">02</div>
                        <div className="nodeContent">
                            <h3>Build</h3>
                            <p>Turn what I learn into something real.</p>
                        </div>
                    </div>

                    <div className="flowLine"></div>

                    <div className="learnNode">
                        <div className="nodeCircle">03</div>
                        <div className="nodeContent">
                            <h3>Break</h3>
                            <p>Experiment, make mistakes, and find what went wrong.</p>
                        </div>
                    </div>

                    <div className="flowLine"></div>

                    <div className="learnNode">
                        <div className="nodeCircle">04</div>
                        <div className="nodeContent">
                            <h3>Understand</h3>
                            <p>Dig deeper until I understand why it works.</p>
                        </div>
                    </div>

                    <div className="flowLine"></div>

                    <div className="learnNode">
                        <div className="nodeCircle">05</div>
                        <div className="nodeContent">
                            <h3>Improve</h3>
                            <p>Refine it, learn from it, and carry it into the next project.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='abtDiv'>
                <h2>Beyond code</h2>
                <div className='beyondDiv'>
                    <Card className='cards'>
                        <CardContent>
                            <div className='icn'><MusicNoteIcon /></div>
                            <Typography variant='h6'>Music</Typography>
                            <Typography className='txt'>I enjoy discovering music, especially atmospheric
                    BGM and instrumentals.</Typography>
                        </CardContent>
                    </Card>
                    <Card className='cards'>
                        <CardContent>
                            <div className='icn'><PaletteIcon/></div>
                            <Typography variant='h6'>Art & Creativity</Typography>
                            <Typography className='txt'>I like exploring visual ideas, design and creative
                    ways of presenting things.</Typography>
                        </CardContent>
                    </Card>
                    <Card className='cards'>
                        <CardContent>
                            <div className='icn'></div>
                            <Typography variant='h6'> Music</Typography>
                            <Typography className='txt'> I like exploring visual ideas, design and creative
                    ways of presenting things.</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='abtDiv'>
                <h2>Where I'm heading</h2>
                <h4>I want to keep growing as a developer while exploring AI, software engineering, and creative technology — building things that are not only functional, but also enjoyable to experience.</h4>

            </div>

        </div>
    </div>
  )
}

export default About