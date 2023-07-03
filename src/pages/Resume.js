import {
  Stack, Typography, Card, CardContent, Link, Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React, { useState } from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import { zewdu } from '../img';

function Resume() {
  const [scrollDown, setScrollDown] = useState(0);
  const navigate = useNavigate();
  const handleScroll = (e) => {
    setScrollDown(scrollDown + e.deltaY);
    if (scrollDown > 2000) {
      navigate('/showcase', { replace: true });
    }
    if (scrollDown < -800) {
      navigate('/', { replace: true });
    }
  };
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          xl: 'row',
        },
      }}
      onWheel={handleScroll}
    >
      <Stack sx={{
        disply: 'flex',
        flexDirection: 'column',
        pr: '1%',
      }}
      >
        <Stack sx={{ pb: '2%' }}>
          <Card sx={{ }}>
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              <img
                src={zewdu}
                style={{
                  maxHeight: '100px',
                  maxWidth: '100px',
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                }}
                alt="javascript"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                ZEWDU ANLEY
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center">
                Full Stack Web Developer and Data Analyist
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ width: '100%', pb: '2%' }}>
          <Card sx={{ }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                CONTACT
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="mailto: zewdu444@gmail.com" target="_blank">
                  zewdu444@gmail.com
                </Link>
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="https://github.com/zewdu444" target="_blank">
                  Github
                </Link>
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="https://www.linkedin.com/in/zewdu-anley/" target="_blank">
                  LinkedIn
                </Link>
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="https://twitter.com/@zewdu444" target="_blank">
                  Twitter
                </Link>
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="https://medium.com/@zewdu444" target="_blank">
                  Medium
                </Link>
              </Typography>
              <Typography variant="a" color="text.secondary" component="div" textAlign="center">
                <Link href="https://wellfound.com/u/zewdu-erkyhun" target="_blank">
                  Wellfound
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
      <Stack sx={{ width: '100%' }}>
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SKILLS&nbsp;&nbsp;
                <BuildIcon color="primary" />
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Front-End:&nbsp;
                </Typography>
                <Typography variant="body1" component="span" color="text.secondary">
                  JavaScript, React, Redux, VueJS, Svelte,  HTML5, CSS3, Quasar
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Back-End:&nbsp;
                </Typography>
                <Typography variant="body1" component="span" color="text.secondary">
                  Django, PHP, My SQL, PostgreSQL,  MongoDB, SQLite, Ruby On Rails
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Tools and Methods: &nbsp;
                </Typography>
                <Typography variant="body1" component="span" color="text.secondary">
                  Git, GitHub, Firebase, Responsive Development, TDD, Chrome Dev Tools, Postman
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Additional Skills: &nbsp;
                </Typography>
                <Typography variant="body1" component="span" color="text.secondary">
                  NLP, machine learning, TensorFlow, Panda, Pytorch, and embedded systems
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Professional: &nbsp;
                </Typography>
                <Typography variant="body1" component="span" color="text.secondary">
                  Remote, Pair programming, Teamwork, Mentoring
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EXPERIENCE &nbsp;&nbsp;
                <ScienceIcon
                  color="primary"
                  sx={{
                    fontSize: '2rem',
                    mb: '-0.4rem',
                  }}
                />
              </Typography>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  HIGHLIGHTED PERSONAL PROJECTS &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  Remote
                </Typography>
              </Stack>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  Full Stack Web Development Student and Mentor &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  November 2022 – Present
                </Typography>
              </Stack>
              <Typography variant="body1" component="div" color="text.secondary" width="50%">
                Mastering intermediate and advanced topics in full-stack development
                (including Git and DS&A challenges) while building multiple full-stack projects
                independently and via pair programming.

              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Budget app:  &nbsp;
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%">
                  A mobile web application that allows you to keep a budget.
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                  - Built with: Ruby on Rails, CSS3, and Render.
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Awesome TodoList app:  &nbsp;
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%">
                  A cross-platform to-do list application used to track daily activities.
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                  - Built with: VueJS, Quasar, and Firebase.
                </Typography>
              </Typography>
              <Typography component="div" color="text.secondary">
                <Typography variant="h6" component="span" color="text.secondary">
                  Countries Information:  &nbsp;
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%">
                  A Mobile web application offers information about countries such as their
                  population, capital city, flag, and other relevant details.
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                  - Built with: React, Redux, MUI, and External API
                </Typography>
              </Typography>
              <Stack sx={{
                pb: '1%',
                pt: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  MICROVERSE  &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  Remote
                </Typography>
              </Stack>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  Mentor (Volunteer)  &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  January 2023 – present
                </Typography>
              </Stack>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - Mentored junior web developers, providing technical support through code reviews.
              </Typography>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - Proposed improvements to code organization to improve code quality
                and overall performance.
              </Typography>

              <Stack sx={{
                pb: '1%',
                pt: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  BGI Ethiopia   &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  Addis Ababa, Ethiopia
                </Typography>
              </Stack>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  Team Leader in CMMS,   &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  May 2018 – November 2022 (5 years)
                </Typography>
              </Stack>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - Monitored system performance, availability, and user experience.
              </Typography>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - coordinated and distributed all tasks to team members.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EDUCATION &nbsp;  &nbsp;
                <SchoolIcon
                  color="primary"
                  sx={{
                    fontSize: '2rem',
                    mb: '-0.4rem',
                  }}
                />
              </Typography>
              <Stack sx={{
                pb: '1%',
                pt: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  MICROVERSE  &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  Remote
                </Typography>
              </Stack>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  Remote Full Stack Web Development Program, Full Time  &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  November, 2022 – June , 2023
                </Typography>
              </Stack>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - I spent 1300+ hours mastering algorithms, data structures, and full-stack
                development while simultaneously developing projects with JavaScript,
                Ruby On Rais, React, and Redux.

              </Typography>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - Developed skills in remote pair programming using GitHub, industry-standard
                git-flow, and daily standups to communicate and collaborate with international
                remote developers.
              </Typography>

              <Stack sx={{
                pb: '1%',
                pt: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  Addis Ababa Institution of Technology   &nbsp;
                </Typography>
              </Stack>
              <Stack sx={{
                pb: '1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
                <Typography variant="h6" component="span" color="text.secondary">
                  BSc, Electrical and Computer Engineering    &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    pr: '5%',
                  }}
                >
                  Jan 2011 –July 2016
                </Typography>
              </Stack>
              <Typography variant="body2" component="div" color="text.secondary" width="50%" pl="5px">
                - Bachelor Thesis: Android application-controlled Bluetooth
                LED Display (C++ and Java).
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            alignSelf: 'center',
            width: '250px',
          }}
          endIcon={<DownloadIcon />}
          onClick={() => {
            window.open('https://docs.google.com/document/d/1U2dezVJTFk2IE4Z4aBfCTajVcD5x_FfIj8OK9FBqIi4/edit?usp=sharing');
          }}
        >
          Download Resume
        </Button>
      </Stack>
    </Stack>
  );
}

export default Resume;
