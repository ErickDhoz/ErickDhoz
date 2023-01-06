import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import HTML from '../imagenes/HTML.png';
import CSS from '../imagenes/CSS.png';
import JS from '../imagenes/JS.png';
import React from '../imagenes/React.png';
import Sass from '../imagenes/Sass.png'
import '../Hojas de estilos/Tecnologias.css';
import Estrellas from './Estrellas';


function Tecnologias(){

    const skills=[
        {
            año:"Experto",
            src: HTML,
            title: "HTML ",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: CSS,
            title: "CSS",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: JS,
            title: "JavaScript",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: React,
            title: "React",
            estrellas: 5,
        },
        {
            año:"Principiante",
            src: Sass,
            title: "Sass",
            estrellas: 3.5,
        },
    ]

    return(
        <div className='contenedorTimeLine'> 
            <Timeline align="left">
                {
                    skills.map(({año, src, title, estrellas},index)=>(
                        <TimelineItem key={index}>
                            <TimelineOppositeContent>
                                <Typography variant="h6" color="textSecondary" fontWeight="bold">
                                    {año}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>                                
                                <img src={src} alt={title} className="Logo"/>
                            <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                               <Paper elevation={3}
                               className="Paper">
                                <Typography variant ="h6"
                                component="h1"
                                fontWeight="bold"
                                className='tituloEstrallas'>
                                    {title}
                                </Typography>
                                    <Estrellas stars={estrellas}/>
                                </Paper> 
                            </TimelineContent>                            
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
};
export default Tecnologias;
