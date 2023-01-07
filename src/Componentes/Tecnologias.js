import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import '../Hojas de estilos/Tecnologias.css';
import Estrellas from './Estrellas';


function Tecnologias(){

    const skills=[
        {
            año:"Experto",
            src: 'https://erickdhoz.github.io/ErickDhoz/imagenes/HTML.png',
            title: "HTML ",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: 'https://erickdhoz.github.io/ErickDhoz/imagenes/CSS.png',
            title: "CSS",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: 'https://erickdhoz.github.io/ErickDhoz/imagenes/JS.png',
            title: "JavaScript",
            estrellas: 4,
        },
        {
            año:"Experto",
            src: 'https://erickdhoz.github.io/ErickDhoz/imagenes/React.png',
            title: "React",
            estrellas: 4,
        },
        {
            año:"Principiante",
            src: 'https://erickdhoz.github.io/ErickDhoz/imagenes/Sass.png',
            title: "Sass",
            estrellas: 3,
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
