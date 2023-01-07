import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar } from "@mui/material";
import React, { useState } from "react";
import '../Hojas de estilos/NavBar.css';
import {Link, animateScroll as scroll} from 'react-scroll';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

function NavBar(){

const [open, setOpen]= useState(false);    

const links=[
    {
        id:"sobreMi",
        text:"Sobre Mi",
        icon: <InfoIcon/>
    },
    {
        id:"habilidad",
        text:"Habilidades",
        icon:<CodeIcon/>
    },
    {
        id:"miTrabajo",
        text:"Mi Trabajo",
        icon: <WorkIcon/>
    },
    {
        id:"Contacto",
        text:"Contáctame",
        icon: <AlternateEmailIcon/>
    }
]

    return(
        <>
        <AppBar className="navBar">
           <Toolbar className="Toolbar">
            <img src='/imagenes/Logo.png' className='logo' alt="Logo"/>
            
            <List className="Menu">
                { 
            links.map(({id, text}, index)=>(
                <Link className={"Link LinkH"}
                        activeClass ="active"
                        key={index} 
                        to ={id} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-65}>
                      {text}
                  </Link>
                ))
                }
            </List>   
            <IconButton className="IconButton"  id ="BL" onClick={()=>setOpen(true)}>
                <MenuIcon className="MenuIcon" id ="BL"/>
            </IconButton>
                
        </Toolbar>
        </AppBar>
        <Drawer  className="Drawer" anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton className="IconButton" onClick={()=>setOpen(false)}>
                <CancelIcon className="CancelIcon"/>
            </IconButton>
                <Divider/>
                { 
            links.map(({id, text, icon}, index)=>(
                <Link className={"MenuVertical"}
                        activeClass ="active"
                        key={index} 
                        to ={id} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-65}>
                            
                            <ListItem >
                                <span>
                                    <ListItemIcon className="ListenIcon">
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                  </Link>
                ))
                }

        </Drawer>
        </>
    )
};
export default NavBar;