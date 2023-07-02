import {
  Stack, Typography, Card, CardContent, Link,
} from '@mui/material';
import React from 'react';
import { zewdu } from '../img';

function Resume() {
  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'row',
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
              <Typography variant="body1" color="text.secondary" textAlign="center">
                Full Stack Web Developer and Data Analyist
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ width: '100%' }}>
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
            </CardContent>
          </Card>
        </Stack>
      </Stack>
      <Stack sx={{ width: '100%' }}>
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
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
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
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
        <Stack sx={{ pb: '1%' }}>
          <Card sx={{ }}>
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
      </Stack>
    </Stack>
  );
}

export default Resume;
