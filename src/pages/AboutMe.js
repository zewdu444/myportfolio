import { Stack, Typography } from '@mui/material';
import React from 'react';

function AboutMe() {
  return (
    <Stack
      sx={{
        pt: '6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="aboutme"
    >

      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        sx={{
        }}
      >
        ABOUT ME

      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          fontSize: '1.2rem',

        }}
      >
        I&apos;m a passionate software engineer with expertise in Ruby on Rails,
        React, and Postgres SQL. I thrive on collaborating with others,
        both as part of a team and individually, on various web projects.
        With a constant drive for improvement, I dive into software-related
        blog posts daily to stay up-to-date. My programming versatility
        extends to Java, JavaScript, and Python, and I&apos;m always excited
        to explore new platforms and frameworks. When I&apos;m not coding,
        you can find me enjoying the refreshing waters of a swimming pool.
        Let&apos;s build something amazing together!
      </Typography>
    </Stack>
  );
}

export default AboutMe;
