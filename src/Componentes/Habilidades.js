import React from "react";
import { Typography } from "@mui/material";
import '../Hojas de estilos/Habilidades.css'
import Tecnologias from "./Tecnologias";

function Habilidades({id, title, dark}){
    return(
    <div className={`${'Section'} ${dark && 'sectionDark'}`}>
        <div className={'sectionContenido'} id={id}>
                <Typography >
                    <h3 className="titleDark">{title}</h3>
                </Typography>
                <Tecnologias/>
            </div>
    </div>)
};
export default Habilidades;