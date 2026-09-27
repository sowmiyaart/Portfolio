import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Paper, Divider, Stack, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { Email, PinDrop, Phone, LinkedIn, GitHub } from '@mui/icons-material'
import { FiberManualRecord } from '@mui/icons-material'

function Resume() {
  return (
    <div className='cvPage'>
      <Link to="/" className='backButton'><ArrowBack style={{position:"fixed"}} fontSize="large"/></Link>
      <h1 className='cvh1'>Resume</h1>
      <Paper elevation={5} sx={{width: "850px", margin: "40px auto", padding: 4, borderRadius: 3}}>
        <Typography variant='h3' fontWeight="bold">Sowmiya J</Typography>
        <Typography variant='h6' color='text.secondary'>Computer Science Student</Typography>

        <Divider sx={{my:2}} />

        <Stack direction="column" spacing={2}>
          <Stack spacing={2} direction={'row'}>
            <PinDrop/>
            <Typography>Tamil Nadu, India</Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <Email/> 
            <Typography>sowmiya.art@gmail.com</Typography>
            <Phone/>
            <Typography>+91 9626497402</Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <LinkedIn/>
            <Typography>www.linkedin.com/in/sowmiya-j-art</Typography>
            <GitHub/>
            <Typography>kivwvovw</Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>portfolio</Stack>
        </Stack>

        <Divider sx={{my:2}}/>

        <Typography variant='h4' fontWeight="bold">PROFESSIONAL SUMMARY</Typography>
        <Typography variant='body1'>Motivated Computer Science undergraduate with a strong interest in Full Stack Development and Artificial Intelligence. Skilled in developing responsive web applications using React and JavaScript, with hands-on experience building machine learning projects using Python, TensorFlow, and OpenCV. Passionate about problem-solving, continuous learning, and creating intuitive user experiences.</Typography>

        <Divider sx={{my:2}}/>

        <Typography variant='h4'>EDUCATION</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}>B.Tech in Computer Science and Engineering</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}>SASTRA Deemed University, Tamil Nadu</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}>Expected Graduation: 2028</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}>CGPA: 7.4/10</Typography>

        <Divider sx={{my:2}}/>

        <Typography variant='h4'>TECHNICAL SKILLS</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}><ListItemIcon sx={{ minWidth: 20 }}><FiberManualRecord sx={{ fontSize: 7 }} /></ListItemIcon>Programming: C, C++, Python, JavaScript</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}><ListItemIcon sx={{ minWidth: 20 }}><FiberManualRecord sx={{ fontSize: 7 }} /></ListItemIcon>Web Technologies: HTML5, CSS3, React.js, Responsive Web Design, REST API Integration</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}><ListItemIcon sx={{ minWidth: 20 }}><FiberManualRecord sx={{ fontSize: 7 }} /></ListItemIcon>Database: MySQL, SQL</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}><ListItemIcon sx={{ minWidth: 20 }}><FiberManualRecord sx={{ fontSize: 7 }} /></ListItemIcon>AI & Machine Learning: TensorFlow/Keras, OpenCV, NumPy, Pandas, CNN Basics, Data Preprocessing</Typography>
        <Typography variant='body1' sx={{ pl: 4, py: 0 }}><ListItemIcon sx={{ minWidth: 20 }}><FiberManualRecord sx={{ fontSize: 7 }} /></ListItemIcon>Tools: Git, GitHub, Visual Studio Code, Google Colab, Jupyter Notebook, Postman</Typography>

        <Divider sx={{my:2}}/>

        <Typography variant='h4'>PROJECTS</Typography>

        <Typography variant='h5' sx={{ mb: 0, pl:4, py:0 }} >Cancer Thermography Detection</Typography>

        <List sx={{ pl: 8, py: 0 }}>

          <ListItem sx={{ padding: 0 }}>

            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Developed a deep learning model to classify breast thermography images.'/>

          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Used Python, TensorFlow/Keras, OpenCV, NumPy, and Pandas for preprocessing and model development.'/>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Worked with thermal images and temperature matrices to improve diagnostic analysis.'/>
          </ListItem>
        </List>

        <Typography variant='h5' sx={{ mb: 0, pl:4, py:0 }}>UNO Web Application</Typography>

        <List sx={{ pl: 8, py: 0 }}>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Designed and developed an interactive UNO game interface using React.'/>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Implemented dynamic card logic, player turns, and responsive UI components.'/>
          </ListItem>
        </List>

        <Typography variant='h5' sx={{ mb: 0, pl:4, py:0 }}>Stone Paper Scissors Game</Typography>

        <List sx={{ pl: 8, py: 0 }}>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Built an interactive web game using HTML, CSS, and JavaScript.'/>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Implemented score tracking and responsive user interface.'/>
          </ListItem>
        </List>

        <Divider sx={{my:2}}/>

        <Typography variant='h4'>SOFT SKILLS</Typography>
        <Typography variant='body1' sx={{ pl:4, py:0}}>Problem Solving • Analytical Thinking • Team Collaboration • Adaptability • Creativity • Continuous Learning</Typography>

        <Divider sx={{my:2}}/>

        <Typography variant='h4'>ACHIEVEMENTS</Typography>
        <List sx={{ pl: 4, py: 0 }}>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Built multiple web development and AI projects.'/>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Developed a personal portfolio using React and Material UI.'/>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord sx={{ fontSize: 7 }} />
            </ListItemIcon>
            <ListItemText primary='Actively exploring Full Stack Development and Machine Learning.'/>
          </ListItem>
        </List>

      </Paper>
    </div>
  )
}

export default Resume