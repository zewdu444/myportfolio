import {
  Stack, Typography, Card, CardContent, Link, Button, Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';
import { Book } from '@mui/icons-material';
import { zewdu } from '../img';

function Resume() {
  return (
    <Stack
      sx={{
        pt: '6%',
        display: 'flex',
        flexDirection: 'column',
      }}
      id="resume"
    >
      <Typography
        gutterBottom
        variant="h4"
        component="span"
        textAlign="center"
        color="primary"
      >
        RESUME &nbsp;
        <Book
          color="primary"
          sx={{
            fontSize: '2.5rem',
            mb: '-0.4rem',
          }}
        />

      </Typography>

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
                <Typography variant="body1" textAlign="center">
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
                <Typography variant="a" component="div" textAlign="center">
                  <Link href="mailto: zewdu444@gmail.com" target="_blank">
                    zewdu444@gmail.com
                  </Link>
                </Typography>
                <Typography variant="a" component="div" textAlign="center">
                  <Link href="https://github.com/zewdu444" target="_blank">
                    Github
                  </Link>
                </Typography>
                <Typography variant="a" component="div" textAlign="center">
                  <Link href="https://www.linkedin.com/in/zewdu-anley/" target="_blank">
                    LinkedIn
                  </Link>
                </Typography>
                <Typography variant="a" component="div" textAlign="center">
                  <Link href="https://twitter.com/@zewdu444" target="_blank">
                    Twitter
                  </Link>
                </Typography>
                <Typography variant="a" component="div" textAlign="center">
                  <Link href="https://medium.com/@zewdu444" target="_blank">
                    Medium
                  </Link>
                </Typography>
                <Typography variant="a" component="div" textAlign="center">
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
            <Card sx={{

            }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SKILLS&nbsp;&nbsp;
                  <BuildIcon color="primary" />
                </Typography>
                <Divider sx={{
                  mb: '2%',
                }}
                />
                <Typography component="div">
                  <Typography variant="h6" component="span">
                    Front-End:&nbsp;
                  </Typography>
                  <Typography variant="body1" component="span">
                    JavaScript, React, Redux, VueJS, Svelte,  HTML5, CSS3, Quasar
                  </Typography>
                </Typography>
                <Typography component="div">
                  <Typography variant="h6" component="span">
                    Back-End:&nbsp;
                  </Typography>
                  <Typography variant="body1" component="span">
                    Django, PHP, My SQL, PostgreSQL,  MongoDB, SQLite, Ruby On Rails
                  </Typography>
                </Typography>
                <Typography component="div">
                  <Typography variant="h6" component="span">
                    Tools and Methods: &nbsp;
                  </Typography>
                  <Typography variant="body1" component="span">
                    Git, GitHub, Firebase, Responsive Development, TDD, Chrome Dev Tools, Postman
                  </Typography>
                </Typography>
                <Typography component="div">
                  <Typography variant="h6" component="span">
                    Additional Skills: &nbsp;
                  </Typography>
                  <Typography variant="body1" component="span">
                    NLP, machine learning, TensorFlow, Panda, Pytorch, and embedded systems
                  </Typography>
                </Typography>
                <Typography component="div">
                  <Typography variant="h6" component="span">
                    Professional: &nbsp;
                  </Typography>
                  <Typography variant="body1" component="span">
                    Remote, Pair programming, Teamwork, Mentoring
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack sx={{ pb: '1%' }}>
            <Card sx={{ }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    mb: '1%',
                  }}
                >
                  EXPERIENCE &nbsp;&nbsp;
                  <ScienceIcon
                    color="primary"
                    sx={{
                      fontSize: '2rem',
                      mb: '-0.4rem',
                    }}
                  />
                </Typography>
                <Divider sx={{
                  mb: '2%',
                }}
                />
                <Stack sx={{
                  pb: '1%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    HIGHLIGHTED PERSONAL PROJECTS &nbsp; - &nbsp; Remote
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
                  <Typography
                    variant="h6"
                    component="span"
                  >
                    Full Stack Web Developer &nbsp; &nbsp; November 2022 – Present
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    pl: '2%',
                    width: {
                      xs: '95%',
                      lg: '60%',
                    },
                  }}
                >
                  Mastering intermediate and advanced topics in full-stack development
                  (including Git and DS&A challenges) while building multiple full-stack projects
                  independently and via pair programming.

                </Typography>
                <br />

                <Stack sx={{
                  pb: '1%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    MICROVERSE  &nbsp; - &nbsp; Remote
                  </Typography>
                </Stack>
                <Stack sx={{
                  pb: '1%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                >
                  <Typography variant="h6" component="span">
                    Mentor (Volunteer)  &nbsp; &nbsp;  January 2023 – Present
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    pl: '2%',
                    width: {
                      xs: '95%',
                      lg: '60%',
                    },
                  }}
                >
                  &bull; Mentoring three junior web developers and providing technical support
                  via Slack.
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    pl: '2%',
                    width: {
                      xs: '95%',
                      lg: '60%',
                    },
                  }}
                >
                  &bull; Assisting three mentees in avoiding common mistakes by providing them with
                  learning guidelines.

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
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    BGI ETHIOPIA   &nbsp; -  &nbsp; Addis Ababa, Ethiopia
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
                  <Typography variant="h6" component="span">
                    Team Leader in CMMS   &nbsp; &nbsp;   May 2018 – November 2022 (5 years)
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    pl: '2%',
                    width: {
                      xs: '95%',
                      lg: '60%',
                    },
                  }}
                >
                  &bull; Implemented and optimized CMMS software, leading to a 20% increase in
                  productivity.

                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    pl: '2%',
                    width: {
                      xs: '95%',
                      lg: '60%',
                    },
                  }}
                >

                  &bull; Guided cross-functional teams across five sites, providing training and
                  coaching to technicians and maintenance professionals, resulting in improved
                  efficiency and operational effectiveness.

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
              mt: '2%',
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
    </Stack>
  );
}

export default Resume;
