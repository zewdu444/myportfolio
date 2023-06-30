import {
  Grid, Card, CardContent, Typography, CardMedia, Box, Button,
} from '@mui/material';
import React from 'react';
import { javascript } from '../img';

function ShowCase() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati mollitia modi eos rerum! Quibusdam, ipsam nostrum neque
                modi ducimus aperiam maiores cum hic delectus fugiat! Aliquam sit
                suscipit qui perferendis.
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            >
              <Button variant="outlined">
                See More
              </Button>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200, pr: 1 }}
            image={javascript}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', xl: 'row',
          },
        }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '400px' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati mollitia modi eos rerum! Quibusdam, ipsam nostrum neque
                modi ducimus aperiam maiores cum hic delectus fugiat! Aliquam sit
                suscipit qui perferendis.
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            >
              <Button variant="outlined">
                See More
              </Button>

            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: {
                xs: '100%', sm: '100%', md: '100%', xl: 200,
              },
              maxHeight: {
                xs: '200px', sm: '200px', md: '200px', xl: '200px',
              },
              pr: 1,
            }}
            image={javascript}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati mollitia modi eos rerum! Quibusdam, ipsam nostrum neque
                modi ducimus aperiam maiores cum hic delectus fugiat! Aliquam sit
                suscipit qui perferendis.
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            >
              <Button variant="outlined">
                See More
              </Button>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200, pr: 1 }}
            image={javascript}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati mollitia modi eos rerum! Quibusdam, ipsam nostrum neque
                modi ducimus aperiam maiores cum hic delectus fugiat! Aliquam sit
                suscipit qui perferendis.
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            >
              <Button variant="outlined">
                See More
              </Button>

            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200, pr: 1 }}
            image={javascript}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default ShowCase;
