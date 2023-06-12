import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../index.css';

export default function Footer(){
    return(<Box sx={{width: '100%', height:'250px',}}>
        <Box sx={{width: '90%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
            <Box sx={{width: '20%', height: '90%',  display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px'}}>
                <Typography sx={{ fontFamily: 'Ubuntu', marginBottom: '20px', borderBottom: '1px solid black'}}> Pages </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Home </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> About </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Services </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Testimonials </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Contact </Typography>
            </Box>
            <Box sx={{width: '20%', height: '90%',  display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px'}}>
                <Typography sx={{ fontFamily: 'Ubuntu', marginBottom: '20px', borderBottom: '1px solid black'}}> Services </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Body Building </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Nutrition </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Training </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Yoga </Typography>
            </Box>
            <Box sx={{width: '20%', height: '90%',  display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px'}}>
                <Typography sx={{ fontFamily: 'Ubuntu', marginBottom: '20px', borderBottom: '1px solid black'}}> Contact </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> #555-555-5555 </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Yoga@email.com </Typography>
                
            </Box>
            <Box sx={{width: '20%', height: '90%',  display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px'}}>
                <Typography sx={{ fontFamily: 'Ubuntu',marginBottom: '20px', borderBottom: '1px solid black'}}> Hours </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> M: 10:00am-10:00pm </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Tu: 10:00am-10:00pm </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Wed: 10:00am-10:00pm </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Th: 10:00am-10:00pm </Typography>
                <Typography sx={{ fontFamily: 'Ubuntu', }}> Fri: 10:00am-10:00pm </Typography>
            </Box>
        </Box>
    </Box>);
}