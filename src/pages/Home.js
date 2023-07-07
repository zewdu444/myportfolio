import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Card, Grid, Button,
} from '@mui/material';
import TeckStack from '../components/TeckStack';

function Home() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          paddingTop: '12%',
          paddingLeft: '5%',
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '5%',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Full Stack Web Developer
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paddingTop="3%"
            sx={{
              textAlign: 'justify',
            }}
          >
            Experienced and enthusiastic full-stack web developer adept in Ruby on Rails and React,
            delivering scalable solutions for enhanced user experiences.
            Demonstrates agile learning, excelling in remote work and collaboration,
            in the field of web development and data analysis.

          </Typography>
          <Button
            variant="outlined"
            sx={{
              marginTop: '2%',
              marginBottom: '5%',
              maxWidth: { xs: '50%', sm: '80%', md: '40%' },
              height: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
              border: '3px solid',
            }}
            onClick={() => {
              window.open('mailto:zewdu444@gmail.com', '_blank');
            }}
          >
            Hire Me

          </Button>

        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Card
            sx={{
              maxWidth: '400px',
              minWidth: '400px',
              paddingLeft: '2%',

            }}
            elevation={3}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                textAlign: 'center',
                paddingTop: '2%',
              }}
            >
              Tech Stack
            </Typography>
            <TeckStack />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
