import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Card, Grid, Button, Stack,
} from '@mui/material';
import TeckStack from '../components/TeckStack';

function Home() {
  return (

    <Stack
      sx={{
        paddingBottom: '10%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: { xs: '0%', sm: '5%' },
      }}
      id="home"
    >
      <Grid
        container
        sx={{
          paddingTop: '10%',
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '6%',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Hello,  I’m  Zewdu
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            paddingTop="3%"
            sx={{

              maxWidth: { xs: '100%', sm: '80%', md: '100%' },
            }}
          >

            Experienced full-stack web developer specializing
            in Ruby on Rails and React. I focus on creating scalable solutions
            to improve user experiences, with expertise in web development
            and data analysis.

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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: '370px',
              minWidth: '370px',
              paddingLeft: '1%',

            }}
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
    </Stack>
  );
}

export default Home;
