import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import '../index.css';

export default function HomeContact() {
    return (
    <Box sx={{width: '100%', height: '300px', backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyCotent: 'center', alignItems: 'center'}}>
        <Box sx={{width: '80%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Typography sx={{fontSize: '36px', fontFamily: 'Ubuntu', color: 'gold'}}> Let's Connect!</Typography>
        </Box>
        
        <Box sx={{width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Box sx={{height: '120px', width: '120px', backgroundImage:`url(${Facebook})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'right',}}
            
            ></Box>
            <Box  sx={{height: '120px', width: '120px', backgroundImage:`url(${Instagram})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'right'}}
            
            src="#"></Box>
            <Box  sx={{height: '120px', width: '120px', backgroundImage:`url(${Twitter})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'right'}}
            
            src="#"></Box>
            <Box  sx={{height: '120px', width: '120px', backgroundImage:`url(${Youtube})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'right'}}
    
            src="#"></Box>
        </Box>
    </Box>);
}