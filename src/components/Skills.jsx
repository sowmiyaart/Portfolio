import React,{useState , useRef} from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { LocationOnTwoTone } from '@mui/icons-material'
// import Xarrow, { Xwrapper } from "react-xarrows"
import { Card, CardContent, Typography , List , ListItem , ListItemText } from '@mui/material'
import { KeyboardDoubleArrowRight } from '@mui/icons-material'

function Skills() {
  const [selectedSkill,setSelectedSkill] = useState(null);
  const mapRef = useRef(null);
  const [cardPosition, setCardPosition]= useState({x:0,y:0});
  const [cardSide, setCardSide] = useState("right");

  const arrowStyle = {
  color: "#8B5E34",
  strokeWidth: 3,
  dashness: true,
  curveness: 0.4,
  showHead: false,
};

  const cardContent = [
  {
    id: "programming",
    title: "Programming Language",
    position: "right",
    lang: ["C", "C++", "JavaScript", "Python"]
  },
  {
    id: "web",
    title: "Web Development",
    position: "left",
    lang: ["HTML5","CSS3","React.js","Responsive Web Design","REST API Integration"]
  },
  {
    id: "database",
    title: "Database",
    position: "right",
    lang:["My SQL","Database Concepts"]
  },
  {
    id:"ai",
    title:"Artificial Intelligence & Machine Learning",
    position:"right",
    lang:["Python","NumPy","Pandas","TensorFlow/Keras","OpenCV","Machine Learning Fundamentals","Deep Learning Basics"]
  },
  {
    id:"tools",
    title:"Tools & Platforms",
    position:"left",
    lang:["Visual Studio Code","Git & GitHub","Google Colab"]
  },
  {
    id:"learning",
    title:"Currently Learning",
    position:"topLeft",
    lang:["Full Stack Development","Operating System","Computer Networks","Advanced React","Artificial Intelligence"]
  },
  {
    id:"soft",
    title:"Soft Skills",
    position:"top",
    lang:["Creativity","Problem Solving","Analytical Thinking","Continuous Learning","Adaptability","Team Collaboration"]
  }
];

  const currentCard = cardContent.find(
  item => item.id === selectedSkill
);
  return (
    <div className='skillDiv'>
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <Link to="/" className='backButton'><ArrowBack style={{position:"fixed"}} fontSize="large"/></Link>
      <h1 className="skillsTitle">SKILLS</h1>
      {/* <h1>Skills</h1> */}
        <div className="map" ref={mapRef}>
          <div className="map-ground"></div>
          <div
            className="location programming"
            onClick={(e) => {setSelectedSkill("programming");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left;
              const y = pinRect.top - mapRect.top;
              setCardPosition({ x, y });
            }}>
            <LocationOnTwoTone />
            <span>Programming Language</span>
          </div>

          <div className="location web" id="web" 
            onClick={(e)=>{setSelectedSkill("web");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left;
              const y = pinRect.top - mapRect.top;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>Web Development</span>
          </div>

          <div className="location ai" id="ai" 
            onClick={(e)=>{setSelectedSkill("ai");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left - 100;
              const y = pinRect.top - mapRect.top - 300;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>AI & ML</span>
          </div>

          <div className="location database" id="database"
            onClick={(e)=>{setSelectedSkill("database")
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const spaceRight = mapRect.right - pinRect.right;
              const spaceLeft = pinRect.left - mapRect.left;
              const spaceTop = pinRect.top - mapRect.top;
              const spaceBottom = mapRect.bottom - pinRect.bottom;
              const CARD_WIDTH = 280;
              const CARD_HEIGHT = 230;
              const GAP = 20;
              const baseX = pinRect.left - mapRect.left;
              const baseY = pinRect.top - mapRect.top;
              const x =spaceRight > CARD_WIDTH + GAP? baseX + GAP: spaceLeft > CARD_WIDTH + GAP? baseX - CARD_WIDTH - GAP: baseX;
              const y =spaceRight > CARD_WIDTH + GAP || spaceLeft > CARD_WIDTH + GAP? baseY: spaceBottom > CARD_HEIGHT + GAP? baseY + GAP: baseY - CARD_HEIGHT - GAP;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>Database</span>
          </div>

          <div className="location tools" id="tools" 
            onClick={(e)=>{setSelectedSkill("tools");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left - 300;
              const y = pinRect.top - mapRect.top - 200;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>Tools</span>
          </div>

          <div className="location learning" id="learning" 
            onClick={(e)=>{setSelectedSkill("learning");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left;
              const y = pinRect.top - mapRect.top - 400;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>Currently Learning</span>
          </div>

          <div className="location soft" id="soft" 
            onClick={(e)=>{setSelectedSkill("soft");
              const pinRect = e.currentTarget.getBoundingClientRect();
              const mapRect = mapRef.current.getBoundingClientRect();
              const x = pinRect.left - mapRect.left;
              const y = pinRect.top - mapRect.top - 400;
              setCardPosition({ x, y });
            }}>
              <LocationOnTwoTone />
              <span>Soft Skills</span>
          </div>

          {
            currentCard && (
              <Card className={`skillCard ${cardSide}`}
                style={{
                  left: cardPosition.x,
                  top: cardPosition.y
                }}>
                  <CardContent>
                    <Typography variant='h6'>{currentCard.title}</Typography>
                    <hr />
                    <List>
                        {
                          currentCard.lang.map((item,index)=>(
                              <ListItem key={index}><KeyboardDoubleArrowRight/><ListItemText primary={item}/></ListItem>
                          ))
                        }
                    </List>
                  </CardContent>
              </Card>
            )
          }

        </div>
        
    </div>
  )
}

export default Skills