import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import image from './about.png'


const AboutSection = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));



const AboutContent = styled(Box)(({ theme }) => ({
//   paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const AboutUs = () => {
  return (
    <AboutSection style={{background: 'rgb(12, 48, 125)'}}>
         <Typography variant="h3" sx={{ fontWeight: 600, marginBottom: 4, color:'white', paddingLeft:5 }}>
              About Us
            </Typography>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={6}>
            {/* <img source={image}/> */}
            <img src={image} style={{height: '100%',width: '80%',padding:30}}></img>
          {/* <AboutImage /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutContent>
           
            <Typography variant="body1" sx={{ marginBottom: 4, color: 'white', fontSize:22 }}>
              Sound of Silence is a self-contained system which aims at automating the process of lipreading. It will generate audio from silent/noisy videos. There is a lot of research work done on this problem but there is no such application made available to the use of the common man. SoS will be a free of cost application made using the latest tools and technologies making lipreading easier for humans when the speech is absent or corrupted by external noise.
            </Typography>
          </AboutContent>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutUs;
