import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonalTraining from "../assets/personaltraining.jpg";
import '../index.css';

const HomeTestimonial = () => {
  return (
    <Box sx={{ height: "1350px", width: "100%" }}>
      <Box
        sx={{
          width: "70%",
          paddingTop: "100px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
            marginBottom: '50px'
          }}
        >
          <Typography variant="h3" sx={{fontFamily: "Ubuntu", color: "error.dark"}}>The Results You Can Expect</Typography>
          <Typography variant="h5" sx={{fontFamily: "Normal"}}>
            The Armoury would be nothing without the men and women that have put
            their trust in us over the last 10 years, and working together we've
            had the privilege of seeing some truly tremendous accomplishments.
            Whether that means gaining the confidence to wear a two-piece at the
            beach after having their first child, fitting into the suit they
            always imagined they'd wear for their daughters wedding, or the
            everyday confidence that permeates everything they do, installed
            through the effort they've put in.{" "}
          </Typography>
        </Box>
        <Box    
        sx={{
            display: "flex",
            width: '100%',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            
          }}>
          <Box    
        sx={{
            display: "flex",
            width: '50%',
            height: '300px',
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "30px",
            
          }}>
            
            <Box
          sx={{
            width: "47%",
            height: "300px",
            backgroundImage: `url(${PersonalTraining})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}
        ></Box>
        <Box
          sx={{
            width: "47%",
            height: "300px",
            backgroundImage: `url(${PersonalTraining})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}
        ></Box>
        
            </Box>
      <Box    
        sx={{
            display: "flex",
            width: '50%',
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "center",
            gap: "30px",
            
            height: '300px',
          }}><Box
          sx={{
            width: "47%",
            height: "300px",
            backgroundImage: `url(${PersonalTraining})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}
        ></Box>
        <Box
          sx={{
            width: "47%",
            height: "300px",
            backgroundImage: `url(${PersonalTraining})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            
          }}
        ></Box></Box>
          
          
      </Box>
      <Box    
        sx={{
            display: "flex",
            width: '100%',
            height: "250px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            backgroundColor: 'white'
          }}>
            <Box sx={{width: "48.4%",
            height: "200px",
            backgroundColor: 'white', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
            <Box sx={{width: "48.4%",
            height: "200px",
            backgroundColor: 'white', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
          </Box>
          <Box    
        sx={{
            display: "flex",
            width: '100%',
            height: "250px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            backgroundColor: 'white'
          }}>
            <Box sx={{width: "21.5%",
            height: "200px",
            backgroundColor: 'black', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
            <Box sx={{width: "21.5%",
            height: "200px",
            backgroundColor: 'black', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
            <Box sx={{width: "21.5%",
            height: "200px",
            backgroundColor: 'black', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
            <Box sx={{width: "21.5%",
            height: "200px",
            backgroundColor: 'black', border: '1px solid black', borderRadius: '15px', boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",}}>
            </Box>
          </Box>
    </Box>
    </Box>
  );
};

export default HomeTestimonial;
