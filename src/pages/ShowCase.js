import {
  Grid, Typography, Button, Card, CardContent, CardActions, Stack, Chip,
} from '@mui/material';
import React from 'react';
import { bootstrap, javascript } from '../img';

function ShowCase() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{
        xs: 2, sm: 6, md: 12, xl: 12,
      }}
    >
      <Grid item xs={2} sm={3} md={3}>
        <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <img src={javascript} style={{ maxHeight: '200px', width: '100%' }} alt="javascript" />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                ml: -0.5,
                mt: 1,
                mb: -2,
              }}
              spacing={1}
            >
              <Chip label="Javascript" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="Ruby on Rails" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="SQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2} sm={3} md={3}>
        <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <img src={bootstrap} style={{ maxHeight: '200px', width: '100%' }} alt="javascript" />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                ml: -0.5,
                mt: 1,
                mb: -2,
              }}
              spacing={1}
            >

              <Chip label="Javascript" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="Ruby on Rails" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="SQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2} sm={3} md={3}>
        <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <img src={javascript} style={{ maxHeight: '200px', width: '100%' }} alt="javascript" />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                ml: -0.5,
                mt: 1,
                mb: -2,
              }}
              spacing={1}
            >

              <Chip label="Javascript" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="Ruby on Rails" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="SQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2} sm={3} md={3}>
        <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <img src={bootstrap} style={{ maxHeight: '200px', width: '100%' }} alt="javascript" />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                ml: -0.5,
                mt: 1,
                mb: -2,
              }}
              spacing={1}
            >

              <Chip label="Javascript" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="Ruby on Rails" color="primary" variant="outlined" sx={{ mb: 1 }} />
              <Chip label="SQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ShowCase;
