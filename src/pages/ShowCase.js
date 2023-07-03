import {
  Grid, Typography, Button, Card, CardContent, CardActions, Stack, Chip,
} from '@mui/material';
import React, { useState } from 'react';
import RocketIcon from '@mui/icons-material/Rocket';
import { useNavigate } from 'react-router-dom';
import {
  conference, leaderboard, countries, awesome, budget, relief, rocket, bookstore,
} from '../img';

function ShowCase() {
  const [scrollDown, setScrollDown] = useState(0);
  const navigate = useNavigate();
  const handleScroll = (e) => {
    setScrollDown(scrollDown + e.deltaY);
    if (scrollDown > 2000) {
      navigate('/contactme', { replace: true });
    }
    if (scrollDown < -800) {
      navigate('/resume', { replace: true });
    }
  };
  return (
    <Stack onWheel={handleScroll}>
      <Typography
        gutterBottom
        variant="h4"
        component="span"
        textAlign="center"

      >
        My Projects &nbsp;
        <RocketIcon
          color="primary"
          sx={{
            fontSize: '2.5rem',
            mb: '-0.4rem',
          }}
        />

      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{
          xs: 2, sm: 6, md: 12, xl: 12,
        }}
      >

        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={conference} style={{ maxHeight: '200px', width: '100%' }} alt="Conference" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                African Conference on AI 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Conference page about African artificial intelligence summit were organized
                in Addis Ababa January 2023
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
                <Chip label="HTML5" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="CSS3" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => window.open('https://zewdu444.github.io/conference_page/')}
              >
                See Live

              </Button>
              <Button
                onClick={() => window.open('https://github.com/zewdu444/conference_page')}
                size="small"
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={leaderboard} style={{ maxHeight: '200px', width: '100%' }} alt="Leaderboard" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Leaderboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A leaderboard website displays scores submitted by different players.
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
                <Chip label="Webpack" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Tailwind CSS" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://zewdu444.github.io/Leaderboard/');
                }}
              >
                See Live

              </Button>
              <Button
                size="small"
                onClick={() => {
                  Window.open('https://github.com/zewdu444/Leaderboard');
                }}
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={countries} style={{ maxHeight: '200px', width: '100%' }} alt="Countries" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Countries information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Mobile web application offers information about countries details
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

                <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Redux" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="MUI" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://countries-information-4am6.onrender.com/');
                }}
              >
                See Live

              </Button>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://github.com/zewdu444/countries_info');
                }}
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={awesome} style={{ maxHeight: '200px', width: '100%' }} alt="Awesome Todo List" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Awesome Todo List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A cross-platform to-do list application used to track daily activities.
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

                <Chip label="Vue js" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Vuex" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Quasar" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://spa-todo-2b422.firebaseapp.com/#/');
                }}
              >
                See Live

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={budget} style={{ maxHeight: '200px', width: '100%' }} alt="Budget" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Budget Expense Tracking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Mobile web application where you can manage your budget:
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
                <Chip label="ROR" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="PostgreSQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Rspec" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => { window.open('https://budget-app-ai3m.onrender.com/'); }}
              >
                See Live

              </Button>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://github.com/zewdu444/budget_app');
                }}
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={relief} style={{ maxHeight: '200px', width: '100%' }} alt="Relief" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Counseling  Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Counseling Application allows clinets to
                schedule appointments with their preferred therapists.
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

                <Chip label="ROR" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="PostgreSQL" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Swagger" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => { window.open('https://reliefapp.onrender.com/'); }}
              >
                See Live

              </Button>
              <Button size="small" onClick={() => { window.open('https://github.com/zewdu444/final-capstone-back-end'); }}>See Source</Button>
              <Button
                size="small"
                onClick={() => {
                  window.open(' https://counseling-app.onrender.com/api-docs/index.html');
                }}
              >
                See API

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={rocket} style={{ maxHeight: '200px', width: '100%' }} alt="Rocket" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Space Travelers Hub
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A web application for a company that provides commercial and scientific
                space travel services.
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

                <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Redux" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Bootstrap" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => { window.open('https://space-travelers-dycl.onrender.com/'); }}
              >
                See Live

              </Button>
              <Button
                size="small"
                onClick={() => {
                  window.open('https://github.com/zewdu444/space_travelers');
                }}
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <Card sx={{
            maxHeight: {
              xs: 500, sm: 410, md: 410, xl: 410,
            },
            maxWidth: 400,
            minHeight: 410,
          }}
          >
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <img src={bookstore} style={{ maxHeight: '200px', width: '100%' }} alt="Bookstore" />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Book Store
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React Redux single page application used to create, remove and display books.
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

                <Chip label="React" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="Redux" color="primary" variant="outlined" sx={{ mb: 1 }} />
                <Chip label="PrimeReact" color="primary" variant="outlined" sx={{ mb: 1 }} />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => { window.open('https://bookstore-beoz.onrender.com/'); }}
              >
                See Live

              </Button>
              <Button
                size="small"
                onClick={() => { window.open('https://github.com/zewdu444/bookstore'); }}
              >
                See Source

              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ShowCase;
