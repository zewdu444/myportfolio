import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
          <Typography variant="h5" gutterBottom paddingTop="3%" text>
            I am genuinely enthusiastic in software engineering,
            particularly full stack web development, cross-platform apps, and data science.
          </Typography>
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
              maxWidth: '80%',

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
            <CardMedia
              sx={{ height: 140, width: '4%' }}
              image="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
