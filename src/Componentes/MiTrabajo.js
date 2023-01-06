import React from "react";
import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import '../Hojas de estilos/MiTrabajo.css';
import mockData from "../mockData";


function MiTrabajo({id, title, dark}){
    return(
    <div className={`${'Section'} ${dark && 'sectionDark'}`}>
        <div className={'sectionContenido'} id={id}>
                <Typography>
                    <h3 className="title">{title}</h3>
                </Typography>
                <Grid container className="grid">
                    {
                     mockData.map(({title, image, link}, index)=>(
                      <Grid item key ={index} xs={12} sm={6} md={4} className="Grid_Contenedor">
                        <Card className="card">
                        <img src={image} alt="imagen"  className="caratula"/>
                          <CardContent>
                            <Link href={link} color="primary" target="_blank" rel="noopener noreferrer" className="Link_Card">
                              {title}
                            </Link>
                          </CardContent>                          
                        </Card>
                        </Grid>
                     ))   
                    }
                </Grid>
            </div>
    </div>)
};

export default MiTrabajo;