import React from "react";
import { Typography, Paper, Radio, TextField, Button } from '@mui/material';
import '../Hojas de estilos/Contacto.css';
import { useState } from "react";

function Contacto({id, title, dark}){
    const[value, setValue]=useState('Say Hi');

    const handleChange = (e) =>{
      setValue(e.target.value)
    };

    return(
        <div className={`${'Section'} ${dark && 'sectionDark'}`}>
            <div className={'sectionContenido'} id={id}>
                <Typography>
                    <h3 className="titleDark">{title}</h3>
                </Typography>
                <Paper className="root">
                  <div className="titulo_formulario">
                    
                    <div className="choise">
                      <span>Di Hola</span>
                      <Radio 
                        value="Say Hi"
                        checked={value==="Say Hi"}
                        color="primary"
                        onChange={handleChange}
                      />

                      <span>Consigue una cotización</span>
                      <Radio 
                        value="Consigue una cotización"
                        checked={value==="Consigue una cotización"}
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <form className="formulario" noValidate autoComplete="off">
                    <TextField label="Tu nombre" /><br/><br/>
                    <TextField label="Tu Correo"/><br/><br/>
                    { value=== "Consigue una cotización" ?(
                      <>
                      <TextField label="Servicio necesario" /><br/><br/>
                      <TextField label="Valor estimado" /><br/><br/>
                      </>
                    ):null}
                    <TextField label="Escribe un mensaje" /><br/><br/>
                  </form>
                  <Button variant="contained">Enviar</Button>
                </Paper>
            </div>
        </div>
    )
};
export default Contacto;