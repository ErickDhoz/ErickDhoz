import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import '../Hojas de estilos/SobreMi.css';
import developer from '../imagenes/developer.jpg';
import TypewriterEffect from 'react-typewriter-effect'
import HV from '../imagenes/HV.pdf';


function SobreMi({title, id, dark}){
  return(
    <div className={`${'Section'} ${dark && 'sectionDark'}`}>
        <div className={'sectionContenido'} id={id}>
            <Typography>
                <h3 className="title">{title}</h3>
            </Typography>
            <Card className="Card">
                <CardMedia className="CardMedia"
                image={developer}
                title="foto"/>

                 

                <CardContent className="CardContent">
                  <TypewriterEffect className="TextoEfect"
                  text="Hola, Soy Erick Machado."                  
                  textStyle={{fontSize:"1.5rem",fontWeight:"700px", color:"#333"}}
                  startDelay={100}
                  cursorColor="black"
                  tymeSpeed={100}                  
                  />
                  <TypewriterEffect className="TextoEfect"
                  text="Desarrollador Front End Junior."
                  textStyle={{fontSize:"1.5rem",fontWeight:"bold", color:"cornflowerblue"}}
                  startDelay={3500}
                  cursorColor="cornflowerblue"
                  tymeSpeed={100}                  
                  /> 
                  <Typography variant="h6" color="textSecundary" fontWeight="bold" textAlign="justify">
                    Soy Ingeniero electronico con alto conocimiento en diferentes lenguajes de programacion, como desarrollador web 
                    manejo HTML, CSS, JavaScript, React, y reactDOM.
                  </Typography>
                  <Button variant="contained" className="botonHV">
                    <a href={HV} className="a_link">Hoja de Vida</a>
                    </Button>
                                  
                </CardContent>     
                              
            </Card>
            <CardActions>
                
                </CardActions> 
        </div>
    </div>
    )
};
export default SobreMi;