import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'


function ProCards(props) {
  return (
    <Card onClick={props.onClick} sx={{width : 500, backgroundColor : "#123A43", color: "#C9E7E4", cursor:"pointer", margin: "1%", borderRadius: 8, border:"1px solid rgba(79, 209, 197, 0.35)"}}>
        <CardMedia component={"img"} height={180} image={props.image} alt={props.title}></CardMedia>
        <CardContent>
            <Typography variant='h5' sx={{ color: "#4FD1C5",marginBottom: "12px",}}>{props.title}</Typography>
            <Typography variant="body1" sx={{color: "#C9E7E4", marginBottom: "15px",}}>{props.description}</Typography>
            <Typography variant="body2" sx={{color: "#9FC7C5",}}>{props.tech}</Typography>
        </CardContent>
    </Card>
  )
}

export default ProCards